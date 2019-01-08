var ticketNumber = 0;

function takeANumber(currentLineOfPeople) {
  ticketNumber += 1;
  
  currentLineOfPeople.push(ticketNumber);
  
  return ticketNumber;  
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
  
  return `The line is currently: ${currentLineOfPeople.join(', ')}`;
}