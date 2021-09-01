function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function isPalindome(word){
  let newbie = word.split("").reverse().join('');
  if(newbie === word){
    return true;
  }
  return false;
}

function getCircumference(radius){
  return `The circumference is ${2 * Math.PI * radius}`;

}

function getArea(radius) {
  return `The area is ${Math.PI * radius * radius}`
}

module.exports = { 
  getFullName,
  isPalindome,
  getCircumference,
  getArea,
};

