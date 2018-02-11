<?php

/**
	* 
	* Question Builder - 
	* 
	* Helps generate range slider and text input field for calculator questions
	*
	* @var question - (string) The question asked 
	* @var min      - (number) Minimum value allowed by input
	* @var max      - (number) Maximum value allowed by input
	* @var $step    - (number) Increment size allowed by input
	* @var $value   - (number) Initial value of input (the assumption we've made)
	*
*/
function question($colWrap, $question, $min, $max, $step, $value, $unit, $tooltip, $id='') 
{	

	$colWrap = ($colWrap == true ) ? 'col-xs-12 col-sm-6 col-md-6 py-4' : '';

	$data  = '<div class="' . $colWrap . '">';
	$data .= '  <div id="q-container-'.$id.'">';
	$data .= 	'<p>' . $question . '</p>'; 
	$data .= 	'<div class="range-wrap">';
	$data .= 		'<input type="range" id="slider-'.$id.'" class="sliderRange" min="' . $min . '" max="' . $max . '"' . 'step="' . $step . '"' . 'value="' . $value . '">';
	$data .= 	'</div><!--// .range-wrap -->';
	$data .= 	'<div class="value-toggle">';
	$data .= 		'<input type="number" id="number-'.$id.'" class="value-number" min="' . $min . '" max="' . $max . '"' . 'step="' . $step . '"' . 'value="' . $value . '">';
	$data .= 		'<span class="value-unit">' . $unit . '</span>';
	
	if ( $tooltip == true ) {
		$data .= '<a href="#" data-toggle="tooltip" data-placement="top" title="Assumption: 20% - IDC Report, 2017" class="more-info"><img src="../img/info-icon@2x.png" /></a>';
	}
	
	$data .=   	'</div><!--// .value-toggle -->';
	$data .= '  </div><!--// #q-container-'.$id.' -->';
	$data .= '</div><!--// .col-sm -6 -->';

	return $data;
}

/**
	* 
	* Placeholder Module Builder -
	* 
	* Helps generate a placeholder module
	*
	* @var type        - (string) Accepts either 'content' or 'cta'
	* @var contentSide - (string) Defaults to 'right', accepts 'left'
	* @var headingText - (string) Heading text to display in placeholder
	* @var bottomPad - (bool) If true, add bottom padding
	*
**/
function placeholderModule($type, $contentSide, $headingText, $bottomPadding) 
{	

	if ($bottomPadding) 
	{
		$bottomPadding = 'py-5';
	} else {
		$bottomPadding = 'pt-5';
	}

	$mb  = '<div class="container-fluid bg--lt-grey ph-module ' . $bottomPadding . '">';
	$mb .=	'<div class="container">';
	$mb .=		'<div class="row">';

	if ($type == 'content') 
	{
		if ($contentSide == 'left') {
			$mb .=			'<div class="col-sm-6">';
			$mb .=				'<h2>' . $headingText . '</h2>';
			$mb .=				'<p class="pb-5">Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.</p>';
			$mb .=			'</div><!--// . col-sm-6 -->';
			$mb .=			'<div class="col-sm-6">';
			$mb .=				'<div class="ph ph-image"><h1>Placeholder</h1></div>';
			$mb .=			'</div><!--// . col-sm-6 -->';	
		} else {
			$mb .=			'<div class="col-sm-6">';
			$mb .=				'<div class="ph ph-image"><h1>Placeholder</h1></div>';
			$mb .=			'</div><!--// . col-sm-6 -->';
			$mb .=			'<div class="col-sm-6">';
			$mb .=				'<h2>' . $headingText . '</h2>';
			$mb .=				'<p class="pb-5">Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod.</p>';
			$mb .=			'</div><!--// . col-sm-6 -->';
		}// end if
	} elseif ($type == 'cta')
	{	
		// Build 3 CTAs
		for ($i = 0; $i < 3; $i++)
		{
			$mb .=			'<div class="col-sm-4 text-center">';
			$mb .=				'<div class="bg--white p-4">';
			$mb .=					'<span class="ph ph-icon mb-4"></span>';
			$mb .=					'<h3>' . $headingText . '</h3>';
			$mb .=					'<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.</p>';
			$mb .=					'<a href="#">Learn more</a>';
			$mb .=				'</div><!--// .p-4 -->';
			$mb .=			'</div><!--// . col-sm-4 -->';
		}// end for
	}// end if
	
	$mb .=		'</div><!--// .row -->';
	$mb .=	'</div><!--// .container -->';
	$mb .= '</div><!--// .container-fluid -->';

	return $mb;
}
?>

