//alert('Hello World');

const fullName = prompt ("1. What is your name?");
const message = "Hello, " + fullName + "!";
console.log(message);

const year = +prompt ("2. What is your year of birth?");
const age = (2021 - year);
console.log(`Result: ${age} years old`);

const length = +prompt ("3. Type in the length of a side of a square");
const result = (4 * length);
console.log(`Result: ${result}`);

const circle = +prompt ("4. Type in the circumference of a circle");
const radius = (length / 6.28);
console.log(`Result: ${radius}`);

const km = +prompt ("5. What is the distance in kilometers between the two cities?");
const answer = (km);
console.log(`Result: ${answer}`);

const hours = +prompt ("In how many hours do you want to get to your destination?");
const answer2 = (hours);
console.log(hours);
console.log(`You will have to go ${km/hours} kilometers an hour in order to get to your destination on time.`);

const dollars = +prompt ("6. Enter an amount of U.S. Dollar/Dollars.");
const euro = (dollars * 0.82);
console.log(`Result: ${euro} Euros`);

const flash = +prompt ("7. What is the size of your flash drive?");
const size = (flash / 0.82);
console.log(`Result: You can fit ${size} files of 820 MB on your flash drive.`);

const money = +prompt ("8. How much money do you have in your wallet?");
console.log(`${money} Dollars`);

const price = +prompt ("What is the price of the chocolate bar?");
console.log(`${price} Dollars`);
console.log(`You can buy ${money/price} chocolate bars.`);

const change = ((money/price) - price);
console.log(`Your change will be ${change} dollars.`);

console.log( 
    +prompt("Enter a value").split("").reverse().join("") 
)

const desposit = +prompt ("10. Enter an amount to deposit to the bank.")
const twomonths = (desposit * 2);
const answer3 = (twomonths * 0.05);
console.log(answer3);


