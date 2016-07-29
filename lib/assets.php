<?php
function ng_scripts() {
    wp_enqueue_script('polyfills', get_template_directory_uri() . '/dist/js/polyfills.js');
    wp_enqueue_script('bundle', get_template_directory_uri() . '/dist/js/bundle.js', [], false, true);
    
    wp_enqueue_style('stylesheet', get_template_directory_uri() . '/dist/css/main.css');
}
add_action('wp_enqueue_scripts', 'ng_scripts');
