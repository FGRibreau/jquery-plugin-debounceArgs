/*
  jQuery-debounceargs v0.1, by Francois-Guillaume Ribreau.

  http://blog.fgribreau.com/

  Copyright (c)2011 Francois-Guillaume Ribreau. All rights reserved.
  Released under the Creative Commons BY-SA Conditions.
    http://creativecommons.org/licenses/by-sa/3.0/

  Usage:
    var func = $.debounceargs(10000, function(args){console.log(args);});
    
    func(1);
    func(1,2);
    func("string", [1,2,3]);
    func();
    
    //Wait 10 seconds and the console will print:
    [[1], [1, 2], ["string", [1, 2, 3]], []]
*/

(function($){
$.debounceargs = function(wait, cb){
    var timeOut = null
    ,   args = []
    ,   callback = function(){args=[];timeOut=null;cb(args);};

    return function(){
        if(timeOut){
            clearTimeout(timeOut);
        }
        
        args.push(arguments);
        timeOut = setTimeout(callback, wait);
    };
};

})(jQuery);