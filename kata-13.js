const talkingCalendar = function(date) {
  let result = "";
  if (date[5] == "0") {
    if (date[6] == "1") {
      result += "January ";
    } else if (date[6] == "2") {
      result += "February ";
    } else if (date[6] == "3") {
      result += "March ";
    } else if (date[6] == "4") {
      result += "April ";
    } else if (date[6] == "5") {
      result += "May ";
    } else if (date[6] == "6") {
      result += "June ";
    } else if (date[6] == "7") {
      result += "July ";
    } else if (date[6] == "8") {
      result += "August ";
    } else if (date[6] == "9") {
      result += "September ";
    }
  } else if (date[5] == "1") {
    if (date[6] == "0") {
      result += "October ";
    } else if (date[6] == "1") {
      result += "November ";
    } else if (date[6] == "2") {
      result += "December ";
    }
  }
  if (date[8] !== "0") {
    result += date[8];
  }
  result += date[9];
  if (date[9] == "1") {
    result += "st, ";
  } else if (date[9] == "2") {
    result += "nd, ";
  } else if (date[9] == "3") {
    result += "rd, ";
  } else if (date[9] == "4" || date[9] == "5" || date[9] == "6" || date[9] == "7" || date[9] == "8" || date[9] == "9" || date[9] == "0") {
    result += "th, ";
  }
  result += date[0] + date[1] + date[2] + date[3];
  return result;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));