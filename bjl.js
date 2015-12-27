var cloneObject = function (src, dest) {
    for(var attr in src.prototype) {
        dest.prototype[attr] = src.prototype[attr];
    }    
};

