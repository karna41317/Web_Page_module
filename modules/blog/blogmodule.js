/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('blog',[])


.factory('blogService',[function($resource) {
  return $resource("http://myfavmomentsdotcom.wordpress.com/?jsonp=1", {
    id: "@id",
    likes: "@likes",
    dislikes: "@dislikes"
  }, {
    list: {
      method: "GET",
      isArray: true
    },
    update: {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      }
    }
  });
}])


.config(['$httpProvider', function(provider) {
    provider.defaults.useXDomain = true;
    provider.defaults.headers.common["X-CSRF-Token"] = $("meta[name=csrf-token]").attr("content");
    return delete provider.defaults.headers.common["X-Requested-With"];
  }
])

.controller('BlogViewCtrl', function($scope, blogService) {
  $scope.doneLoading = false;
  $scope.blogPosts = blogService.list((function(data) {
    var i, _i, _ref, _results;
    $scope.doneLoading = true;
    _results = [];
    for (i = _i = 0, _ref = data.length - 1; _i <= _ref; i = _i += 1) {
      _results.push(data[i].body = $scope.adjustBodyText(data[i].body));
    }
    return _results;
  }), function(err) {
    alert("Could not load blog posts");
    return $scope.doneLoading = true;
  });
  $scope.adjustBodyText = function(text) {
    var each, newText, textArr, _i, _len;
    textArr = text.split('\n');
    newText = "";
    for (_i = 0, _len = textArr.length; _i < _len; _i++) {
      each = textArr[_i];
      newText += "<div>" + each + "<br></div>";
    }
    return newText;
  };
  $scope.likeClicked = function(blog) {
    blog.likes += 1;
    return $scope.updateDB(blog);
  };
  $scope.dislikeClicked = function(blog) {
    blog.dislikes += 1;
    return $scope.updateDB(blog);
  };
  return $scope.updateDB = function(blog) {
    return blogService.update({
      id: blog.id,
      likes: blog.likes,
      dislikes: blog.dislikes
    });
  };
})

.directive('blogpost', function() {
  return {
    templateUrl: 'modules/blog/blogPost.html',
    restrict: 'E'
  };
}).filter("reverse", function() {
  return function(items) {
    return items.slice().reverse();
  };
});
