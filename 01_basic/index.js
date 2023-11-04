require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const githubData = `{
    "login": "prathameshpowar1910",
    "id": 91151201,
    "node_id": "MDQ6VXNlcjkxMTUxMjAx",
    "avatar_url": "https://avatars.githubusercontent.com/u/91151201?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/prathameshpowar1910",
    "html_url": "https://github.com/prathameshpowar1910",
    "followers_url": "https://api.github.com/users/prathameshpowar1910/followers",
    "following_url": "https://api.github.com/users/prathameshpowar1910/following{/other_user}",
    "gists_url": "https://api.github.com/users/prathameshpowar1910/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/prathameshpowar1910/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/prathameshpowar1910/subscriptions",
    "organizations_url": "https://api.github.com/users/prathameshpowar1910/orgs",
    "repos_url": "https://api.github.com/users/prathameshpowar1910/repos",
    "events_url": "https://api.github.com/users/prathameshpowar1910/events{/privacy}",
    "received_events_url": "https://api.github.com/users/prathameshpowar1910/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Prathamesh Powar",
    "company": null,
    "blog": "",
    "location": "Navi Mumbai",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "prathamesh_1910",
    "public_repos": 25,
    "public_gists": 0,
    "followers": 0,
    "following": 10,
    "created_at": "2021-09-21T17:38:50Z",
    "updated_at": "2023-10-27T08:55:45Z"
  }`

app.get("/", (req, res) => {
  res.send("This is Get");
});

app.get("/home/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.get("/github", (req, res) => {
    res.json(JSON.parse(githubData))
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
