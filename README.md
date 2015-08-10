# Buzzword Bingo

My first [Elm](http://elm-lang.org) app.

Running app at [http://buzzword-bingo-elm.cfapps.io/](http://buzzword-bingo-elm.cfapps.io/).

## Elm reactor

This is a little web server that we can use as a quick development environment.

`elm reactor` to start.

## Development setup

1. Clone repo
2. `npm install -g grunt-cli` to install Grunt CLI
3. `npm install` to install all build tools
4. `elm package install` to install Elm packages

## Building Elm code

* To continually compile on file changes: `grunt watch`
* To compile once: `grunt`


## Deployment

1. `grunt build`
2. `cf push buzzword-bingo-elm -p deployment/ -b staticfile_buildpack`
