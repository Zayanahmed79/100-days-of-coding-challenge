//qs.no 127
var _this = this;
var traditionalmethod = function (a, b) {
    return a + b;
};
console.log(traditionalmethod(5, 6));
var arrowmethod = function (a, b) { return (5 + 4); };
console.log(arrowmethod());
//qs.no 128
var mukltipleparametrs = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
console.log(mukltipleparametrs(5, 6, 2));
//qs.no 129
var tradition_vs_arrow = {
    value: "Hamdan",
    traditionalfunction: function () {
        console.log(this.value);
    },
    arrowfunction: function () {
        console.log(_this.value);
    }
};
tradition_vs_arrow.traditionalfunction();
tradition_vs_arrow.arrowfunction();
