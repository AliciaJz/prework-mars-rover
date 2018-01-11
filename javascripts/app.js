// Rover Object Goes Here
// ======================
rover = {
  direction: "N",
  position:(x,y),
}

// ======================

function turnLeft(rover){
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

function turnRight(rover){
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

function moveForward(rover){

  console.log("moveForward was called")
  console.log("You are still facing " + rover.direction);
  console.log("Your position is " + rover.position);
}

function moveBackward(rover){
  console.log("moveBackward was called")
  console.log("You are still facing " + rover.direction);
  console.log("Your position is " + rover.position);
}
