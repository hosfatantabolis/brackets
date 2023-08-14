module.exports = function check(str, bracketsConfig) {
 const openingBrackets = [];
 const closingBrackets = [];
 const equals = [];
 const stack = [];

 bracketsConfig.forEach((item) => {
   if (item[0] !== item[1]) {
     openingBrackets.push(item[0]);
     closingBrackets.push(item[1]);
   } else {
     equals.push(item[0]);
   }
 });

 str.split('').forEach((item) => {
   if (equals.includes(item)) {
     if (stack[stack.length - 1] === item) {
       stack.pop();
     } else stack.push(item);
   } else if (closingBrackets.includes(item)) {
     if (
       stack[stack.length - 1] ===
       openingBrackets[closingBrackets.indexOf(item)]
     ) {
       stack.pop();
     } else stack.push(item);
   } else if (openingBrackets.includes(item)) {
     stack.push(item);
   }
 });

 return stack.length === 0;
}

