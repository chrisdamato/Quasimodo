<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>

	<!-- Basic Page Needs
  ================================================== -->
	<meta charset="utf-8">
	<title>Until</title>
	<meta name="description" content="Quick and simple Mount Olive daily organizer">
	<meta name="author" content="Chris D'Amato">
	<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->


</head>
<body>
	<div id="now"></div>
	<!-- Primary Page Layout
	================================================== -->

	<!-- Delete everything in this .container and get started on your own site! -->

	<!-- JS
	================================================== -->
    <script src="mo.js"></script>
    <script src="quasimodo.js"></script>
    <script type="text/javascript">
    	serverTime=<?php echo microtime(true);?>;
    	document.getElementByID("now").innerHTML=serverTime;
    </script>

<!-- End Document
================================================== -->
</body>
</html>
