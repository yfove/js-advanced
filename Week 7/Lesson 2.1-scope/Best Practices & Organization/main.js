let planet = "earth";
const travel = () =>{
    planet = "mars";
    console.log(planet);
}
travel();
console.log(planet);

const space = () =>{
    let stars = 1000;
}

const myApp = {
    twitter: "thisisDom",
};

console.log(myApp.twitter);

// document.ready
$(function () {
    //will  start widgetApp on initial start
    widgetApp.init();
});