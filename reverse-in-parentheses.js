function solution(inputString) {
  // console.log("before for-", inputString);

  if (!inputString.includes("(")) {
    // console.log("no tiene parentesis-", inputString);
    return inputString;
  }

  let openParenthesisIndexArray = [];
  let closedParenthesisIndex = 0;

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === "(") {
      openParenthesisIndexArray.push(i);
    }

    if (inputString[i] === ")") {
      closedParenthesisIndex = i;

      let betweenParenthesis = inputString.substring(
        openParenthesisIndexArray[openParenthesisIndexArray.length - 1] + 1,
        closedParenthesisIndex
      );
      // console.log("betweenParenthesis-", betweenParenthesis);

      const reversedString = betweenParenthesis.split("").reverse().join("");
      // console.log("reversedString-", reversedString);
      const originalSubstring = inputString.substring(
        openParenthesisIndexArray[openParenthesisIndexArray.length - 1] + 1,
        closedParenthesisIndex
      );
      // console.log("originalSubstring-", originalSubstring);
      const returnedString = inputString.replace(
        originalSubstring,
        reversedString
      );
      openParenthesisIndexArray.pop();
      inputString = returnedString;
    }
  }
  let replace = inputString.replaceAll("(", "").replaceAll(")", "");
  inputString = replace;
  // console.log("string cambiado-", inputString);
  // console.log("replace", replace);
  return inputString;
}

const input1 = "probando";

const input2 = "pro(ban)do";

const input3 = "(bar)";
//the output should be = "rab"
const input4 = "foo(bar)baz";
//the output should be = "foorabbaz";
const input5 = "foo(bar)baz(blim)";
//the output should be = "foorabbazmilb";
const input6 = "foo(bar(baz))blim";
//the output should be = "foobazrabblim".
//Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

const input7 = "foo(bar(baz(can)))blim";
//the output should be = "foonacbazrabblim".

solution(input7);
