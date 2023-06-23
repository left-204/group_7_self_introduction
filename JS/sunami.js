//ボタン要素を取得
let switchBtn = document.getElementsByTagName('a')[0];
//表示・非表示を切り替える要素を取得
let box = document.getElementById('img');

//styleのdisplayを変更する関数
let changeElement = (el)=> {

  if(el.style.display==''){
    el.style.display='none';
  }else{
    el.style.display='';
  }

}

//上記関数をボタンクリック時に実行
switchBtn.addEventListener('click', ()=> {
  changeElement(box);
}, false);