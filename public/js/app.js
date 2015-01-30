'use strict';

var myApp = angular.module('Debt', ['duScroll', 'ui.slider']);

myApp.controller('TabsCtrl', ['$scope', function($scope) {
  $scope.tabs = ['Canadian Debt Relief', 'How Does It Work?', 'What Types of Debt Qualify?', 'Why Choose Debt.ca?', 'Why Should I Avoid Bankruptcy?', 'How Do I Get Started?'];
  
  $scope.currentTab = $scope.tabs[0];

  $scope.changeTitle = function (index) {
    $scope.currentTab = $scope.tabs[index];
  };
}]);

myApp.controller('GetStartedCtrl', ['$scope', '$log', function($scope, $log) {
  $scope.formData = {};
  $scope.estimateData = {};
  $scope.showFirst = true;
  $scope.showSpinner = false;
  $scope.showLast = false;
  $scope.title = 'Get Started Now';

  
  $scope.submitQualify = function (isValid) {
    if (isValid) {
      $scope.showFirst = false;
      $scope.showSpinner = true;
      $scope.showSpinner = false;
      $scope.showLast = true;
    }
  };

  $scope.getEstimate = function (isValid) {
    if (isValid) $log.log($scope.estimateData);
  };
}]);

myApp.controller('GetStartedSliderCtrl', ['$scope', '$log', function($scope, $log) {
  $scope.estimateData = {};
  
  $scope.showZero = true;
  $scope.showFirst = false;
  $scope.showSpinner = false;
  $scope.showLast = false;
  
  $scope.min = 5000;
  $scope.max = 200000;
  $scope.estimateData.value = 50000;

  $scope.firstStep = function() {
    $scope.showZero = false;
    $scope.showFirst = true;
  };

  $scope.submitQualify = function (isValid) {
    if (isValid) {
      $scope.showZero = false;
      $scope.showFirst = false;
      $scope.showSpinner = true;
      $scope.showSpinner = false;
      $scope.showLast = true;
    }
  };

  $scope.getEstimate = function (isValid) {
    if (isValid) $log.log($scope.estimateData);
  };
}]);

myApp.directive('owlLogos', [function () {
  return {
    restrict: 'A',

    link: function (scope, element) {
      element.owlCarousel({
        autoPlay: true,
        pagination: false,
        itemsMobile: 2
      });
    }
  };
}]);

myApp.directive('popover', [function () {
  return {
    restrict: 'A',

    link: function (scope, element) {
      element.popover();
    }
  };
}]);

myApp.directive('modalClose', [function () {
  return {
    restrict: 'A',

    link: function (scope, element) {
      element.on('hide.bs.modal', function(e) { 
        var player= $(element).find('iframe'),
        vidSrc = player.prop('src');
        player.prop('src','');
        player.prop('src',vidSrc);
      });
    }
  };
}]);