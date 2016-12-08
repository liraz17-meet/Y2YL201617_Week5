///PLEASE ADD YOUR SOLUTION CODE TO PART 1 HERE

///1. VARIABLES

///2. DATA STRUCTURES

///3. FUNCTIONS & CONDITIONAL STATEMENTS

///4.  LOOPS

var temperature = 98.6;
temperature+=5;
temperature*=3;
temperature-=20;
console.log(temperature);

var days_of_the_week = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
days_of_the_week[0] = "domingo";
days_of_the_week[1] = "lunes";
days_of_the_week[2] = "martes";
days_of_the_week[3] = "miercoles";
days_of_the_week[4] = "jueves";
days_of_the_week[5] = "viernes";
days_of_the_week[6] = "sabado";
console.log(days_of_the_week);

var icecream = {"vanilla" : 1.99, "chocolate" : 2.49, "strawberry" : 2.25};
icecream["chocolate"] = 0.99;
icecream["pistacio"] = 5;
delete icecream["strawberry"];
console.log(icecream);

function DoIHaveToGoToSchoolToday(day) {
if (day == 0 || day == 1 || day == 2 || day == 3 || day == 4 ){
console.log("Yes, today is " + days_of_the_week[day])}
else { console.log("No, today is " + days_of_the_week[day])}

}
alert(DoIHaveToGoToSchoolToday(1));

var price_of_Gasoline = [5.88, 5.93,6.05,4.99,5.66,6.08,5.33,6.01,4.87,6.99,7.03,5.52]
var monthlygasoline=0;

function gasoline(){
for (var i= 0; i< price_of_Gasoline.length; i++) {
monthlygasoline=price_of_Gasoline[i]*40;
console.log(monthlygasoline)
}} 
gasoline()



