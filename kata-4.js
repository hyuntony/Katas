const instructorWithLongestName = function(instructors) {
  let object;                                                //variable for longest named object
  let letterCount = 0;
  for (let i = 0; i < instructors.length; i++) {             //loop array
    if (instructors[i].name.length > letterCount) {
      letterCount = instructors[i].name.length;              // saving longest letter count
      object = instructors[i];  
    }
  }
  return object;
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));