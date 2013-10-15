(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "version": "0.1.0",
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "random\n======\n\nRandom generation.\n",
      "type": "blob"
    },
    "random.coffee.md": {
      "path": "random.coffee.md",
      "mode": "100644",
      "content": "Random\n======\n\nSome useful methods for generating random things.\n\nHelpers\n-------\n\n`τ` is the circle constant.\n\n    τ = 2 * Math.PI\n\n`U` returns a continuous uniform distribution between `min` and `max`.\n\n    U = (min, max) ->\n      ->\n        Math.random() * (max - min) + min\n\n`standardUniformDistribution` is the uniform distribution between [0, 1]\n\n    standardUniformDistribution = U(0, 1)\n\n`rand` is a helpful shortcut for generating random numbers from a standard \nuniform distribution or from a discreet set of integers.\n\n    rand = (n) ->\n      if n\n        Math.floor(n * standardUniformDistribution())\n      else\n        standardUniformDistribution()\n\nMethods\n-------\n\n    module.exports = Random =\n\nReturns a random angle, uniformly distributed, between 0 and τ.\n  \n      angle: ->\n        rand() * τ\n\n\nReturns a random float between two numbers.\n\n      between: (min, max) ->\n        rand() * (max - min) + min\n\nReturns random integers from [0, n) if n is given.\nOtherwise returns random float between 0 and 1.\n  \n      rand: rand\n\nReturns random float from [-n / 2, n / 2] if n is given.\nOtherwise returns random float between -0.5 and 0.5.\n\n      signed: (n=1) ->\n        (n * rand()) - (n / 2)",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "version: \"0.1.0\"\nentryPoint: \"random\"\nremoteDependencies: [\n  \"http://strd6.github.io/require/v0.2.2.js\"\n]\n",
      "type": "blob"
    },
    "test/random.coffee": {
      "path": "test/random.coffee",
      "mode": "100644",
      "content": "Random = require \"../random\"\n\nok = assert\nequals = assert.equal\ntest = it\n\ndescribe \"Random\", ->\n  \n  test \"methods\", ->\n    [\n      \"angle\"\n      \"between\"\n      \"rand\"\n      \"signed\"\n    ].forEach (name) ->\n      ok(Random[name], name)\n",
      "type": "blob"
    }
  },
  "distribution": {
    "random": {
      "path": "random",
      "content": "(function() {\n  var Random, U, rand, standardUniformDistribution, τ;\n\n  τ = 2 * Math.PI;\n\n  U = function(min, max) {\n    return function() {\n      return Math.random() * (max - min) + min;\n    };\n  };\n\n  standardUniformDistribution = U(0, 1);\n\n  rand = function(n) {\n    if (n) {\n      return Math.floor(n * standardUniformDistribution());\n    } else {\n      return standardUniformDistribution();\n    }\n  };\n\n  module.exports = Random = {\n    angle: function() {\n      return rand() * τ;\n    },\n    between: function(min, max) {\n      return rand() * (max - min) + min;\n    },\n    rand: rand,\n    signed: function(n) {\n      if (n == null) {\n        n = 1;\n      }\n      return (n * rand()) - (n / 2);\n    }\n  };\n\n}).call(this);\n\n//# sourceURL=random.coffee",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.1.0\",\"entryPoint\":\"random\",\"remoteDependencies\":[\"http://strd6.github.io/require/v0.2.2.js\"]};",
      "type": "blob"
    },
    "test/random": {
      "path": "test/random",
      "content": "(function() {\n  var Random, equals, ok, test;\n\n  Random = require(\"../random\");\n\n  ok = assert;\n\n  equals = assert.equal;\n\n  test = it;\n\n  describe(\"Random\", function() {\n    return test(\"methods\", function() {\n      return [\"angle\", \"between\", \"rand\", \"signed\"].forEach(function(name) {\n        return ok(Random[name], name);\n      });\n    });\n  });\n\n}).call(this);\n\n//# sourceURL=test/random.coffee",
      "type": "blob"
    }
  },
  "entryPoint": "random",
  "dependencies": {},
  "remoteDependencies": [
    "http://strd6.github.io/require/v0.2.2.js"
  ],
  "repository": {
    "id": 13576812,
    "name": "random",
    "full_name": "STRd6/random",
    "owner": {
      "login": "STRd6",
      "id": 18894,
      "avatar_url": "https://2.gravatar.com/avatar/33117162fff8a9cf50544a604f60c045?d=https%3A%2F%2Fidenticons.github.com%2F39df222bffe39629d904e4883eabc654.png",
      "gravatar_id": "33117162fff8a9cf50544a604f60c045",
      "url": "https://api.github.com/users/STRd6",
      "html_url": "https://github.com/STRd6",
      "followers_url": "https://api.github.com/users/STRd6/followers",
      "following_url": "https://api.github.com/users/STRd6/following{/other_user}",
      "gists_url": "https://api.github.com/users/STRd6/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/STRd6/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/STRd6/subscriptions",
      "organizations_url": "https://api.github.com/users/STRd6/orgs",
      "repos_url": "https://api.github.com/users/STRd6/repos",
      "events_url": "https://api.github.com/users/STRd6/events{/privacy}",
      "received_events_url": "https://api.github.com/users/STRd6/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/STRd6/random",
    "description": "Random generation.",
    "fork": false,
    "url": "https://api.github.com/repos/STRd6/random",
    "forks_url": "https://api.github.com/repos/STRd6/random/forks",
    "keys_url": "https://api.github.com/repos/STRd6/random/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/STRd6/random/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/STRd6/random/teams",
    "hooks_url": "https://api.github.com/repos/STRd6/random/hooks",
    "issue_events_url": "https://api.github.com/repos/STRd6/random/issues/events{/number}",
    "events_url": "https://api.github.com/repos/STRd6/random/events",
    "assignees_url": "https://api.github.com/repos/STRd6/random/assignees{/user}",
    "branches_url": "https://api.github.com/repos/STRd6/random/branches{/branch}",
    "tags_url": "https://api.github.com/repos/STRd6/random/tags",
    "blobs_url": "https://api.github.com/repos/STRd6/random/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/STRd6/random/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/STRd6/random/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/STRd6/random/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/STRd6/random/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/STRd6/random/languages",
    "stargazers_url": "https://api.github.com/repos/STRd6/random/stargazers",
    "contributors_url": "https://api.github.com/repos/STRd6/random/contributors",
    "subscribers_url": "https://api.github.com/repos/STRd6/random/subscribers",
    "subscription_url": "https://api.github.com/repos/STRd6/random/subscription",
    "commits_url": "https://api.github.com/repos/STRd6/random/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/STRd6/random/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/STRd6/random/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/STRd6/random/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/STRd6/random/contents/{+path}",
    "compare_url": "https://api.github.com/repos/STRd6/random/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/STRd6/random/merges",
    "archive_url": "https://api.github.com/repos/STRd6/random/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/STRd6/random/downloads",
    "issues_url": "https://api.github.com/repos/STRd6/random/issues{/number}",
    "pulls_url": "https://api.github.com/repos/STRd6/random/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/STRd6/random/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/STRd6/random/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/STRd6/random/labels{/name}",
    "created_at": "2013-10-15T00:28:31Z",
    "updated_at": "2013-10-15T00:28:31Z",
    "pushed_at": "2013-10-15T00:28:31Z",
    "git_url": "git://github.com/STRd6/random.git",
    "ssh_url": "git@github.com:STRd6/random.git",
    "clone_url": "https://github.com/STRd6/random.git",
    "svn_url": "https://github.com/STRd6/random",
    "homepage": null,
    "size": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "master_branch": "master",
    "default_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "network_count": 0,
    "branch": "master",
    "defaultBranch": "master",
    "includedModules": [
      "Bindable"
    ]
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  }
});