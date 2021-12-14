// CHAPTER # 21

var firstName = prompt("Enter your first name :");
var lastName = prompt("Enter your last name :");

alert(firstName + lastName + " Welcome to Java Script world");


var mobile  = prompt("Enter Mobile model :");
alert("Length of String is : "+ mobile.length);

var find = pakistani;
if(find !== -1){
    console.log("Index of N is :"+ find.indexOf('n'));
}
else{
    console.log("Sorry There is no 'n' ");
}

var lindx = "Hello World";
console.log(lindx);
console.log(lindx.lastIndexOf('l'));

var replace = "Hyderabad";
console.log("City : "+replace);
console.log("After Replacement :"+replace.replace('Hyder','Islam'))


var message  = "Ali and Sami are best friends. They play cricket and football together.";
console.log(message);
console.log("After replacement : "+ message.replace('and','&'));

var convert = ("472");
console.log(convert, (typeof convert));
var convert = Number("472");
console.log(convert, (typeof convert));

var capital = prompt("Enter word");
console.log(capital.toUpperCase());

var title = prompt("Enter word");
console.log(title.replace('t','T'));

var str = String(35.36);
console.log(str.replace('.',''),(typeof str));

var username = prompt("Enter Your name ");

for(var i=0 ; i<=username.length; i++){
    if(username.charAt(i)==="!"&&"@"&&","&&","&&"."){
        console.log("Please Enter a Valid userName");
        break;
    }
   
}

var bakery = ['cake','apple pie','cookie','patties'];
var order = prompt("Welcome to JavaScript Bakery. What do you want to order Sir/ma'am?");


for(var i=0; i<=bakery.length; i++){
     if(order===bakery[i]){
        alert(order+" is available at index "+bakery.indexOf(order));
        break;
    }
    else{
        alert("Sorry "+order+" is not Availble.")
    }
}

var password = prompt("Enter Password");

//for(var i=0; i<=password.length; i++){

if(password!=='!'&&'&'&&'$'&&'1'&&'A' ){
    alert("invalid")
}
else{
    alert("correct");
}

var uni = "University of Karachi";

for(var i=0; i<=uni.length; i++){
    console.log(uni[i]);
}


var pak = prompt("Enter word");
var a = pak.lastIndexOf();
console.log(a);
    




// CHAPTER 26 - 30

var number = 3.45214;
var number1 = Math.round(number);
var number2 = Math.floor(number);
var number3 = Math.ceil(number);

console.log("Number : "+ number);
console.log("Round Off Value : "+ number1);
console.log("Floor Value : "+ number2);
console.log("Ceil Value : "+ number3);

var number = -2.673;
var number1 = Math.round(number);
var number2 = Math.floor(number);
var number3 = Math.ceil(number);

console.log("Number : "+ number);
console.log("Round Off Value : "+ number1);
console.log("Floor Value : "+ number2);
console.log("Ceil Value : "+ number3);

var number  = -4;
var num = kmkl;


var n = Math.random();
var m = (n*6)+1;
var o = Math.floor(m);
console.log("Random Dice Value : "+o);
console.log("Random Dice Value : "+o);


var head = Math.random();
var h = (head*2)+1;
var f = Math.floor(h);
if(f===2){
    console.log(f);
    console.log("Random Coin value is : Tail. ")
}
else{
    console.log(f);
    console.log("Random Coin Value is : Head");
}

var one = Math.random();
var hundred = (one * 100)+1;
var final = Math.floor(hundred);
console.log("Random Number Between 1 to 100 : "+final);


var weight = prompt("Enter your weight in KG : ");
if(weight==parseInt(weight)){
    console.log("Your Weight is : "+ parseInt(weight)+ "Kg");
}
else if(weight==parseFloat(weight)){
    console.log("Your Weight is : "+ parseFloat(weight)+ "Kg");
}



var user = prompt("Enter Number between 1 to 10");
var secretNumber = Math.random();
var secret1 = (secretNumber * 10)+1;
var secret2 = Math.floor(secret1);

if(user==secret2){
    alert("Congrtulation You Win");
}


else{
    alert("Try Again !");
    alert("The secret number is : "+secret2);   
}


// CHAPTER 31 TO 34

var right  = new Date();
console.log(right);

var date = new Date();
var month = date.getMonth();
if(month===11){
    console.log("Current Month: December");
}


