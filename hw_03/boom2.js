var min = 1;
var max = 100;
var boom = 83;

alert("嗨ㄏㄏ，來玩終極密碼吧！");
var input = prompt("請輸入一個" + min + "-" + max + "的整數數字，但只給你3次機會哦！");
//1st-judging
if (input == boom) {
    //1st-bingo
    alert("哇你猜對了耶！");
    //1st-goWrong
} else {
    alert("猜錯摟！");
    //1st-comparing-small
    if (input < boom){
    var min = input;
    var input = prompt("請輸入一個" + min + "-" + max + "的整數數字，你剩下2次機會哦！");

    //2nd-judging
    if (input == boom){
    //2nd-bingo
    alert("哇你猜對了耶！");
    //2nd-goWrong
    } else{
        alert("猜錯摟！");
        //2nd-comparing-small
        if (input < boom){
            var min = input;
            var input = prompt("請輸入一個" + min + "-" + max + "的整數數字，你剩下1次機會哦！");

            //3rd-judging
            if (input == boom){
            //3rd-bingo
            alert("哇你猜對了耶！");
            //3rd-goWrong
            } else {
                alert("猜錯摟！");
                alert("哇你怎麼猜的啊！猜3次都猜不到！");
            }
        }
    }


    } else {
        //1st-comparing-bigger
        var max = input;
        var input = prompt("請輸入一個" + min + "-" + max + "的整數數字，你剩下2次機會哦！");
        
        //2nd-judging
        if (input ==boom){
        //2nd-bingo
        alert("哇你猜對了耶！");
        //2nd-goWrong
        } else {
            alert("猜錯摟！");
            //2nd-comparing-bigger
            var max = input;
            var input = prompt("請輸入一個" + min + "-" + max + "的整數數字，你剩下1次機會哦！");

            //3rd-judging
            if (input == boom){
             //3rd-bingo
            alert("哇你猜對了耶！");
            //3rd-goWrong
            } else {
                alert("猜錯摟！");
                alert("哇你怎麼猜的啊！猜3次都猜不到！");
            }
        }
    }
}