// Rover Object Goes Here
rover = {
  direction: "N",
  x: 0,
  y: 0,
};

// Turn Left
function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }

  console.log("turnLeft was called!");
  console.log("You are now facing " + rover.direction);

}

// Turn Right
function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }

  console.log("turnRight was called!");
  console.log("You are now facing " + rover.direction);

}


// Move Forward
function moveForward(rover) {
if (rover.direction === "N") {
  rover.y -= 1;
}
else if (rover.direction === "W") {
  rover.x -= 1;
}
else if (rover.direction === "S") {
  rover.y += 1;
}
else if (rover.direction === "E") {
  rover.x += 1;
}
else {
  console.log("The Rover is in the same place")
}

  console.log("moveForward was called")
  console.log("You are still facing " + rover.direction);
  rover.position =
  console.log("And your new position is: " + "(" + rover.x + "," + rover.y + ")");
}

// Move Backward
function moveBackward(rover) {
  if (rover.direction === "N") {
    rover.y += 1;
  }
  else if (rover.direction === "W") {
    rover.x += 1;
  }
  else if (rover.direction === "S") {
    rover.y -= 1;
  }
  else if (rover.direction === "E") {
    rover.x -= 1;
  }
  else {
    console.log("The Rover is in the same place")
  }

  console.log("moveBackward was called")
  console.log("You are still facing " + rover.direction);
  console.log("And your new position is: " + "(" + rover.x + "," + rover.y + ")");
}
