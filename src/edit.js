import { useBlockProps } from '@wordpress/block-editor';
import {
	RangeControl,
	ToggleControl,
	ColorPicker,
	BaseControl,
	__experimentalDivider as Divider,
	__experimentalHeading as Heading,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps() }>
			<Heading>{ __( 'Products list settings', 'wc-products' ) }</Heading>
			<RangeControl
				label={ __( 'Grid Gap', 'wc-products' ) }
				value={ attributes.gridGap }
				min={ 0 }
				max={ 50 }
				onChange={ ( gridGap ) => setAttributes( { gridGap } ) }
			/>

			<ToggleControl
				label={ __( 'Display Sale Tag', 'wc-products' ) }
				checked={ attributes.displaySaleTag }
				onChange={ ( displaySaleTag ) =>
					setAttributes( { displaySaleTag } )
				}
			/>

			<ToggleControl
				label={ __( 'Display Product Title', 'wc-products' ) }
				checked={ attributes.displayProductTitle }
				onChange={ ( displayProductTitle ) =>
					setAttributes( { displayProductTitle } )
				}
			/>

			<ToggleControl
				label={ __( 'Display Product Price', 'wc-products' ) }
				checked={ attributes.displayProductPrice }
				onChange={ ( displayProductPrice ) =>
					setAttributes( { displayProductPrice } )
				}
			/>

			<ToggleControl
				label={ __( 'Display Add To Cart Button', 'wc-products' ) }
				checked={ attributes.displayAddToCartButton }
				onChange={ ( displayAddToCartButton ) =>
					setAttributes( { displayAddToCartButton } )
				}
			/>

			<div
				style={ {
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
					gap: '16px',
				} }
				className={ 'colorPickerControlWrapper' }
			>
				{ attributes.displayProductTitle && (
					<BaseControl
						__nextHasNoMarginBottom={ true }
						label={ __( 'Product Title Color', 'wc-products' ) }
						id={ 'productTitleColor' }
					>
						<ColorPicker
							color={ attributes.productTitleColor }
							onChange={ ( productTitleColor ) =>
								setAttributes( { productTitleColor } )
							}
						/>
					</BaseControl>
				) }

				{ attributes.displayProductPrice && (
					<BaseControl
						__nextHasNoMarginBottom={ true }
						label={ __( 'Product Price Color', 'wc-products' ) }
						id={ 'productPriceColor' }
					>
						<ColorPicker
							color={ attributes.productPriceColor }
							onChange={ ( productPriceColor ) =>
								setAttributes( { productPriceColor } )
							}
						/>
					</BaseControl>
				) }
			</div>

			{ attributes.displayAddToCartButton && (
				<div
					style={ {
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gap: '16px',
					} }
					className={ 'colorPickerControlWrapper' }
				>
					<BaseControl
						__nextHasNoMarginBottom={ true }
						label={ __(
							'Product Button Text Color',
							'wc-products'
						) }
						id={ 'productButtonTextColor' }
					>
						<ColorPicker
							color={ attributes.productButtonTextColor }
							onChange={ ( productButtonTextColor ) =>
								setAttributes( { productButtonTextColor } )
							}
						/>
					</BaseControl>
					<BaseControl
						__nextHasNoMarginBottom={ true }
						label={ __(
							'Product Button Background Color',
							'wc-products'
						) }
						id={ 'productButtonBgColor' }
					>
						<ColorPicker
							color={ attributes.productButtonBgColor }
							onChange={ ( productButtonBgColor ) =>
								setAttributes( { productButtonBgColor } )
							}
						/>
					</BaseControl>
				</div>
			) }

			<Divider />
			<Heading>{ __( 'Products preview', 'wc-products' ) }</Heading>
			<ServerSideRender
				block="devwael/wc-products"
				attributes={ attributes }
			/>
		</div>
	);
}
