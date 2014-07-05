(function(){
	'use strict';

	GAngular.controller('GameController' ,function ($scope, UtilSrvc) {
	    $scope.valueFromService = UtilSrvc.helloWorld('Amy');

	    $scope.renderables = [
	    	new Renderable(new Vector(200), 50, new Image(new Vector(500))),
	    ];

	    var rotationSpeed = 50;
	    var moveSpeed = 50;
	    var player = $scope.renderables[0];
	    $scope.keyup = function($event) {
	    	console.log($event);
	    	switch (event.keyCode) {
	    		case 87: // w
	    			player.position.y += moveSpeed;
	    			break;
    			case 83: // s
    				player.position.y -= moveSpeed;
    				break;
				case 68: // d
					player.position.x += moveSpeed;
					break;
				case 65: // a
					player.position.x -= moveSpeed;
					break;
				case 81: // q
					player.rotation -= rotationSpeed;
					break;
				case 69: // e
					player.rotation += rotationSpeed;
					break;
	    	}
	    };
	    $scope.keydown = function($event) {
	    	console.log('keydown');
	    	console.log($event);
	    };
	});

	function PlaceKitten(width, height) {
		return 'http://placekitten.com/' + width + '/' + height ;
	}

	function Renderable(position, rotation, image) {
		var self = this;

		self.position = position || new Vector();
		self.rotation = rotation || 0;
		self.image = image || new Image();

		self.style = function() {
			return {
				left: self.position.x + 'px',
				top: self.position.y + 'px',
				'-webkit-transform': 'rotate(' + self.rotation + 'deg)'
			};
		};

		return self;
	}

	function Vector(x, y) {
		var self = this;
		self.x = x || 0;
		self.y = y || x;
		return self;
	}

	function Image(size, src) {
		var self = this;
		self.size = size || new Vector(32);
		self.src = src || PlaceKitten(self.size.x, self.size.y);
		return self;
	}
}())