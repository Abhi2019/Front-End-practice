
var generateParenthesis = function(n) {
    let stack =  {
      items: [],
      pop : function(){
        this.items.pop();
      },
      main: []
    }

    const backtrackparenthesis = (openN, closeN)=>{
        if(closeN ===openN && openN ===n) {
          return stack.main.push(stack.items.join(""));
        }
        if(openN < n) {
          stack.items.push('(');
          backtrackparenthesis(openN+1, closeN);
          stack.pop();
        }
        if(closeN< openN) {
          stack.items.push(')');
          backtrackparenthesis(openN, closeN+1);
          stack.pop();
        }
    }
    backtrackparenthesis(0,0);
    return  stack.main;
};

console.log(generateParenthesis(3));