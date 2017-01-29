corePageApp.controller('navbarController',
	function($scope) {
		$scope.links = pageData.navbarData.links;
		for (let i = 0; i < $scope.links.length; ++i) {
			$scope.links[i].isActivePage = $scope.links[i].href == pageData.currentPage.href;
		}
	}
);