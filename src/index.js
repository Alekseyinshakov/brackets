module.exports = function check(str, bracketsConfig) {


  let configObj = {};
  let stack = []
  for (let i = 0; i < bracketsConfig.length; i++) {
    configObj[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  for (let i = 0; i < str.length; i++) {
    const currentBr = str[i];
    if (stack[stack.length - 1] === currentBr && configObj[currentBr] === currentBr) {
      stack.pop();
      continue;
    }
    if (Object.values(configObj).includes(currentBr)) {
      stack.push(currentBr)
    } else if (stack.length > 0 && configObj[currentBr] === stack[stack.length - 1]) {
      stack.pop()
    } else if (stack.length === 0 && currentBr in configObj) {
      return false
    } else {
      return false
    }
    console.log(stack);
  }

  if (stack.length > 0) {
    return false;
  } else {
    return true;
  }
}




