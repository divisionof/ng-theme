<?php
include_once('cpt/CPT.php');

$custom_posts = new CPT(
[
    'post_type_name' => 'custom_posts',
    'singular'       => 'Custom Post',
    'plural'         => 'Custom Posts',
    'slug'           => 'custom_posts'
],[
    'supports'       => ['title', 'editor'],
    'menu_position'  => 6
]);
