function takeANumber(currentLineOfPeople) {
  currentLineOfPeople.push(currentLineOfPeople.length);
  
  return `${currentLineOfPeople.length}`;  
}

function nowServing(currentLineOfPeople) {
  if( currentLineOfPeople.length === 0 ) {
    return `There is nobody waiting to be served!`;
  }
  
  return `Currently serving ${currentLineOfPeople.shift()}.`;
}

function currentLine(currentLineOfPeople) {
  if( currentLineOfPeople.length === 0 ) {
    return `The line is currently empty.`;   
  }
  
  var new_array = [];
  for( var i = 0; i < currentLineOfPeople.length; i++ ) {
    new_array.push(`${i+1}. ${currentLineOfPeople[i]}`);  
  }
  
  return `The line is currently: ${new_array.join(', ')}`;
}