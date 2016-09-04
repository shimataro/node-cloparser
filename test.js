(function(undefined)
{
	"use strict";

	var cloparser = require("./index.js");
	var options = {
		a: false,
		b: true
	};
	var extras = cloparser(options);

	console.log(options);
	console.log(extras);
})();
