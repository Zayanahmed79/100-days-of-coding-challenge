function createalbum(name, relaese, title) {
    return {
        name: name,
        relaese: relaese,
        title: title,
    };
}
var album1 = createalbum("zayan", 2023, "Tu hai kahan");
var album2 = createalbum("shafiuqe", 2010, "der na kahin mor");
console.log(album1);
console.log(album2);
//qs.no 41
var magician = ["zayan", "Talha", "Hamdan"];
function magicians(magician) {
    magician.forEach(function (namemagician) {
        console.log(namemagician);
    });
}
magicians(magician);
//qs.no.42
// function magiciannamae(magician : string[]){
//   magician.forEach(m_names =>{
//     console.log(m_names + " The Great");
//   })
// }
// magiciannamae(magician)
function magiciannamae(magician) {
    for (var i = 0; i < magician.length; i++) {
        console.log(magician[i] + " The Great");
    }
}
magiciannamae(magician);
