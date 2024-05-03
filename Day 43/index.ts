//qs.no 127

const traditionalmethod = function (a : number , b : number) {
    return a+b;
}
console.log(traditionalmethod(5,6));

const arrowmethod = (a:number,b:number) => (5 +4)
console.log(arrowmethod());

//qs.no 128

let mukltipleparametrs = function(){
    let numbers = []
    for (let _i = 0; _i < arguments.length; _i++){
        numbers[_i] = arguments[_i]   
    }
    return numbers.reduce(function(total , number){return total * number},1)
}
console.log(mukltipleparametrs(5,6,2));

//qs.no 129

const tradition_vs_arrow ={
    value : "Hamdan",
    traditionalfunction : function(){
        console.log(this.value);
    },
    arrowfunction : () => {
        console.log(this.value);
    }
}
tradition_vs_arrow.traditionalfunction()
tradition_vs_arrow.arrowfunction()



