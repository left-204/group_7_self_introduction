// おみくじの結果リスト
var omikujiList = [
    "大吉",
    "中吉",
    "小吉",
    "吉",
    "凶"
  ];
  
  // ボタンクリック時の処理
  function omikuji() {
    var result = document.getElementById("result");
    var randomIndex = Math.floor(Math.random() * omikujiList.length);
    var fortune = omikujiList[randomIndex];
    result.innerHTML = "今日の運勢は「" + fortune + "」です！";
  }
  