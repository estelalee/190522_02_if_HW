var min = 1;
var max = 100;
var boom = 83;

alert("嗨ㄏㄏ，來玩終極密碼吧！");
var input = prompt("請輸入一個" + min + "-" + max + "的整數數字，但只給你3次機會哦！");

if (input == boom) {
    alert("哇你猜對了耶！");
} else {
    alert("猜錯摟！");
    if (input < boom) {
        var min = input;
        var input = prompt("請輸入一個" + min + "-" + max + "的整數數字，你剩下2次機會哦！");
        if (input == boom) {
            alert("哇你猜對了耶！");
        } else {
            if (input < boom) {
                var min = input;
                var input = prompt("請輸入一個" + min + "-" + max + "的整數數字，你剩下1次機會哦！");
                if (input == boom) {
                    alert("哇你猜對了耶！");
                } else {
                    alert("猜錯摟！");
                    alert("哇你怎麼猜的啊！猜3次都猜不到！");
                }

    } else {
        var max = input;
        var input = prompt("請輸入一個" + min + "-" + max + "的整數數字，你剩下2次機會哦！");
        if (input == boom) {
            alert("哇你猜對了耶！");
        } else {
            if (input > boom) {
            var max = input;
            var input = prompt("請輸入一個" + min + "-" + max + "的整數數字，你剩下1次機會哦！");
            if (input == boom) {
                alert("哇你猜對了耶！");
            } else {
                var min = input;
                var input = prompt("請輸入一個" + min + "-" + max + "的整數數字，你剩下1次機會哦！");
                if (input == boom) {
                    alert("哇你猜對了耶！");
                } else {
                    alert("猜錯摟！");
                    alert("哇你怎麼猜的啊！猜3次都猜不到！");
                        }
                    }
                }

            }
        }
    }
}
}