var date = new Date();
var day = date.getDay();
console.log(day);   
if(day==0){
    console.log("Current Day: Sun");
}
else if(day==1){
    console.log("Current Day: Mon");
}
else if(day==2){
    console.log("Current Day: Tue");
}
else if(day==3){
    console.log("Current Day: Wed");
}
else if(day==4){
    console.log("Current Day: Thur");
}
else if(day==5){
    console.log("Current Day: Fri");
}
else if(day==6){
    console.log("Current Day: Sat");
}
else{
    console.log("Invalid Day !");
}


var date = new Date();
var day = date.getDay();
console.log(day);

if(day==0){
    console.log("It's Fun day");
}

else if(day==6){
    console.log("It's Fun day");
}



var z = new Date();
var y = z.getDate();
var a = "First Fifteen Days of Month."
var b = "Last Days of Month."
console.log("Current Date : "+ y);
if(y <= 15){
    console.log(a);
}
else{
    console.log(b);
}


var time = new Date();
var other =  new Date('1-1-1970 12:08:00');
console.log(other);
var b = other.getMinutes();
var    a = other.getTime();

console.log("Ellapsed Millisecond since january 1, 1970 :"+a);
console.log("Ellapsed Minutes since january 1, 1970 :"+ b);

var pm = new Date();
if(pm >12){
    console.log("Its Pm");
}


var a = new Date();
var age = prompt("Enter your Age :");
var birthYear = a.getFullYear();
var cal = birthYear-age;
console.log("Yout birth year is : "+cal);

var a = new Date();
var name = prompt("Your Name :");
var month = a.getMonth();
var units = 410;
var charges = 16;
var late = 350;
var netAmount = units * charges;
var grossAmount = netAmount +  late;

console.log("K-Electric Bill");
console.log("Name : "+name);
console.log("Month : "+month);
console.log("Number of Units : "+units);
console.log("Charges per Units : "+charges);
console.log("Net Amount Payabale in Due Date : "+netAmount);
console.log("Late Payment Surcharge : " + late);
console.log("Gross Amount payable After Due Date : "+grossAmount);


// CHAPTER 35 TO 38


function time(){
    var a = new Date();
    console.log(a);
}

time();

function greet(){
    var f = prompt("Emter your first name :")
    var l = prompt("Emter your last name :")
    console.log("Good Morning MR. "+f+ l );
}
greet();

function sum(){
    var a = prompt("Enter First Number");
    var b = prompt("Enter Second Number");
    var c = Number(a)+Number(b);
    console.log("The Sum of number is : "+c )
}

sum();  


function Calculator(){
    var a = prompt("Enter First number");
    var b = prompt("Enter Second Number");
    var c = prompt("Enter 1 for Addition. 2 For Subtraction, 3 For Multiplication, 4 for Division");
    

    if(c==1){
        console.log("Additon of Number : "+Number(a+b));
    }
    else if(c==2){
        console.log("Additon of Number : "+Number(a-b));
 
    }
    else if(c==3){
        console.log("Additon of Number : "+Number(a*b));
 
    }
    else if(c==4){
        console.log("Additon of Number : "+Number(a/b));
 
    }


        
}
Calculator();

function square(){
    var s = prompt("Enter number convertes in its square");
    var k = s*s;
    console.log("The square of "+s+" :"+k);
}

square();

var radius = prompt("Enter the radius of circle :")


function calcCircumference(){
    var cal = 2*(3.141)*radius;
    console.log("Radius of Circle is : "+radius);
    console.log("Circumference of Circle is : "+cal);
}
function AreaOfCircle (){
    var arc =  3.141*(radius*radius);
    console.log("Area of Circle is : "+arc);
}
calcCircumference();
AreaOfCircle();



// CHAPTER 38 TO 42

function leapYear(){
    var a = prompt("Enter year ");
    if(a==2012||a==2016||a==2020){
        console.log("YEs this is leap year");
    }
    else{
        console.log("No this is not leap year !!!");
    }
}

leapYear();
    var a = 10;
    var b = 10;
    var c = 15;
    var d = (a+b+c)/2;
    var f= (d)*(d-a)*(d-b)*(d-c);
    
    function S(){
    
    
    console.log("value of S :"+d);

}

function AreaOfTriangle(){
    
    console.log("Area of Triangle is : "+f);
}

S();
AreaOfTriangle();

