//qs.no 124

let hell = {
  name: "zayan",
  age: 19,
  getinfo: function () {
    return `${this.name}`;
  },
};
console.log(hell.getinfo());

//qs.no 125

let rectangle = {
  Length: 12,
  width: 15,
  area: function () {
    return this.Length * this.width;
  },
};
console.log(rectangle.area());

//qs.no 126

let newobj = {
  name: "Talha",
  age: 20,
  getthis: function () {
    console.log(this.name);

    const recall = () => {
      console.log(this.age);
    };
    recall();
  },
};
newobj.getthis();
