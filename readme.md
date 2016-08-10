requirements
- wp rest api plugin (http://v2.wp-api.org/)

getting started
- npm install
- run 'gulp build'
- add to /wp-content/themes folder
- activate theme
- change proxy name in gulp 'watch' task
- all api calls will need path updates

gulp tasks
- 'styles' to compile scss
- 'polyfills' for minified shim + polyfills
- 'ts-compile' to compile typescript
- 'bundle' to build js file to serve via systemjs
- 'watch' for scss and ts changes
- 'clean' removes the /dist folder
- 'clean-js' removes the /assets/scripts/js folder
- 'build' cleans and runs a complete build
