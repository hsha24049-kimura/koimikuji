const fortunes =[
   "大吉💖素敵な出会いがあるかも！",
   "中吉😊少し勇気を出すと良いことが起きる",
   "小吉😐今日はゆっくり過ごそう",
   "凶😢無理せず慎重に行動しよう",
   "大凶💀もうあきらめろ"
];
 
const button = document.getElementById("yosihide");
const omikujiImg = document.getElementById("araya");
const result = document.getElementById("ryousyuu");
const advice = document.getElementById("advice");

omikujiImg.innerHTML ="<img src='happying.png'>"

button .addEventListener("click",function(){
    const randomNumber = Math.floor(Math.random() * fortunes.length);
    const resultText  =  fortunes[(randomNumber)];

    result.textContent = fortunes[(randomNumber)];

    if(resultText.includes("大吉")){
        result.style.color = "red";
        advice.textContent = "よかったね👏"
        omikujiImg.innerHTML ="<img src='daikiti.png'>"
    }
    if(resultText.includes("中吉")){
        result.style.color = "magenta";
        advice.textContent = "いっちゃん微妙な運やね"
        omikujiImg.innerHTML ="<img src='tyuukiti.png'>"
    }
    if(resultText.includes("末吉")){
        result.style.color = "pink";
        advice.textContent = "正直、あってないような運よね"
        omikujiImg.innerHTML ="<img src='suekiti.png'>"
    }
    if(resultText.includes("凶")){
        result.style.color = "Purple";
        advice.textContent = "こんなところで厄使えてよかったね"
        omikujiImg.innerHTML ="<img src='kyou.png'>"
    }
    if(resultText.includes("大凶")){
        result.style.color = "black";
        advice.textContent = "これ当てたなら逆に運いいんじゃない？"
        omikujiImg.innerHTML ="<img src='daikyou.png'>"
    }
})
