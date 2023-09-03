// Task 1
//Installations done
// task 2
// Bushra Mahin 7/14/2023 This program shows my name 
let person : string = "Bushra Mahin";
const message =`Hello ${person} , would you like to learn some Python today?`;
console.log(message);
// Task 3
// Bushra Mahin 7/14/2023 This program shows my name in uppercase lowercase and title case
console.log(person.toUpperCase());
console.log(person.toLowerCase());
function titlecase(str : any){
    str = str.toLowerCase().split(" ");
    for (let i = 0 ; i < str.length ; i++){
        str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1)
    }
    return str.join(' ');
}
console.log(titlecase(person));
// Task 4
// Bushra Mahin 7/14/2023 This program show quote in double quotes 
console.log("Bushra Mahin once said , \"Create your happiness on your behalf\"");

// Task 5
// Bushra Mahin 7/14/2023 This program shows writer name and quote stored in seprate variables and show in same output 
const quote = "Be your own happiness";
const writer = "Bushra Mahin";
console.log(`${writer} once said , \"${quote}\"`);
// Task 6
// Bushra Mahin 7/14/2023 This program shows output with whitespace characters
console.log("\tBus\rhra\nMah\fin")
console.log(person);
// Task 7 
// Bushra Mahin 7/14/2023 This program shows addition subtration multiplication and division and awnser is eight in each case
const add = 5 + 3;
const subtract = 9-1;
const product = 8 * 1;
const division = 16/2;
console.log(add);
console.log(subtract);
console.log(product);
console.log(division);
console.log("Print statement dose not support type number or print function dose not got any argument");
// Task 9
// Bushra Mahin 7/14/2023 This program reveals my favourite number
const favourite_number = 4;
console.log(`My favourite number is ${favourite_number}`);
// Task 10
// Adding comments on the top of every single program in done
// Task 11
let names = [
    "Kaint-e-humna",
    "Fatime Zafar",
    "Noor Rana",
    "Laraib",
    "Uswa anwer"
]
for (let j = 0 ; j < names.length ; j++){
 console.log(names[j]);
}
// Task 12
for(let i = 0 ; i < names.length ; i++){
    console.log(`Hello i missed our old days ${names[i]}`);
}
// Task 13
let transports = [
    "Bike",
    "Car",
    "Orange Line",
    "Train"
]
console.log(`I love to ride on  ${transports[0]} in summer`);
console.log(`I like to travel in ${transports[1]} in winters`);
console.log(`${transports[2]} best and very comfortable public transport`);
console.log(`${transports[3]} is the bestest mean of transport if you want to enjoy your long travel`);
// Task 14
let relatives = [
    "Nazish",
    "Shozib",
    "Essaw"
]
console.log("Original Array" , relatives);

for (let i = 0 ; i < relatives.length ; i++){
    console.log(`I am very glad to invite you for dinner \n party in my house kindly come for my happiness\n ${relatives[i]}`);
}
// Task 15
const relatives_index = relatives.indexOf("Shozib");
relatives.splice(relatives_index , 1 , "Mudabbir");
console.log("New Array" , relatives);
for (let i = 0 ; i < relatives.length ; i++){
    console.log(`I am very glad to invite you for dinner \n party in my house kindly come for my happiness\n ${relatives[i]}`);
}
// Task 16
relatives.unshift("Humna");
const start = 2;
const deleteCount = 0;
relatives.splice(start , deleteCount , "Yasmeen")
relatives.push("Shahid")
console.log("Third array" , relatives);
for (let i = 0 ; i < relatives.length ; i++){
    console.log(`I am very glad to invite you for dinner \n party in my house kindly come for my happiness\n ${relatives[i]}`);
}
// Task 17
for (let i = 5 ; i > 1 ; i--){
    console.log(`${relatives[i]} sorry i can not invite you on dinner its an emergency`);
    relatives.pop()
    console.log(relatives);
}
let guests = relatives.slice()
for (let k = 0 ; k < relatives.length ; k++){
    console.log(`${relatives[k]} you are still invited dudes`);
    
}
relatives.length = 0
console.log(relatives)
//Task 18
const favourite_locations = [
    "Maldives",
    "Sawat",
    "Hunza Valley",
    "Kalam",
    "Turkey",
    "Saudia Arabia",
]
const originalLocations = favourite_locations.slice();

favourite_locations.sort();

console.log("The locations in their original order:");
console.log(originalLocations);

console.log("The locations after sorting:");
console.log(favourite_locations);

favourite_locations.sort().reverse();

console.log("The locations after reversing in alphabetical order:");
console.log(favourite_locations);

