<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'vineet201.github.io_db' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'y*@yo|On[`zJB?0R`T|(v0o?*I^6K_c`#pPKz$uJpzTeD0-=5N2>9?6?ES:KA$Fi' );
define( 'SECURE_AUTH_KEY',  'R)CV>5g(bt43ZN7X12i_~nUHS:wH3@@M3.ORj{. !%~~F){PuWT0vAc#U)TeHw*u' );
define( 'LOGGED_IN_KEY',    'P8U-f)_QgqT=&K]9ct5Bk_;(?Z_;WGBw+~68k@y^{b<+Rgm >-jTg,qy{[}{Q*g>' );
define( 'NONCE_KEY',        '!nPG,E24]rc9VjushXl7]Q{mwD-|c)#d(ISJPdc4cwgM`(AtAI%-5!>@e[#sn[Db' );
define( 'AUTH_SALT',        'Ev/5B2Gd^0tD4xD<gA(gwS0jL}TlkUxo0y29d$c0$&g$WLberK!24*km^R>#**<4' );
define( 'SECURE_AUTH_SALT', 'j}9Xy_< Mi$E?}(G3S**K:CapQe 6p;20bo4y^`$9M/K-vr_9PkZ#!bRlwxi6S5n' );
define( 'LOGGED_IN_SALT',   '9:#gTRd5hx?6CF6N!gU_OY@L]9k4^rS;}j8x:gQXmfG#]HZ]BhsGliBZ+R6$zghA' );
define( 'NONCE_SALT',       '0Xhjvq=*)h4<Xai~++Nq7=9&qPK5Sz-Nt[)e|yH)@;~$U6ZDy#kZ35<jH$j07(<+' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
