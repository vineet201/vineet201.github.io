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
define( 'AUTH_KEY',         'AT^]/6>AA<EXrZ^t=>@lumXs=ibG|=Z6u#B5^;0R&m23nGCb~EL!</CGPUsj|Tm:' );
define( 'SECURE_AUTH_KEY',  'hs0zp$s/Mqtm?C|(la;o.#Xd  d,;Q5Q7LaEVvKU=]]Qk6c|u=!UF/9vmVIIiBAq' );
define( 'LOGGED_IN_KEY',    'HsB|uM[^*D(.I *>YabREiOUWUr0QJt(J*C9W94r)Zd^!<q06[&Q8Ns-2SQYh1N4' );
define( 'NONCE_KEY',        ':xC_3KPI-e(84,sC-[`x,,E-Qq>{K`-]&1.ZOSd`yZ X%Gqx]{anjKsnPaMBAv7N' );
define( 'AUTH_SALT',        '^a^!@++CQT_cF%*5KN[;V47+ABW5id{7Iy 6^zoO&(`u2rn$p$%cE-oOh{akLD31' );
define( 'SECURE_AUTH_SALT', '*$(h,GqX0p=N0ims_<%27>=2?YO&AT}(G^#jw=]nLlG_odF^~^jo^^j#/% miMoB' );
define( 'LOGGED_IN_SALT',   'qpfmj!YP!{Y93*#aMxg-FShZ6`#Pr!<I:mL#I^u)gFeYTBD{6c>nmDdbwQr:L| @' );
define( 'NONCE_SALT',       '@6ms);rVdor$lXW2W4QEJ]|2f|:*Y/ 4wU*;qw+x|<r%??!q~ZhoV)=#nX;j6o9u' );

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
