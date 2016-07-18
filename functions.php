<?php
function ng_scripts() {
    wp_enqueue_script('shim', get_template_directory_uri() . '/node_modules/core-js/client/shim.min.js');
    wp_enqueue_script('zone', get_template_directory_uri() . '/node_modules/zone.js/dist/zone.js');
    wp_enqueue_script('reflect', get_template_directory_uri() . '/node_modules/reflect-metadata/Reflect.js');
    wp_enqueue_script('system-js', get_template_directory_uri() . '/node_modules/systemjs/dist/system.src.js');
    wp_enqueue_script('system-config', get_template_directory_uri() . '/systemjs.config.js');
    wp_enqueue_script('loader', get_template_directory_uri() . '/dist/loader.js');
}
add_action('wp_enqueue_scripts', 'ng_scripts');
