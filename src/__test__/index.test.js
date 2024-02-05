const axios = require('axios');
//const lib = require("../config/metriquesPrCalculations");
const url = 'http://localhost:3000';


describe('Get the Kanban Route', () => {
  test('The get route', async () => {
    const res = await axios.get(url + "/metriquesPullRequests/getBoard")
    expect(res).toBeTruthy()
    expect(res.status).toBe(200)
    expect(res.data).toEqual({"code": 200, "message": "OK", "results": {"viewer": {"login": "louis-antoine-etsmtl", "projectV2": {"title": "Kanban-metrics-h24-grp2-eq3"}}}})
  })
})

describe('Get PR commits messages Route', () => {
  test('The get route', async () => {
    const res = await axios.get(url + "/metriquesPullRequests/getPRCommitsMes")
    console.log(res.dta)
    expect(res).toBeTruthy()
    expect(res.status).toBe(200)
    expect(res.data).toEqual({"code":200,"message":"OK","results":{"data":{"repository":{"pullRequest":{"commits":{"edges":[{"node":{"commit":{"oid":"d5fc0c6f521a3108b190c5e9bc3ce0f47f655173","message":"Create move-to-backlog.yml"}}},{"node":{"commit":{"oid":"e7252003efa66439bfb4ec034a0f1e9b60b30a74","message":"Update move-to-backlog.yml"}}}]},"comments":{"edges":[{"node":{"body":"Hello @NABILNASSIH Thanks for using the -m while commiting!","author":{"login":"thameurAissaoui"}}}]},"reviews":{"edges":[]}}}},"headers":{},"status":200}})
  })
})

describe('Get PR commits count Route', () => {
  test('The get route', async () => {
    const res = await axios.get(url + "/metriquesPullRequests/getPRCommitsCount")
    console.log(res.dta)
    expect(res).toBeTruthy()
    expect(res.status).toBe(200)
    expect(res.data).toEqual({"code":200,"message":"OK","results":{"data":{"repository":{"pullRequest":{"commits":{"edges":[{"node":{"commit":{"oid":"d5fc0c6f521a3108b190c5e9bc3ce0f47f655173","message":"Create move-to-backlog.yml"}}},{"node":{"commit":{"oid":"e7252003efa66439bfb4ec034a0f1e9b60b30a74","message":"Update move-to-backlog.yml"}}}]},"comments":{"edges":[{"node":{"body":"Hello @NABILNASSIH Thanks for using the -m while commiting!","author":{"login":"thameurAissaoui"}}}]},"reviews":{"edges":[]}}}},"headers":{},"status":200}})
  })
})

describe('Get PR comments count Route', () => {
  test('The get route', async () => {
    const res = await axios.get(url + "/metriquesPullRequests/getPRCommentsCount")
    console.log(res.dta)
    expect(res).toBeTruthy()
    expect(res.status).toBe(200)
    expect(res.data).toEqual({"code":200,"message":"OK","results":{"data":{"repository":{"pullRequest":{"commits":{"edges":[{"node":{"commit":{"oid":"d5fc0c6f521a3108b190c5e9bc3ce0f47f655173","message":"Create move-to-backlog.yml"}}},{"node":{"commit":{"oid":"e7252003efa66439bfb4ec034a0f1e9b60b30a74","message":"Update move-to-backlog.yml"}}}]},"comments":{"edges":[{"node":{"body":"Hello @NABILNASSIH Thanks for using the -m while commiting!","author":{"login":"thameurAissaoui"}}}]},"reviews":{"edges":[]}}}},"headers":{},"status":200}})
  })
})

describe('Get PR reviews count Route', () => {
  test('The get route', async () => {
    const res = await axios.get(url + "/metriquesPullRequests/getPRReviewsCount")
    console.log(res.dta)
    expect(res).toBeTruthy()
    expect(res.status).toBe(200)
    expect(res.data).toEqual({"code":200,"message":"OK","results":{"data":{"repository":{"pullRequest":{"commits":{"edges":[{"node":{"commit":{"oid":"d5fc0c6f521a3108b190c5e9bc3ce0f47f655173","message":"Create move-to-backlog.yml"}}},{"node":{"commit":{"oid":"e7252003efa66439bfb4ec034a0f1e9b60b30a74","message":"Update move-to-backlog.yml"}}}]},"comments":{"edges":[{"node":{"body":"Hello @NABILNASSIH Thanks for using the -m while commiting!","author":{"login":"thameurAissaoui"}}}]},"reviews":{"edges":[]}}}},"headers":{},"status":200}})
  })
})

describe('Get PR cycle time route', () => {
  test('The get route', async () => {
    const res = await axios.get(url + "/metriquesPullRequests/getPRCycleTime")
    console.log(res.data)
    expect(res).toBeTruthy()
    expect(res.status).toBe(200)
    expect(res.data).toEqual({"code":200,"message":"OK","results":{"repository":{"pullRequests":{"edges":[{"node":{"number":5,"mergeable":"UNKNOWN","createdAt":"2024-01-19T22:44:20Z","mergedAt":"2024-01-19T22:45:18Z"}},{"node":{"number":20,"mergeable":"UNKNOWN","createdAt":"2024-01-23T02:12:13Z","mergedAt":null}},{"node":{"number":22,"mergeable":"UNKNOWN","createdAt":"2024-01-29T19:42:42Z","mergedAt":null}},{"node":{"number":23,"mergeable":"UNKNOWN","createdAt":"2024-01-29T19:43:47Z","mergedAt":"2024-01-29T21:37:54Z"}},{"node":{"number":24,"mergeable":"UNKNOWN","createdAt":"2024-01-29T19:54:00Z","mergedAt":null}},{"node":{"number":32,"mergeable":"UNKNOWN","createdAt":"2024-01-30T17:55:46Z","mergedAt":null}},{"node":{"number":33,"mergeable":"UNKNOWN","createdAt":"2024-01-30T19:06:57Z","mergedAt":"2024-01-30T19:07:16Z"}},{"node":{"number":34,"mergeable":"UNKNOWN","createdAt":"2024-01-30T19:39:43Z","mergedAt":"2024-01-30T19:39:51Z"}}]}}}})
  })
})

