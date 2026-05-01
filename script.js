const fortunes =[
   "大吉💖素敵な出会いがあるかも！",
   "中吉😊少し勇気を出すと良いことが起きる",
   "小吉😐今日はゆっくり過ごそう",
   "凶😢無理せず慎重に行動しよう",
   "大凶💀もうあきらめろ"
];
 
const button = document.getElementById("yosihide");
const result = document.getElementById("ryousyuu");

button .addEventListener("click",function(){
    const randomNumber = Math.floor(Math.random() * fortunes.length);
    const resultText  =  fortunes[(randomNumber)];

    result.textContent = fortunes[(randomNumber)];

    if(resultText.includes("大吉")){
        result.style.color = "red";
    }
    if(resultText.includes("中吉")){
        result.style.color = "magenta";
    }
    if(resultText.includes("小吉")){
        result.style.color = "pink";
    }
    if(resultText.includes("凶")){
        result.style.color = "Purple";
    }
    if(resultText.includes("大凶")){
        result.style.color = "black";
    }
})
