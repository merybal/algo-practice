function solution(picture) {
  let borderedMatrix = [];
  const elementLength = picture[0].length;
  let emptyBorder = "";
  let border = emptyBorder.padStart(elementLength + 2, "*");
  borderedMatrix.push(border);

  for (let i = 0; i < picture.length; i++) {
    // const element = picture[i]
    //   .padStart(elementLength + 1, "*")
    //   .padEnd(elementLength + 2, "*");
    const element = "*" + picture[i] + "*";
    borderedMatrix.push(element);
  }
  borderedMatrix.push(border);

  console.log(borderedMatrix);
  return borderedMatrix;
}

const picture = ["abc", "ded"];

solution(picture);
