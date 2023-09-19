module.exports = function check(str, bracketsConfig) {
  //BRD: find any substring(brackets or numb) in sub arrays:
  //1st bracket should be closed -> with bracket in order, all brackets have pair, sub arrays can be in different order:

  //1 '()' in                              [['(', ')']]->true check '(' &')'
  //2 '((()))()' in                        [['(', ')']] ->true as [] has 1st str '(' and last str ')'
  //3 '())(' in                            [['(', ')']] ->false as [] has 1st str only one str '('
  //4 '([{}])' in [['(', ')'], ['[', ']'], ['{', '}']]; ->true
  //5 '([])' in                [['(', ')'], ['[', ']']] ->false as 1st '[' & ')' are not following each other
  //6 '[]()' in                [['(', ')'], ['[', ']']] ->true
  //7 '[]()(' in               [['(', ')'], ['[', ']']] ->false
  //8 '||' in                  [['|', '|']]             ->true
  //9 '|()|' in                [['(', ')'], ['|', '|']] ->true
  //10 '|(|)' in               [['(', ')'], ['|', '|']] ->false
  //11 '|()|(||)||' in         [['(', ')'], ['|', '|']]->true
  //12 '111115611111111222288888822225577877778775555666677777777776622222'
        //in [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']] ->true
  //13 '5555512575557777777555566667888888667661133833448441111222233333444442266666'
        //in [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];-> false


//1. check if str is odd
if(str.length % 2 != 0 || str.length === 0){
  return false;
}

let stack = [];
for (let i = 0; i < str.length; i++) {
  let strBracket = str[i];//getting str[i]
  for (let j = 0; j < bracketsConfig.length; j++) {

    let lastElStack = stack[stack.length - 1];
    //if 1st el of matrix = last el of stack & 2nd (next) el of matrix = 1st str in for loop =>
    if (bracketsConfig[j][0] === lastElStack && bracketsConfig[j][1] === strBracket)  {//remove same brackets
      stack.pop();
    } else if (bracketsConfig[j][0] === strBracket) {//otherwise, add 1st to stack
      stack.push(strBracket);
    }

  }
}

  if (stack.length === 0) {//if stack empty-> all brackets have pair
    return true;
  } else {
    return false;
  }
}