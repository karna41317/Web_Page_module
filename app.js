/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

angular.module('PersonalWebsiteAngularApp',['blog','contact','home','photos','resume','videos'])
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
