//qs.no 124
var hell = {
    name: "zayan",
    age: 19,
    getinfo: function () {
        return "".concat(this.name);
    },
};
console.log(hell.getinfo());
//qs.no 125
var rectangle = {
    Length: 12,
    width: 15,
    area: function () {
        return this.Length * this.width;
    }
};
console.log(rectangle.area());
//qs.no 126
var newobj = {
    name: "Talha",
    age: 20,
    getthis: function () {
        var _this = this;
        console.log(this.name);
        var recall = function () {
            console.log(_this.age);
        };
        recall();
    },
};
newobj.getthis();
