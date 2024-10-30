<?php
/**
 * Plugin Name: KORTA
 * Description: KORTA — is a helper plugin for korta.app SaaS
 * Author: KORTA
 * Author URI: https://korta.app
 * Version: 0.1
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
