//window.onload = function()
window.addEventListener("load", function()
{
    var btnPrint = document.getElementById("btn-print");

    var add = function(x, y)
    {
        return x + y;
    }

    btnPrint.onclick = function()   // 익명함수
    {
        // 익명함수로 안에 넣으니까 한번만 선언하면 됨
        //var btnPrint = document.getElementById("btn-print");

        var x = prompt("x 값을 입력하세요", 0);
        var y = prompt("y 값을 입력하세요", 0);

        x = parseInt(x);
        y = parseInt(y);
        btnPrint.value = x + y;
    };
});

//window.onload = init; 이것도 익명함수로 변경