#### Travis & Git Overview

We encrypt a github token into .travis.yml that allows us to push to remote repositories.  

#### Overview

We will encrypt a key that causes Travis to set the environment variable 'GH_TOKEN' to a github token that lets us push to angular-ui. Based from this tutorial: http://sleepycoders.blogspot.de/2013/03/sharing-travis-ci-generated-files.html

1. Get the token for your user from github if you are an angular-ui owner, and save the output:
```sh
$ curl -X POST -u <your_github_username> -H "Content-Type: application/json" -d "{\"scopes\":[\"public_repo\", \"repo\"],\"note\":\"token for pushing from travis\"}" https://api.github.com/authorizations
```

1. Install `travis-encrypt` from npm, then we will use it to encrypt our token in .travis.yml.
```sh
$ npm install -g travis-encrypt
```
```sh
$ travis-encrypt -r angular-ui/bootstrap -k GH_TOKEN -v $TOKEN_FROM_STEP_1 --add env.global
```

1. Take the output from travis-encrypt, and save it it in .travis.yml in a secure key, like we have done.

Now, whenever a travis build runs it will export the environment variable `GH_TOKEN` as our github token, securely.
