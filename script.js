const fortunes =[
   "大吉💖素敵な出会いがあるかも！",
   "中吉😊少し勇気を出すと良いことが起きる",
   "小吉😐今日はゆっくり過ごそう",
   "凶😢無理せず慎重に行動しよう",
   "大凶💀もうあきらめろ"
];
 
const button = document.getElementById("yosihide");
const result = document.getElementById("ryousyuu");
const advice = document.getElementById("advice");

button .addEventListener("click",function(){
    const randomNumber = Math.floor(Math.random() * fortunes.length);
    const resultText  =  fortunes[(randomNumber)];

    result.textContent = fortunes[(randomNumber)];

    if(resultText.includes("大吉")){
        result.style.color = "red";
        advice.textContent = "よかったね👏"
    }
    if(resultText.includes("中吉")){
        result.style.color = "magenta";
        advice.textContent = "いっちゃん微妙な運やね"
    }
    if(resultText.includes("小吉")){
        result.style.color = "pink";
        advice.textContent = "正直、あってないような運よね"
    }
    if(resultText.includes("凶")){
        result.style.color = "Purple";
        advice.textContent = "こんなところで厄使えてよかったね"
    }
    if(resultText.includes("大凶")){
        result.style.color = "black";
        advice.textContent = "これ当てたなら逆に運いいんじゃない？"
    }
})
