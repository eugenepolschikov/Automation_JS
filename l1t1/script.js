var a = 1;
var b = 2;
var c = 3;
var D;
var x1;
var x2;
var text_no_roots = "I've got no roots, but my home was never on the ground \nI've got no roots, but my home was never on the ground \nI've got no roots uh uh uh uh \nI've got no roots uh uh uh uh…";
var text_two_roots = "I have 2 roots. My roots are: \n"
var text_one_root = "I have 1 root. My root is: \n"
var text_invalid_values = "Not all the values you've provided are numbers.\nPlease provide correct values."

if ((typeof a === "number") && (typeof b === "number") && (typeof c === "number")) {
	D = b*b - 4*a*c;
	if (D !== 0) {
		if (D > 0) {
			x1 = (-b + D^0.5)/(2*a);
			x2 = (-b - D^0.5)/(2*a);
			console.log(text_two_roots+"x1 = "+x1+"\n"+"x2 = "+x2);
		}
		else {
			console.log(text_no_roots);
		}
	}
	else {
		x1 = (-b + D^0.5)/(2*a);
		console.log(text_one_root+"x="+x1);
	}
}
else console.log(text_invalid_values);