const urlDecode = function(text) {
  finalObject = {};
  let keyValuePairs = text.split("&");    //separate text into key value pairs
  for (pair of keyValuePairs) {
    const spaceReplaced = pair.replace(/%20/g, " ");   // replace %20 with space
    const keyValue = spaceReplaced.split("=");     // separate keys and values
    finalObject[keyValue[0]] = keyValue[1];
  }
  return finalObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);