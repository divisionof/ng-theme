<?php
$lib_includes = [
  'lib/assets.php',    // Scripts and stylesheets
  'lib/setup.php',   	 // Theme setup
  'lib/cpt.php',       // Custom Post Types
];

array_walk($lib_includes, function($file) {
	if(!locate_template($file, true, true)):
		trigger_error(sprintf('Error locating %s for inclusion', $file), E_USER_ERROR);
	endif;
});