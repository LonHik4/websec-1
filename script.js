
function buttonClickHandler(){
    var value1 = document.getElementById("number1").value;
    var value2 = document.getElementById("number2").value;
    var select = document.getElementById("select1").value;
    var result=0.0;
        if (select == "add" ){
            result = parseFloat(value1) + parseFloat(value2);
            //document.getElementById("results").innerText= result;
        }
        if (select == "sub"){
            result = parseFloat(value1) - parseFloat(value2);
        }
        if (select == "mult"){
            result = parseFloat(value1) * parseFloat(value2);
        }
        if (select == "div"){
            result = parseFloat(value1) / parseFloat(value2);
        }
        document.getElementById("results").innerText= result;
}
