// Follow along with the examples here
function sayHello() {
    console.log("Hello!");

}
function sayHelloToIsabel(){
    console.log("Hello Isabel!");
}
function sayHelloToSofia (){
    console.log("Hello Sofia!");
}
function sayHelloToBrendan(){
    console.log("Hello Brendan!");
}
sayHello();
sayHelloToIsabel();
sayHelloToBrendan();
sayHelloToSofia();

function doSomething(thing){
    console.log(thing);
}
doSomething("anything");

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
}
say("Julio", "hello");
function add(x, y) {
    return x + y;
}
console.log(add(1+2));
function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }