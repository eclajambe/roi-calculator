<?php

function anchor($link, $text) // 1
{
	$domain = get_domain(); // 2
	$link 	= $domain . $link; // 3
	 
	$data = '<a href="' . $link . '"';
	$data .= ' title="' . $text . '"'; //4
	$data .= '>';
	$data .= $text; //4
	$data .= "</a>";
	 
	return $data;
}

?>