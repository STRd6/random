(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
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
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "version: \"0.1.0\"\nentryPoint: \"random\"\n",
      "type": "blob"
    },
    "random.coffee.md": {
      "path": "random.coffee.md",
      "mode": "100644",
      "content": "Random\n======\n\nSome useful methods for generating random things.\n\nHelpers\n-------\n\n`τ` is the circle constant.\n\n    τ = 2 * Math.PI\n\n`U` returns a continuous uniform distribution between `min` and `max`.\n\n    U = (min, max) ->\n      ->\n        Math.random() * (max - min) + min\n\n`standardUniformDistribution` is the uniform distribution between [0, 1]\n\n    standardUniformDistribution = U(0, 1)\n\n`rand` is a helpful shortcut for generating random numbers from a standard\nuniform distribution or from a discreet set of integers.\n\n    rand = (n) ->\n      if n\n        Math.floor(n * standardUniformDistribution())\n      else\n        standardUniformDistribution()\n\nMethods\n-------\n\n    module.exports = Random =\n\nReturns a random angle, uniformly distributed, between 0 and τ.\n\n      angle: ->\n        rand() * τ\n\nA binomial distribution.\n\n      binomial: (n=1, p=0.5) ->\n        [0...n].map ->\n          if rand() < p\n            1\n          else\n            0\n        .reduce (a, b) ->\n          a + b\n        , 0\n\nReturns a random float between two numbers.\n\n      between: (min, max) ->\n        rand() * (max - min) + min\n\nReturns random integers from [0, n) if n is given.\nOtherwise returns random float between 0 and 1.\n\n      rand: rand\n\nReturns random float from [-n / 2, n / 2] if n is given.\nOtherwise returns random float between -0.5 and 0.5.\n\n      signed: (n=1) ->\n        (n * rand()) - (n / 2)\n",
      "type": "blob"
    },
    "test/random.coffee": {
      "path": "test/random.coffee",
      "mode": "100644",
      "content": "Random = require \"../random\"\n\nok = assert\nequals = assert.equal\ntest = it\n\ndescribe \"Random\", ->\n  \n  test \"methods\", ->\n    [\n      \"angle\"\n      \"binomial\"\n      \"between\"\n      \"rand\"\n      \"signed\"\n    ].forEach (name) ->\n      ok(Random[name], name)\n\n  it \"should have binomial\", ->\n    result = Random.binomial()\n\n    assert result is 1 or result is 0\n",
      "type": "blob"
    }
  },
  "distribution": {
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.1.0\",\"entryPoint\":\"random\"};",
      "type": "blob"
    },
    "random": {
      "path": "random",
      "content": "(function() {\n  var Random, U, rand, standardUniformDistribution, τ;\n\n  τ = 2 * Math.PI;\n\n  U = function(min, max) {\n    return function() {\n      return Math.random() * (max - min) + min;\n    };\n  };\n\n  standardUniformDistribution = U(0, 1);\n\n  rand = function(n) {\n    if (n) {\n      return Math.floor(n * standardUniformDistribution());\n    } else {\n      return standardUniformDistribution();\n    }\n  };\n\n  module.exports = Random = {\n    angle: function() {\n      return rand() * τ;\n    },\n    binomial: function(n, p) {\n      var _i, _results;\n      if (n == null) {\n        n = 1;\n      }\n      if (p == null) {\n        p = 0.5;\n      }\n      return (function() {\n        _results = [];\n        for (var _i = 0; 0 <= n ? _i < n : _i > n; 0 <= n ? _i++ : _i--){ _results.push(_i); }\n        return _results;\n      }).apply(this).map(function() {\n        if (rand() < p) {\n          return 1;\n        } else {\n          return 0;\n        }\n      }).reduce(function(a, b) {\n        return a + b;\n      }, 0);\n    },\n    between: function(min, max) {\n      return rand() * (max - min) + min;\n    },\n    rand: rand,\n    signed: function(n) {\n      if (n == null) {\n        n = 1;\n      }\n      return (n * rand()) - (n / 2);\n    }\n  };\n\n}).call(this);\n\n//# sourceURL=random.coffee",
      "type": "blob"
    },
    "test/random": {
      "path": "test/random",
      "content": "(function() {\n  var Random, equals, ok, test;\n\n  Random = require(\"../random\");\n\n  ok = assert;\n\n  equals = assert.equal;\n\n  test = it;\n\n  describe(\"Random\", function() {\n    test(\"methods\", function() {\n      return [\"angle\", \"binomial\", \"between\", \"rand\", \"signed\"].forEach(function(name) {\n        return ok(Random[name], name);\n      });\n    });\n    return it(\"should have binomial\", function() {\n      var result;\n      result = Random.binomial();\n      return assert(result === 1 || result === 0);\n    });\n  });\n\n}).call(this);\n\n//# sourceURL=test/random.coffee",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "version": "0.1.0",
  "entryPoint": "random",
  "repository": {
    "id": 13576812,
    "name": "random",
    "full_name": "distri/random",
    "owner": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/distri/random",
    "description": "Random generation.",
    "fork": false,
    "url": "https://api.github.com/repos/distri/random",
    "forks_url": "https://api.github.com/repos/distri/random/forks",
    "keys_url": "https://api.github.com/repos/distri/random/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/distri/random/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/distri/random/teams",
    "hooks_url": "https://api.github.com/repos/distri/random/hooks",
    "issue_events_url": "https://api.github.com/repos/distri/random/issues/events{/number}",
    "events_url": "https://api.github.com/repos/distri/random/events",
    "assignees_url": "https://api.github.com/repos/distri/random/assignees{/user}",
    "branches_url": "https://api.github.com/repos/distri/random/branches{/branch}",
    "tags_url": "https://api.github.com/repos/distri/random/tags",
    "blobs_url": "https://api.github.com/repos/distri/random/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/distri/random/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/distri/random/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/distri/random/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/distri/random/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/distri/random/languages",
    "stargazers_url": "https://api.github.com/repos/distri/random/stargazers",
    "contributors_url": "https://api.github.com/repos/distri/random/contributors",
    "subscribers_url": "https://api.github.com/repos/distri/random/subscribers",
    "subscription_url": "https://api.github.com/repos/distri/random/subscription",
    "commits_url": "https://api.github.com/repos/distri/random/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/distri/random/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/distri/random/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/distri/random/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/distri/random/contents/{+path}",
    "compare_url": "https://api.github.com/repos/distri/random/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/distri/random/merges",
    "archive_url": "https://api.github.com/repos/distri/random/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/distri/random/downloads",
    "issues_url": "https://api.github.com/repos/distri/random/issues{/number}",
    "pulls_url": "https://api.github.com/repos/distri/random/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/distri/random/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/distri/random/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/distri/random/labels{/name}",
    "releases_url": "https://api.github.com/repos/distri/random/releases{/id}",
    "created_at": "2013-10-15T00:28:31Z",
    "updated_at": "2013-12-06T23:31:24Z",
    "pushed_at": "2013-10-15T01:01:00Z",
    "git_url": "git://github.com/distri/random.git",
    "ssh_url": "git@github.com:distri/random.git",
    "clone_url": "https://github.com/distri/random.git",
    "svn_url": "https://github.com/distri/random",
    "homepage": null,
    "size": 292,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "CoffeeScript",
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "organization": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "network_count": 0,
    "subscribers_count": 1,
    "branch": "master",
    "defaultBranch": "master"
  },
  "dependencies": {}
});