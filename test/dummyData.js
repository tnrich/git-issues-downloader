module.exports = {
  nextPageLink: '<https://api.github.com/repositories/90146723/issues?per_page=10&state=all&page=2>',

  apiResponse: {  server: 'GitHub.com',
  date: 'Thu, 25 May 2017 15:07:19 GMT',
  'content-type': 'application/json; charset=utf-8',
  'content-length': '19341',
  connection: 'close',
  status: '200 OK',
  'x-ratelimit-limit': '5000',
  'x-ratelimit-remaining': '4995',
  'x-ratelimit-reset': '1495725009',
  'cache-control': 'private, max-age=60, s-maxage=60',
  vary: 'Accept, Authorization, Cookie, X-GitHub-OTP, Accept-Encoding',
  etag: '"5a756141e109ece9ec1ad732218bbbd9"',
  'x-github-media-type': 'github.v3; format=json',
  link: '<https://api.github.com/repositories/90146723/issues?per_page=10&state=all&page=2>; rel="next", <https://api.github.com/repositories/90146723/issues?per_page=10&state=all&page=3>; rel="last"',
  'access-control-expose-headers': 'ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval',
  'access-control-allow-origin': '*',
  'content-security-policy': 'default-src \'none\'',
  'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'deny',
  'x-xss-protection': '1; mode=block',
  'x-served-by': '9000e9eef7bb1e89f22030c676da140e',
  'x-github-request-id': 'D3E0:15878:8BC03BB:A66CB9F:5926F327'},


  testRequestOptions: {
    headers: {
      'User-Agent': 'request'
    },
    auth: {
      'user': 'username',
      'pass': 'password'
    }
  },
  startUrl: 'https://api.github.com/repos/pavelbinar/ro_convert-github-issues-to-csv/issues?per_page=100&state=all&page=1',

  issuesResult21: `"21"; "issue message"; "https://github.com/pavelbinar/ro_convert-github-issues-to-csv/issues/21"; ""; "open"; "05/23/2017"
`,
  issuesResult20: `"20"; "issue twenty"; "https://github.com/pavelbinar/ro_convert-github-issues-to-csv/issues/20"; ""; "open"; "05/09/2017"
`,

  JSONdata21: [{
    url: 'https://api.github.com/repos/pavelbinar/ro_convert-github-issues-to-csv/issues/21',
    repository_url: 'https://api.github.com/repos/pavelbinar/ro_convert-github-issues-to-csv',
    labels_url: 'https://api.github.com/repos/pavelbinar/ro_convert-github-issues-to-csv/issues/21/labels{/name}',
    comments_url: 'https://api.github.com/repos/pavelbinar/ro_convert-github-issues-to-csv/issues/21/comments',
    events_url: 'https://api.github.com/repos/pavelbinar/ro_convert-github-issues-to-csv/issues/21/events',
    html_url: 'https://github.com/pavelbinar/ro_convert-github-issues-to-csv/issues/21',
    id: 230681174,
    number: 21,
    title: 'issue message',
    user: {
      login: 'lukasvesely98',
      id: 27784113,
      avatar_url: 'https://avatars1.githubusercontent.com/u/27784113?v=3',
      gravatar_id: '',
      url: 'https://api.github.com/users/lukasvesely98',
      html_url: 'https://github.com/lukasvesely98',
      followers_url: 'https://api.github.com/users/lukasvesely98/followers',
      following_url: 'https://api.github.com/users/lukasvesely98/following{/other_user}',
      gists_url: 'https://api.github.com/users/lukasvesely98/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/lukasvesely98/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/lukasvesely98/subscriptions',
      organizations_url: 'https://api.github.com/users/lukasvesely98/orgs',
      repos_url: 'https://api.github.com/users/lukasvesely98/repos',
      events_url: 'https://api.github.com/users/lukasvesely98/events{/privacy}',
      received_events_url: 'https://api.github.com/users/lukasvesely98/received_events',
      type: 'User',
      site_admin: false
    },
    labels: [],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: '2017-05-23T11:55:12Z',
    updated_at: '2017-05-23T11:55:12Z',
    closed_at: null,
    body: ''
  }],
  JSONdata20: [{
      url: 'https://api.github.com/repos/pavelbinar/ro_convert-github-issues-to-csv/issues/20',
      repository_url: 'https://api.github.com/repos/pavelbinar/ro_convert-github-issues-to-csv',
      labels_url: 'https://api.github.com/repos/pavelbinar/ro_convert-github-issues-to-csv/issues/20/labels{/name}',
      comments_url: 'https://api.github.com/repos/pavelbinar/ro_convert-github-issues-to-csv/issues/20/comments',
      events_url: 'https://api.github.com/repos/pavelbinar/ro_convert-github-issues-to-csv/issues/20/events',
      html_url: 'https://github.com/pavelbinar/ro_convert-github-issues-to-csv/issues/20',
      id: 227380004,
      number: 20,
      title: 'issue twenty',
      user: {
        login: 'lukasvesely98',
        id: 27784113,
        avatar_url: 'https://avatars1.githubusercontent.com/u/27784113?v=3',
        gravatar_id: '',
        url: 'https://api.github.com/users/lukasvesely98',
        html_url: 'https://github.com/lukasvesely98',
        followers_url: 'https://api.github.com/users/lukasvesely98/followers',
        following_url: 'https://api.github.com/users/lukasvesely98/following{/other_user}',
        gists_url: 'https://api.github.com/users/lukasvesely98/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/lukasvesely98/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/lukasvesely98/subscriptions',
        organizations_url: 'https://api.github.com/users/lukasvesely98/orgs',
        repos_url: 'https://api.github.com/users/lukasvesely98/repos',
        events_url: 'https://api.github.com/users/lukasvesely98/events{/privacy}',
        received_events_url: 'https://api.github.com/users/lukasvesely98/received_events',
        type: 'User',
        site_admin: false
      },
      labels: [],
      state: 'open',
      locked: false,
      assignee: null,
      assignees: [],
      milestone: null,
      comments: 0,
      created_at: '2017-05-09T14:10:14Z',
      updated_at: '2017-05-19T16:36:18Z',
      closed_at: null,
      body: ''
    }]


}