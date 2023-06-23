let color_flg = true;
let original = document.body.style.backgroundColor;
function change_background(){
    if (color_flg == true){  
        //console.log("test");
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        color_flg = false;
    }else{
        document.body.style.backgroundColor = original;
        document.body.style.color = "black";
        color_flg = true;
        }
    }