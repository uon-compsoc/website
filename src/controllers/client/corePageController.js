angular.module('corePageApp').controller('corePageController',
	function($scope) {
		$scope.currentPage = pageData.currentPage;
		$scope.currentPage.text = $scope.currentPage.text + ' - UoN Computing Society';
		$scope.currentYear = new Date().getFullYear();
	}
);