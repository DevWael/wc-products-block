<?php

/**
 * Plugin Name: WC Products Block
 * Plugin URI: https://www.bbioon.com
 * Description: Provide Gutenberg block to show woocommerce products.
 * Version: 1.0.0
 * Author: Ahmad Wael
 * Author URI: https://www.bbioon.com
 * Requires at least: 5.9
 * Requires PHP: 7.4
 * License: GPL-2.0+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: wc-products
 * Domain Path: /languages
 */

class WC_Products_Block {
	public function __construct() {
		add_action( 'enqueue_block_assets', array( $this, 'enqueue_frontend_assets' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_frontend_assets' ) );
		add_action( 'init', array( $this, 'register_block' ) );
		add_action( 'init', array( $this, 'load_plugin_textdomain' ) );
	}

	public function load_plugin_textdomain() {
		load_plugin_textdomain(
			'wc-products',
			false,
			dirname( plugin_basename( __FILE__ ) ) . '/languages'
		);
	}

	public function enqueue_frontend_assets() {
		wp_enqueue_style(
			'wc-products-block',
			plugins_url( 'src/style.css', __FILE__ )
		);
	}

	public function register_block() {
		register_block_type( __DIR__ . '/build', [
			'render_callback' => array( $this, 'products_render' ),
		] );
	}

	public function products_render( $attributes ) {
		ob_start();

		$grid_gap                   = isset( $attributes['gridGap'] )
			? $attributes['gridGap'] : 10;
		$display_sale_tag           = isset( $attributes['displaySaleTag'] )
			? $attributes['displaySaleTag'] : true;
		$display_product_title      = isset( $attributes['displayProductTitle'] )
			? $attributes['displayProductTitle'] : true;
		$display_product_price      = isset( $attributes['displayProductPrice'] )
			? $attributes['displayProductPrice'] : true;
		$display_add_to_cart_button = isset( $attributes['displayAddToCartButton'] )
			? $attributes['displayAddToCartButton'] : true;
		$product_title_color        = isset( $attributes['productTitleColor'] )
			? $attributes['productTitleColor'] : '#000000';
		$product_price_color        = isset( $attributes['productPriceColor'] )
			? $attributes['productPriceColor'] : '#000000';
		$product_button_text_color  = isset( $attributes['productButtonTextColor'] )
			? $attributes['productButtonTextColor'] : '#ffffff';
		$product_button_bg_color    = isset( $attributes['productButtonBgColor'] )
			? $attributes['productButtonBgColor'] : '#000000';

		$args = array(
			'post_type' => 'product',
		);

		$query = new WP_Query( $args );

		if ( $query->have_posts() ) {
			echo '<ul class="products-block-list" style="grid-gap: ' . $grid_gap . 'px;">';
			while ( $query->have_posts() ) {
				$query->the_post();
				global $product;
				echo '<li>';
				// show product image
				echo '<img src="' . esc_url( wp_get_attachment_image_src( $product->get_image_id(),
						'full' )[0] ?? wc_placeholder_img_src( 'full' ) )
				     . '" class="product-image" />';

				if ( $display_sale_tag && $product->is_on_sale() ) {
					echo '<span class="sale-tag">' . esc_html__( 'Sale', 'wc-products' ) . '</span>';
				}

				if ( $display_product_title ) {
					echo '<h4 class="product-title"><a style="color: ' . sanitize_hex_color( $product_title_color )
					     . ';" href="'
					     . esc_url( get_permalink() ) . '">' . esc_html( get_the_title() ) . '</a></h4>';
				}

				if ( $display_product_price ) {
					echo '<p class="price-tag" style="color: ' . sanitize_hex_color( $product_price_color ) . ';">'
					     . $product->get_price_html() . '</p>';
				}

				if ( $display_add_to_cart_button ) {
					echo '<a href="' . esc_url( $product->add_to_cart_url() ) . '" style="color: '
					     . sanitize_hex_color( $product_button_text_color )
					     . '; background-color: ' . sanitize_hex_color( $product_button_bg_color )
					     . ';" class="block-add-to-cart-btn">' . esc_html__( 'Add to cart', 'wc-products' ) . '</a>';
				}

				echo '</li>';
			}
			echo '</ul>';
		}

		wp_reset_postdata();

		return ob_get_clean();
	}
}


/**
 * Check if WooCommerce is activated to activate the plugin logic.
 */
if ( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
	$block = new WC_Products_Block();
}