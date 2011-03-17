jQuery-debounceargs - Debounce calls while saving each call's arguments
================================

Usage
---------------------------------------
	var func = $.debounceargs(10000, function(args){console.log(args);});

	func(1);
	func(1,2);
	func("string", [1,2,3]);
	func();

Wait 10 seconds and the console will print:
	[[1], [1, 2], ["string", [1, 2, 3]], []]