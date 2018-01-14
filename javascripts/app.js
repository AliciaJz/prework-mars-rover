// Rover Object Goes Here
rover = {
  direction: 'N',
  position: {
    x: 0,
    y: 0,
  },
};

var travelLog = [rover.position];

// Turn Left
function turnLeft(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
  }

  console.log('turnLeft was called!');
  console.log('You are now facing ' + rover.direction);

}

// Turn Right
function turnRight(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }

  console.log('turnRight was called!');
  console.log('You are now facing ' + rover.direction);
}

// Move Forward
function moveForward(rover) {
  if (rover.direction === 'N' && rover.position.y <= 9) {
    rover.position.y -= 1;
    travelLog.push(rover.position);
  } else if (rover.direction === 'W' && rover.position.x <= 9) {
    rover.position.x -= 1;
    travelLog.push(rover.position);
  } else if (rover.direction === 'S' && rover.position.y <= 9) {
    rover.position.y += 1;
    travelLog.push(rover.position);
  } else if (rover.direction === 'E' && rover.position.x <= 9) {
    rover.position.x += 1;
    travelLog.push(rover.position);
  }

  console.log('moveForward was called');
  console.log('You are still facing ' + rover.direction);
  console.log('And your new position is: ' + '(' + rover.position.x + ',' + rover.position.y + ')');

}

// Move Backward
function moveBackward(rover) {
  if (rover.direction === 'N' && rover.position.y <= 9) {
    rover.position.y += 1;
    travelLog.push(rover.position);
  } else if (rover.direction === 'W' && rover.position.x <= 9) {
    rover.position.x += 1;
    travelLog.push(rover.position);
  } else if (rover.direction === 'S' && rover.position.y <= 9) {
    rover.position.y -= 1;
    travelLog.push(rover.position);
  } else if (rover.direction === 'E' && rover.position.x <= 9) {
    rover.position.x -= 1;
    travelLog.push(rover.position);
  }

  console.log('moveBackward was called');
  console.log('You are still facing ' + rover.direction);
  console.log('And your new position is: ' + '(' + rover.position.x + ',' + rover.position.y + ')');

}

// COMMANDS

function commands() {
  var commands = 'rffrff';

  var aCommand = commands.split('');

  for (var i = 0; i < aCommand.length; i++) {
    if (aCommand[i] === 'f') {
      moveForward(rover);
    } else if (aCommand[i] === 'b') {
      moveBackward(rover);
    } else if (aCommand[i] === 'l') {
      turnLeft(rover);
    } else if (aCommand[i] === 'r') {
      turnRight(rover);
    }
  }
}

commands();
