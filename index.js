const dict={
    "EAD":{
        welcome: "Дорогие родители Елена, Александр!"
//2
    "example":{
        welcome: "Дорогие user1, user2!",
        wedding: "Мы приглашаем вас пойти да поплясать на нашей свадьбе!"
    },
}



const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
const p=new URLSearchParams(window.location.search)
// for (const [key, value] of p) {
//     console.log(key, value)
// }
let value = params;

const welcomeBlock=document.querySelector("#welcome-string")
const welcomeWedBlock=document.querySelector("#welcome-wed")
if(dict[params["guest"]]){
    let guest = dict[params["guest"]]
welcomeBlock.innerHTML=guest.welcome

if(guest.wedding){
    welcomeWedBlock.innerHTML = guest.wedding
}
}
