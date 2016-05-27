'use strict';

babyShowerApp.controller('IndexController', function ( $scope, $firebaseArray) {
  var ref = new Firebase('https://babyshowerdb.firebaseio.com');

  $scope.giftList = $firebaseArray(ref);

  $scope.addOwner = function (gift, currentOwnerName) {
    gift.owner = currentOwnerName;
    $scope.giftList.$save(gift);
    window.location.reload();
  };
});
