function solution(a, b) {
  if (a == b) return true;

  let oneChange = false;
  let differentValueA = 0;
  let differentValueB = 0;

  for (let i = 0; i < a.length; i++) {
    // if (a[i] !== b[i] && oneChange) {
    //   console.log(false, 1);
    //   return false;
    // }
    if (a[i] !== b[i]) {
      if (oneChange) {
        return false;
      } else {
        if (differentValueA === 0) {
          differentValueA = a[i];
          differentValueB = b[i];
        } else {
          if (differentValueA === b[i] && differentValueB === a[i]) {
            oneChange = true;
          } else {
            return false;
          }
        }
      }
    }
  }

  //   console.log(true, 4);
  return true;
}

//   let indexOfChange = 0;

//   for (let i = 0; i < a.length; i++) {
//     console.log(a[i], b[i]);
//     if (oneChange && indexOfChange === i) {
//       console.log("continue");
//       continue;
//     }

//     if (a[i] !== b[i] && oneChange) {
//       console.log(false, 1);
//       return false;
//     }
//     if (a[i] !== b[i] && !oneChange) {
//       indexOfChange = b.indexOf(a[i], i);
//       console.log("indexOfChange", indexOfChange);

//       if (indexOfChange === -1) {
//         console.log(false, 2);
//         return false;
//       }

//       if (a[indexOfChange] === b[i]) {
//         oneChange = true;
//       } else {
//         console.log(false, 3);
//         return false;
//       }
//     }
//   }

const a = [1, 2, 1, 2];
const b = [2, 2, 1, 1];
const c = [2, 1, 3];
const d = [1, 2, 2];
const e = [2, 1, 1];

solution(a, b);