console.log("The locations in their original order:");
console.log(originalLocations);

favourite_locations.reverse();
console.log("The locations after reversing:");
console.log(favourite_locations);
// Task 19
console.log(`${guests.length} number of people still invited in dinner party`);
// Task 20
let my_favourites = {
     "Mountains" : ["mount everest" , "k-2" , "himaliya"],
     "Languages" : ["Urdu" , "Siraiki" , "Arabic"],
     "Rivers" : ["Ravi" , "Sindh" , "Stluj"],
     "Cities" :["Lahore" , "Karachi" , "islamabad"],
      "Countries" : ["Pakistan" , "UK" , "Canada"]
}
console.log(my_favourites);
// Task 21
console.log(my_favourites.Cities);
// Task 23
// (i)
let Language = "Urdu";
(Language == "Urdu")?console.log(true) : console.log(false);
// (ii)
let num1 = 22;
(num1 % 2 == 0 ) ? console.log("number is even") : console.log("number is odd");
// (iii)
let vowel = "e";
if(vowel == "a" || vowel == "A" ||  vowel == "e" || vowel == "E" || vowel == "i" || vowel == "I" 
|| vowel == "o" || vowel == "O" || vowel == "u" || vowel == "U") {
    console.log("Vowel");
}
else{
    console.log("Consonant");
    
}
// (iv)
let course = "web 3.0";
(course == "web 3.0")?console.log(true):console.log(false);
// (v)
let class_time = 2;
if(class_time == 2){
    console.log(true);
    
}else{
    console.log(false);
    
}
// (vi)
let Language1 = "Urdu";
(Language == "English")?console.log(true) : console.log(false);
// (vii)
let num2 = 337;
(num1 % 2 == 0 ) ? console.log("number is even") : console.log("number is odd");
// (viii)
let vowel1 = "w";
if(vowel == "a" || vowel == "A" ||  vowel == "e" || vowel == "E" || vowel == "i" || vowel == "I" 
|| vowel == "o" || vowel == "O" || vowel == "u" || vowel == "U") {
    console.log("Vowel");
}
else{
    console.log("Consonant");
    
}
// (ix)
let course1 = "Metaverse";
(course == "web 3.0")?console.log(true):console.log(false);
// (v)
let class_time2 = 6;
if(class_time == 2){
    console.log(true);
    
}else{
    console.log(false);
    
}
// Task 24
// Equality and inequality in strings
let a = "Bushra";
let b = "Mahin";
if (a == b){
    console.log("Both strings are same");
}
else{
    console.log("Strings are not same");
}
// test with lowercase()
let My_nm = "Bushra MAHIN"
let nm_lower = My_nm.toLowerCase()
if(My_nm != nm_lower ){
    console.log("Same" ,nm_lower , My_nm); 
}
else{
    console.log("Not same" ,nm_lower , My_nm); 
}
// Neumarical test also AND and OR operator
let marks = 10;
if(marks >= 80){
    console.log("A+");
}
else if(marks < 80 && marks >=70 ){
    console.log("A");
    
}
else if (marks < 70 && marks >=60){
    console.log("B");
    
}
else if (marks < 60 && marks >= 50){
    console.log("C");
    
}
else if (marks < 50 && marks >=40){
    console.log("D");
    
}
else if(marks < 40 && marks >=30){
    console.log("Below average");
    
}
else{
    console.log("Fail");
    
}
if(marks == 80){
    console.log("You got 80%");
}
if(marks != 80){
    console.log("Unfortunately you got less than 80%");
}
// Test whether an item is in a array
let students = ["Bushra" , "Kainat" , "Nazish" , "Mehreen"]
if(students.includes("Bushra")){
    console.log("Your name is in array");
}
// Test whether an item is not  in a array
if(students.includes("Nimra")){
    console.log("Your name is in array");
}
else{
    console.log("Your name is not in array");
}
// Task 25
let alien_color = "yellow"
if(alien_color == "green"){
    console.log("player just earned 5 points");
}
if(alien_color == "red"){
    console.log("player just earned nothing");
}
// Task 26
if(alien_color == "green"){
    console.log("player just earned 5 points");
}
else{
    console.log(" player just earned 10 points");
}
if(alien_color == "green"){
    console.log("player just earned 5 points");
}
else{
    console.log(" player just earned 10 points");
}
// Task 27
if(alien_color == "green"){
    console.log("player just earned 5 points");
}
else if (alien_color == "yellow"){
    console.log(" player just earned 10 points");
}
else{
    console.log(" player just earned 15 points");
}
// Task 28
let age = 1;
if( age > 0 || age < 2){
    console.log("the person is a baby");
    
}
else if(age ==2 || age < 4){
    console.log("the person is a toddler");
    
}
else if( age ==4 || age < 13){
    console.log("the person is a kid");
}
else if(age ==13 || age <20){
    console.log("the person is a teenager");
}
else if(age ==20 || age < 65){
    console.log("the person is a adult");
}
else{
    console.log("the person is a elder");
}
// Task 29
let favourite_fruits = ["banana" , "mango" , "apple" , "kiwi"]
if (favourite_fruits.includes("banana")){
    console.log("you like bananas!");
    
}
if (favourite_fruits.includes("mango")){
    console.log("you like mango!");
    
}
if (favourite_fruits.includes("apple")){
    console.log("you like apple!");
    
}
if (favourite_fruits.includes("kiwi")){
    console.log("you like kiwi!");
    
}
// Task 30
let persons = ["admin" , "Eric" , "Alex"]
for (let index = 0; index < persons.length; index++) {
    if (persons[index] == "admin"){
        console.log(`Hello ${persons[index]}, would you like to see a status report?`);
        
    }
    else{
        console.log(`Hello ${persons[index]}, thank you for logging in again`);
    }
    
}
// Task 31
persons.length = 0
if(persons.length == 0){
    console.log("We need to find users!");
    
}
else{
    console.log("We do not need to find some users!");
    
}
// Task 32
let current_users = ["Bushra Mahin" , "Kainat" , "Alex" , "Bard" , "Abdullah"]
let new_users = ["Fahama" , "Eric" , "Kainat" , "Alex" , "Mudabbir"]
for (const newUser of new_users) {
    if (current_users.includes(newUser)) {
      console.log(`The username ${newUser} is already taken.`);
    } else {
      console.log(`The username ${newUser} is available.`);
    }
  }
 // Task 33
