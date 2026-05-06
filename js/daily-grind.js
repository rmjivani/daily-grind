let myDate = new Date();
let myDay = myDate.getDay();
let today = "";

switch(myDay){

 	case 0:
    	today =  "Sunday";
 	break;

 	case 2:
   	today = "Tuesday";
 	break;

 	default:
    	today = "Something went wrong!";

}

alert (today);
