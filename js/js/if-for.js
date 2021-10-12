'use strict'
//let i = 1;
//if (i === 1) {
//  console.log("真です");
//}
function scoreCheck () {
  let testScore = document.getElementById('score').value;
  if (testScore >= 80) {
    document.write("合格です！おめでとうございます！");
  } else if(testScore >= 70) {
      document.write("惜しい！あと少し！");
  } else {
        document.write("不合格です！もう少し勉強しましょう！");
      } 
}

 

/* for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
} */

/*for (let i = 1; i<1000; i++) {
if(i > 10) break;
console.log(i);
}*/