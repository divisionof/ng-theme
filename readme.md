run 'npm start' to run compile/watch ts and scss, as well as live reload via browser-sync

required
- wp rest api plugin (http://v2.wp-api.org/)
- rest api menus (https://wordpress.org/plugins/wp-api-menus/)

includes
- bootstrap (sass)
- browser-sync
- wordpress cpt class (https://github.com/jjgrainger/wp-custom-post-type-class)

path updates on new project
- package.json: --proxy name needs updated in 'b-sync' script
- baseURl line 45 of systemjs.config.js
- wp rest api calls

stuff to do
- bundle js?
- understand systemjs.config.js
