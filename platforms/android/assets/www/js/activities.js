Object.prototype.inherit = function () {
    function F() {}
    F.prototype = this;
    return new F();
}

//---------------------- Activity object--------------------------------------------------------
function Activity(divId) {
	this.element = $('#' + divId);
	this.isHidden = true;
	this.isVisible = false;
}

Activity.prototype = {
	constructor: Activity,
	
	getElement: function() {
		return this.element;
	},

	show: function() {
		this.element.css('display', 'block');
		this.element.css('visibility', 'visible');
		this.element.css('z-index', '10000');
	},

	hide: function() {
		this.element.css('display', 'node');
		this.element.css('visibility', 'hidden');
		this.element.css('z-index', '-10000');
	}
}

//-----------------------Map object-------------------------------------------------------------

function Map(divId) {
	Activity.call(divId);
	this.map = null;
}
Map.prototype = Activity.prototype.inherit();

Map.prototype = {

	render: function(options) {
		this.map = new google.maps.Map(this.getElement(), options)
	}
}



//-----------------------Gallery object----------------------------------------------------------

function Gallery(divId) {
	Activity.call(divId);
}
Gallery.prototype = Activity.prototype.inherit();

// Gallery.prototype = {
// }

//-----------------------List object-------------------------------------------------------------

function List(divId) {
	Activity.call(divId);
}
List.prototype = Activity.prototype.inherit();

// List.prototype = {
// }

//-----------------------Menu object-------------------------------------------------------------

function Menu(divId) {
	Activity.call(divId);
}
Menu.prototype = Activity.prototype.inherit();

// Menu.prototype = {
// }

