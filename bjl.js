/*************************************************
 *
 * BJS.js (Bollinger JavaScript Library) v0.0.1
 *
 ************************************************/
var bjl = bjl || {};

bjl.cloneObject = function (src, dest) {
    for(var attr in src.prototype) {
        dest.prototype[attr] = src.prototype[attr];
    }    
};

var Builder = (function () {
    
    function Builder() {}

    Builder.prototype.build = function (builder) {
        return builder.build();
    };

    return Builder;
})();
blj.Builder = Builder;

var Factory = (function () {
    function Factory() {}

    Factory.Build = function (name) {
        if (name === "august") return new August();

        if (name === "employer") return new Employer();

        return new DefaultClass();
    };

    return Factory;
