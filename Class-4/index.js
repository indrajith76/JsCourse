/* var mobileRam = 1;
if (mobileRam == 2) {
  console.log("Mobile ram is 2 GB");
} else if (mobileRam == 3) {
  console.log("mobile ram is 3GB");
} else if (mobileRam == 1) {
  console.log("Mobile ram is 1 GB");
} else {
  console.log("Mobile Ram is 4GB");
} */

// Switch Statement
/* var carColor = "green";
switch (carColor) {
  case "red":
    console.log("My car color is Red");
    break;

  case "green":
    console.log("My car color is Green");
    break;

  default:
    console.log("My car color is white");
} */

// Function
/* function funName() {
  console.log("Statement 1");
  console.log("Statement 2");
  console.log("Statement 3");
}

funName();  */

/* function dubbleNumber(num) {
    console.log(num * 2)
}

dubbleNumber(8) */

/* function restaurantBooth(taka, name) {
  console.log(`Ai ${name} vai nen apnr ${taka} takar fuska and tok.`);
}

restaurantBooth(50, "Korim");
restaurantBooth(100, "Rajib");
restaurantBooth(10, "Rony"); */

/* function sum(num1, num2, num3, num4, num5) {
    console.log('hello');
    return (num1 + num2 + num3 + num4 + num5); 
}

var total = sum(10, 20, 30, 40, 50);

console.log(total) */

/* function calC(num1, num2) {
  var sum = num1 + num2;
  var mult = num1 * num2;
  var div = num1 / num2;
  var avg = (num1 + num2) / 2;
  return `Sum = ${sum}, multi = ${mult}, dividation =${div}, avg = ${avg}`;
}

var results1 = calC(50, 20);
console.log(results1);
var results2 = calC(80, 30);
console.log(results2); */

// Object
var mobile = {
  companyName: "apple",
  price: "$1200",
  color: "red",
  camera: "15pixel",
  ram: "4gb",
};

// console.log(mobile.price);
// console.log(mobile.ram);

// change key value
/* mobile.price = "$1000";
mobile["color"] = "gray";
console.log(mobile); */

/* var color = "purple";
mobile["color"] = color;
console.log(mobile) */

/* var keys = Object.keys(mobile);
var values = Object.values(mobile);
console.log(values); */

var keysOfMobile = Object.keys(mobile);

/* for (let index = 0; index < keysOfMobile.length; index++) {
    const element = keysOfMobile[index];
    console.log(element)
} */

// for in loop
for (var keyName in mobile) {
  var value = mobile[keyName];
  console.log(keyName, value);
}
