/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

angular.module('PersonalWebsiteAngularApp',['ngRoute','blog','contact','home','photos','resume','videos'])
//angular.module('PersonalWebsiteAngularApp',['ngRoute'])

.config(function($routeProvider) {
  return $routeProvider.when('/', {
    templateUrl: 'modules/home/homeView.html',
    controller: 'HomeViewCtrl'
  }).when('/resume', {
    templateUrl: 'modules/resume/resumeView.html',
    controller: 'ResumeViewCtrl'
  }).when('/contact', {
    templateUrl: 'modules/contact/contactView.html',
    controller: 'ContactViewCtrl'
  }).when('/video', {
    templateUrl: 'modules/videos/videoView.html',
    controller: 'VideoViewCtrl'
  }).when('/photo', {
    templateUrl: 'modules/photos/photoView.html'
  }).when('/blog', {
    templateUrl: 'modules/blog/blogView.html',
    controller: 'BlogViewCtrl'
  }).otherwise({
    redirectTo: '/'
  });
});
//
//.factory('blogService',function($resource) {
//  return $resource("http://myfavmomentsdotcom.wordpress.com/?jsonp=1", {
//    id: "@id",
//    likes: "@likes",
//    dislikes: "@dislikes"
//  }, {
//    list: {
//      method: "GET",
//      isArray: true
//    },
//    update: {
//      method: "PUT",
//      headers: {
//        'Content-Type': 'application/json'
//      }
//    }
//  });
//})
//
//
//.config(['$httpProvider', function(provider) {
//    provider.defaults.useXDomain = true;
//    provider.defaults.headers.common["X-CSRF-Token"] = $("meta[name=csrf-token]").attr("content");
//    return delete provider.defaults.headers.common["X-Requested-With"];
//  }
//])
//
//.controller('BlogViewCtrl', function($scope, blogService) {
//  $scope.doneLoading = false;
//  $scope.blogPosts = blogService.list((function(data) {
//    var i, _i, _ref, _results;
//    $scope.doneLoading = true;
//    _results = [];
//    for (i = _i = 0, _ref = data.length - 1; _i <= _ref; i = _i += 1) {
//      _results.push(data[i].body = $scope.adjustBodyText(data[i].body));
//    }
//    return _results;
//  }), function(err) {
//    alert("Could not load blog posts");
//    return $scope.doneLoading = true;
//  });
//  $scope.adjustBodyText = function(text) {
//    var each, newText, textArr, _i, _len;
//    textArr = text.split('\n');
//    newText = "";
//    for (_i = 0, _len = textArr.length; _i < _len; _i++) {
//      each = textArr[_i];
//      newText += "<div>" + each + "<br></div>";
//    }
//    return newText;
//  };
//  $scope.likeClicked = function(blog) {
//    blog.likes += 1;
//    return $scope.updateDB(blog);
//  };
//  $scope.dislikeClicked = function(blog) {
//    blog.dislikes += 1;
//    return $scope.updateDB(blog);
//  };
//  return $scope.updateDB = function(blog) {
//    return blogService.update({
//      id: blog.id,
//      likes: blog.likes,
//      dislikes: blog.dislikes
//    });
//  };
//})
//
//.directive('blogpost', function() {
//  return {
//    templateUrl: 'modules/blog/blogPost.html',
//    restrict: 'E'
//  };
//}).filter("reverse", function() {
//  return function(items) {
//    return items.slice().reverse();
//  };
//})
//.controller('ContactViewCtrl',function($scope) {
//  return console.log("Contact Page");
//})
//
//.controller('HomeViewCtrl', [function($scope) {
//  return $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
//}])
//
//.controller('navigationCtrl',function($scope, $location) {
//  return $scope.isActive = function(currentUrl) {
//    return currentUrl === $location.$$path;
//  };
//})
//
//.directive('navigation',[function() {
//  return {
//    restrict: 'E',
//    scope: {},
//    templateUrl: 'modules/home/navigation.html'
//  };
//}])
//
//
//
//
//		.factory('picasaService', ['$http', '$q', function($http, $q) {
//				// Service logic
//
//				$http.defaults.useXDomain = true;
//
//				function parsePhoto(entry) {
//					var photo = {
//						url: entry.media$group.media$content[0].url
//					};
//					return photo;
//				}
//
//				function parsePhotos(url) {
//					var d = $q.defer();
//					var photo;
//					var photos = [];
//					loadPhotos(url).then(function(data) {
//						if (!data.feed) {
//							photos.push(parsePhoto(data.entry));
//						} else {
//							var entries = data.feed.entry;
//							for (var i = 0; i < entries.length; i++) {
//								photos.push(parsePhoto(entries[i]));
//							}
//						}
//						d.resolve(photos);
//
//					});
//					return d.promise;
//				}
//
//				function loadPhotos(url) {
//					var d = $q.defer();
//					$http.jsonp(url + '?alt=json&kind=photo&hl=pl&imgmax=912&callback=JSON_CALLBACK').success(function(data, status) {
//						d.resolve(data);
//					});
//					return d.promise;
//				}
//
//				// Public API here
//				return {
//					get: function(url) {
//						return parsePhotos(url);
//					}
//				};
//			}])
//
//		.directive('picasa', ['picasaService', function() {
//				return {
//					restrict: 'E',
//					scope: {
//						url: '@'
//					},
//					controller: function($scope, picasaService) {
//						$scope.photos = picasaService.get($scope.url).then(function(photos) {
//							$scope.photos = photos;
//						});
//
//					},
//					templateUrl: 'modules/photos/photoBlock.html'
//				};
//			}
//		])
//		
//		
//		
//.controller('ResumeViewCtrl',function($scope) {
//  return $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
//})
//
//.controller('VideoViewCtrl',function($scope) {});
//
//
