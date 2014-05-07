<!doctype html>
<html class="no-js">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
		<meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="styles/bootstrap.css">
        <link rel="stylesheet" href="styles/bootstrap-docs.css">
        <link rel="stylesheet" href="styles/prettify.css">
        <link rel="stylesheet" href="styles/main.css">
        <link rel="stylesheet" href="styles/flat-ui.css">
    </head>
    <body ng-app="PersonalWebsiteAngularApp" style="background-image:url(images/butterfly.jpg);">
        <div class="container">
							            <navigation></navigation>

            <div class="col-md-12" style="padding:0">
                <img src="images/homepage.jpg" alt="example-image" class="img-responsive"><br/>
				
            </div>
            <div ng-view class="col-md-12"></div>
            <br><hr>
            <div class="footer-label">© 2014 Karan. Have Fun.</div>
            <br>
        </div>

		<script src="lib/other/jquery.js"></script>
<!--		<script src="lib/angular/angular.js"></script>-->
<!--	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.js"></script>-->
			<script src="lib/angular/angular.js"></script>
		<script src="lib/angular/angular-route.js"></script>
		<script src="lib/angular/angular-resource.js"></script>
		<script src="lib/angular/angular-cookies.js"></script>
<!--        <script src="bower_components/restangular.js"></script>
        <script src="bower_components/angular-resource/angular-resource.js"></script>-->
        <script src="app.js"></script>

		<script src="modules/blog/blogmodule.js"></script>
        <script src="modules/home/homemodule.js"></script>
		<script src="modules/contact/contactmodule.js"></script>
		<script src="modules/photos/photomodule.js"></script>
		<script src="modules/resume/resumemodule.js"></script>
		<script src="modules/videos/videomodule.js"></script>
	</body>
</html>