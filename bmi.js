document.getElementById("submit").addEventListener("click",bmiCalculator);
function bmiCalculator(){
    var cm = parseInt(document.getElementById("cm").value);
    var kg = parseFloat(document.getElementById("kg").value);
    var bmi;
    var newCm = parseFloat(cm/100);

    bmi = kg/(newCm * newCm);
    bmi = bmi.toFixed(1);
    console.log(bmi);

    if(bmi<18.6){
        document.getElementById("result").innerHTML = bmi+"\t[Under weight]";
    }
    else if(bmi>=18.6 && bmi<=24.9){
        document.getElementById("result").innerHTML = bmi+"\t[Normal]";
    }
    else{
        document.getElementById("result").innerHTML = bmi+"\t[Over weight]";
    }

}