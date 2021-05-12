const blocksAway = function(directions) {
  finalObject = {};
  currentDirection = "start";
  currentLocation = [0, 0];
  for (let i = 0; i < directions.length; i++) {
    if (i === 0) {
      if (directions[i] == "left") {
        currentDirection = "north";
      } else if (directions[i] == "right") {
        currentDirection = "east";
      } 
    } else if (directions[i] == "left") {
      if (currentDirection == "north") {
        currentDirection = "west";
      } else if (currentDirection == "east") {
        currentDirection = "north";
      } else if (currentDirection == "south") {
        currentDirection = "east";
      } else if (currentDirection == "west") {
        currentDirection = "south";
      }
    } else if (directions[i] == "right") {
      if (currentDirection == "north") {
        currentDirection = "east";
      } else if (currentDirection == "east") {
        currentDirection = "south";
      } else if (currentDirection == "south") {
        currentDirection = "west";
      } else if (currentDirection == "west") {
        currentDirection = "north";
      }
    }
    if (typeof(directions[i]) == "number") {
      if (currentDirection == "north") {
        currentLocation[1] += directions[i];
      } else if (currentDirection == "south") {
        currentLocation[1] -= directions[i];
      } else if (currentDirection == "east") {
        currentLocation[0] += directions[i];
      } else if (currentDirection == "west") {
        currentLocation[0] -= directions[i];
      }
    }
  }
  if (currentLocation[0] >= 0) {
    finalObject.east = currentLocation[0];
  } else if (currentLocation[0] < 0) {
    finalObject.west = Math.abs(currentLocation[0]);
  }
  if (currentLocation[1] >= 0) {
    finalObject.north = currentLocation[1];
  } else if (currentLocation[1] < 0) {
    finalObject.south = Math.abs(currentLocation[1]);
  }
  return finalObject;
}

console.log(blocksAway(["right", 2, "left", 3, "left", 4]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));