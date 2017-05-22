#!/usr/bin/env node

const fs = require('fs')
const request = require('request')
const _ = require('lodash')
const moment = require('moment')
const argv = require('yargs')
  .usage('Usage: $0 --username [username] --password [password] --repository [full URL of repository]')
  .demandOption(['username', 'password', 'repository'])
  .default('fileName', 'all_issues.csv')
  .help('h')
  .alias('h', 'help')
  .describe('fileName', 'Name of output file')
  .version('1.0.0')
  .alias('version', 'ver')
  .argv
const chalk = require('chalk')

const outputFileName = argv.fileName

const issuesPerPage = 100
const username = argv.username
const password = argv.password
const repoUserName = argv.repository.slice(19, argv.repository.indexOf('/', 19))
const repoUrl = argv.repository.slice(20 + repoUserName.length)

const startUrl = `https://api.github.com/repos/${repoUserName}/${repoUrl}/issues?per_page=${issuesPerPage}&state=all&page=1`

const requestOptions = {
  headers: {
    'User-Agent': 'request'
  },
  auth: {
    'user': username,
    'pass': password
  }
}

//Main function for running program

function main (data, url) {

  requestBody(url, (error, response, body) => {

    const linkObject = responseToObject(response)

    //take body, parse it and add it to data

    body = JSON.parse(body)
    data = _.concat(data, body)

    if (linkObject.nextPage) {

      console.log(chalk.green(`Successfully requested ${linkObject.nextPage.number - 1}. page of ${linkObject.lastPage.number}`))

      main(data, linkObject.nextPage.url)
    }
    else {
      console.log(chalk.green(`Successfully requested last page`))

      writeData(convertJSonToCsv(error, data), outputFileName)
    }

  })
}

function getUrlAndNumber (link) {
  return {
    url: link.slice(link.indexOf('<') + 1, link.indexOf('>')),
    number: link.slice(link.indexOf('page', link.indexOf('state')) + 5, link.indexOf('>'))
  }
}

function responseToObject (response) {

  const rawLink = response.headers.link

  if (rawLink && rawLink.includes('next')) {
    const links = rawLink.split(',')

    let linksInfo = {
      nextPage: (links[0]) ? getUrlAndNumber(links[0]) : false,
      lastPage: (links[1]) ? getUrlAndNumber(links[1]) : false,
      firstPage: (links[2]) ? getUrlAndNumber(links[2]) : false,
      prevPage: (links[3]) ? getUrlAndNumber(links[3]) : false,
    }

    return linksInfo
  }
  return false
}

//Function using URL to request API

function requestBody (url, callback) {
  console.log('Requesting API...')
  request(url, requestOptions, function (err, response, body) {
    if (err) throw err
    callback(err, response, body)
  })
}

//Function which take JSON data, convert them into CSV format and return them

function convertJSonToCsv (err, jsData) {
  if (err) throw err

  console.log('\nConverting issues...')

  const csvData = jsData.map(object => {
    const date = moment(object.created_at).format('L')
    const labels = object.labels
    const stringLabels = labels.map(label => label.name).toString()

    return `"${object.number}"; "${object.title.replace(/"/g, '\'')}"; "${object.html_url}"; "${stringLabels}"; "${object.state}"; "${date}"\n`
  }).join('')

  console.log(chalk.green(`Successfully converted ${jsData.length} issues!`))

  return csvData
}

// Function create a new file and write converted data on him

function writeData (data, outputFileName) {
  console.log('\nWriting data to csv file')
  fs.writeFile(outputFileName, data, (err) => {
    if (err) throw err

    console.log(chalk.yellow(`\nIssues was downloaded, converted and saved to ${outputFileName}`))
  })
}

//run main function

main([], startUrl)