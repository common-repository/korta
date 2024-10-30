/**
 * BLOCK: korta
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

import { TextControl } from '@wordpress/components';
//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'korta/block-korta', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'KORTA' ), // Block title.
	icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 400,266.6666666666667"><g id="svgg"><path id="path0" d="M60.702 17.445 C -22.163 70.519,-21.549 198.055,61.820 249.580 C 97.864 271.856,292.884 275.084,333.508 254.076 C 422.103 208.262,422.103 58.404,333.508 12.590 C 292.787 -8.467,95.682 -4.960,60.702 17.445 M313.234 85.881 C 372.312 154.608,324.869 204.167,200.000 204.167 C 79.679 204.167,32.675 160.572,80.058 92.923 C 111.102 48.601,276.884 43.595,313.234 85.881 " stroke="none" fill="#000000" fill-rule="evenodd"></path></g></svg>,
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'KORTA' ),
		__( 'Gift vouchers' ),
	],
	attributes: {
		korta_id: {
			type: 'string',
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {

		const kortaId = props.attributes.korta_id;
		return (
			<div className={ props.className }>
				<small>
					Please enter your KORTA ID. You can find it at <a href="https://my.korta.app/integration">KORTA integration</a> page.
				</small>
				<TextControl
					label="KORTA ID"
					value={ kortaId }
					onChange={ ( value ) => {
						props.setAttributes( { korta_id: value } );
					} }
					placeholder="Enter KORTA ID"
				/>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( ) => {
		return null;
	},
} );
