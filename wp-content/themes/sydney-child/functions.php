<?php
/**
 * Sydney child functions
 *
 */


/**
 * Enqueues the parent stylesheet. Do not remove this function.
 *
 */
add_action( 'wp_enqueue_scripts', 'sydney_child_enqueue' );
function sydney_child_enqueue() {
    
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

}

/* ADD YOUR CUSTOM FUNCTIONS BELOW */

/* UPLOAD SETTINGS */
@ini_set( 'upload_max_size' , '64M' );
@ini_set( 'post_max_size', '64M');
@ini_set( 'max_execution_time', '300' );

function my_scripts_method() {
    wp_enqueue_script(
        'ccs',
        get_stylesheet_directory_uri() . '/js/ccs.js',
        array( 'jquery' ),
		true,
		true
    );
}

add_action( 'wp_enqueue_scripts', 'my_scripts_method' );