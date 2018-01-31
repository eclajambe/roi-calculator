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
function question($question, $min, $max, $step, $value, $unit) 
{	

	$data  = '<div class="col-sm-6">';
	$data .= 	'<p>' . $question . '</p>';
	$data .= 	'<div class="range-wrap">';
	$data .= 		'<input type="range" id="slider-1" class="sliderRange" min="' . $min . 'max="' . $max . '"' . 'step="' . $step . '"' . 'value="' . $value . '">';
	$data .= 	'</div><!--// .range-wrap -->';
	$data .= 	'<div class="value-toggle">';
	$data .= 		'<input type="number" id="js-amount-input" class="value-number" min="' . $min . 'max="' . $max . '"' . 'step="' . $step . '"' . 'value="' . $value . '">';
	$data .= 		'<span class="value-unit">' . $unit . '</span>';
	$data .=   	'</div><!--// .value-toggle -->';
	$data .= '</div><!--// .col-sm -6 -->';

	return $data;
}

?>

