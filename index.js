function takeANumber(katzDeliLine, string) {
//checks that the line exists 
//add a name to the line, then welcome everyone with a for loop
  
  if(katzDeliLine.length === 0 || katzDeliLine.length > 0) {
    
    katzDeliLine.push(string);
    var position = katzDeliLine.length;
    
      //for(let i = 0; i < katzDeliLine.length; i++) {
      
      var welcome = `Welcome, ${string}. You are number ${position} in line.`;
    }
  //}
  return welcome;
}


//takes no params
//return statement "order number: x"
//group of people come into the katzDeliLine
//counter
//do while there's a person, print a ticket. 


var counter = 0;

function printNumber()  {
  
  var message = `Order number: `
  counter++
  message += `${counter}`
    
  
  //while (counter > 0)
  return message;
  
}

console.log(printNumber());







function nowServing(katzDeliLine) {
  //Check that the line exists
  //We want to serve the first person so we mention them and remove them.
  
  if(katzDeliLine.length > 0) {

    var message = `Currently serving ${katzDeliLine.shift()}.`;
    return message;
  }
  //if no one is here, send a different message.
  else {
    return ("There is nobody waiting to be served!")
  }
}





function currentLine(katzDeliLine) {
  //work with a copy of the line
  //Set up abase string that we then add each customer to it as we loop through
  //With the last customer we want to add a string different than the rest.
  //We add to our currentString by saving the last element off the katzDeliLine 
  //If no one is on the line, return a message indicating so
  

  var ourLine = [...katzDeliLine];
  var currentString = "The line is currently:"
  var counter = 0; 
  var final = katzDeliLine.pop();
  
  if(katzDeliLine.length > 0) {
    for (var i = 0; i < ourLine.length-1; i++) {
      currentString += ` ${i+1}. ${ourLine[i]},`;
      counter++
      
    }
    
    currentString += ` ${counter + 1}. ${final}`; 
    return currentString;
  }
    else {
    return "The line is currently empty."
    }
  }