let simple_number = [1,2,3,4,5,6,7,8,9]
let ordinal_numbers = []
for (let i = 0 ; i<simple_number.length ; i++){
    if(simple_number[i] == 1){
        ordinal_numbers.push(simple_number[i]+'st') 
    }
    else if(simple_number[i] == 2){
        ordinal_numbers.push(simple_number[i]+'nd')
    }
    else if(simple_number[i] == 3){
        ordinal_numbers.push(simple_number[i]+'rd')
    }
    else{
        ordinal_numbers.push(simple_number[i]+'th')
    }
}
console.log(ordinal_numbers.join("\n"));
// Task 34
let pizzas = ["Peproni" , "BBQ" , "Cheese lover" , "Creamy tikka"]
for (let i =0 ; i < pizzas.length; i++){
    console.log(`${pizzas[i]} i like sooo much`);
    
}
console.log(`Pizzas are yummy than any other meal\ntheir cheese chicken flavours are so yummy\ni think not me but everyne like it\ni really love pizza!`);
// Task 35
const animals = ["dog", "cat", "fish"];

for (const animal of animals) {
  console.log(`A ${animal} would make a great pet!`)
}

console.log("Any of these animals would make a great pet!")
// Task 36
let make_shirt = (size:string , message:string) =>{
    console.log(`Size of your T-shirt is \"${size}\" and message you want to print on your shirt is \"${message}\"`);
}
make_shirt("Large" , "I love my Family");
// Task 37
function T_shirt(size:string , message:string){
    if(size == "Large" || size == "Medium"){
        console.log(`Size of your shirt is \"${size}\" and message is \"I love typescript\"`);
    }
    else{
        console.log(`Size of your shirt is \"${size}\" and message is \"${message}\"`);
    }
}
T_shirt("Small" , "Nothing")
T_shirt("Medium" , 'nanananana')
// Task 38
function describe_city(city : string , country:string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}
describe_city("Lahore")
describe_city("Tokyo" , "Japan")
// Task 39
let city_country = (city : string , country:string)=>{
    console.log(`\"${city},${country}\"`);
}
city_country("Lahore" , "Pakistan")
city_country("Islamabad" , "Pakistan")
// Task 40
function make_album(artist:string , album_title : string,number_of_track ?: number){
    let album = {
        artist_name :artist,
        album_title :album_title,
        numberOfTracks : number_of_track
    }
    console.log(album); 
}
make_album("The Beatles", "Rubber Soul");
make_album("Pink Floyd", "The Dark Side of the Moon", 13);
make_album("Metallica", "Master of Puppets", 9);
// Task 41
let magician_array = ["David Copperfield", "Harry Houdini", "David Blaine"];
let Show_magician = (name : string[]) => {
   for(const magician of name){
    console.log(magician);
   } 
}
Show_magician(magician_array)
