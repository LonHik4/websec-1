
function buttonClickHandler(){
    var value1 = document.getElementById("number1").value;
    var value2 = document.getElementById("number2").value;
    var select = document.getElementById("select1").value;
	if (value1==="" || value2===""){
        alert('Внимание!\nВведите оба числа!');
        return;
    }else{
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
			if (value2 === "0") {
                alert("Внимание!\nНа ноль делить нельзя")
            }else{
				result = parseFloat(value1) / parseFloat(value2);
			}
        }
        document.getElementById("results").innerText= result;
	}
}
