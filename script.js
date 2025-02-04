function isSameType(value1, value2) {
	let ans=false;
  if(typeof(value1)==typeof(value2)){
	  ans=true;
  }
	return ans;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
