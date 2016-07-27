<?php
function ng_scripts() {
    // polyfills
    wp_enqueue_script('shim', get_template_directory_uri() . '/node_modules/core-js/client/shim.min.js');
    wp_enqueue_script('zone', get_template_directory_uri() . '/node_modules/zone.js/dist/zone.js');
    wp_enqueue_script('reflect', get_template_directory_uri() . '/node_modules/reflect-metadata/Reflect.js');
    // system js
    wp_enqueue_script('system-js', get_template_directory_uri() . '/node_modules/systemjs/dist/system.src.js');
    wp_enqueue_script('system-config', get_template_directory_uri() . '/systemjs.config.js');
    wp_enqueue_script('loader', get_template_directory_uri() . '/dist/loader.js');
    // main stylesheet
    wp_enqueue_style('stylesheet', get_template_directory_uri() . '/dist/css/main.css');
}
add_action('wp_enqueue_scripts', 'ng_scripts');
