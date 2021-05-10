const organizeInstructors = function(instructors) {
  const finalObject = {};
  for (let instructor of instructors) {
    if (finalObject[instructor.course] == undefined) {
      finalObject[instructor.course] = [instructor.name];
    } else {
      finalObject[instructor.course].push(instructor.name);
    }
  }
  return finalObject;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));