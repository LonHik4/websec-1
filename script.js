function buttonClickHandler(){
    var value1 = document.getElementById("number1").value;
    var value2 = document.getElementById("number2").value;
    if (!isNaN(parseFloat(value1)) && isFinite(value1) && !isNaN(parseFloat(value2)) && isFinite(value2))
    {
        if (document.getElementById("select1").value == "add"){
            let result = parseFloat(value1) + parseFloat(value2);
            document.getElementById("results").innerText= result;
        }
    
        if (document.getElementById("select1").value == "sub"){
            let result = parseFloat(value1) - parseFloat(value2);
            document.getElementById("results").innerText= result;
        }
        
        if (document.getElementById("select1").value == "mult"){
            let result = parseFloat(value1) * parseFloat(value2);
            document.getElementById("results").innerText= result;
        }
    
        
        if (document.getElementById("select1").value == "div"){
            let result = parseFloat(value1) / parseFloat(value2);
            document.getElementById("results").innerText= result;
        }
    }
    else{
        let result = "you didn't enter a number";
        document.getElementById("results").innerText= result;
    }
    
}