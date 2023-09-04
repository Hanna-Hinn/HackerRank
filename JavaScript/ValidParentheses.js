const input1 = "()";
const input2 = "()[]{}";
const input3 = "(])";
const input4 = "([)]";
const input5 = "{[]}";

function isValid(input) {
  if (input.length === 0) return true;
  if (input.length === 1) return false;
  if (input.length % 2 !== 0) return false;

  const pairs = {
    "]": "[",
    "}": "{",
    ")": "(",
  };
  let stack = [];
  for (let i = 0; i < input.length; i++) {
    if (pairs[input[i]]) {
      if (pairs[input[i]] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(input[i]);
    }
  }
  return !stack.length;
}

console.log(isValid(input1));
console.log(isValid(input2));
console.log(isValid(input3));
console.log(isValid(input4));
console.log(isValid(input5));
