

function genarateNumber(){
    const numberMin = Math.ceil(document.querySelector(".input-min").value);
    const numberMax = Math.floor(document.querySelector(".input-max").value);

    const result = Math.floor(Math.random() * (numberMax - numberMin)) + numberMin;
    
    /*Changing HTML */
    document.querySelector(".btn").innerHTML = result + " " + "&#10227;";

    console.log(numberMin, numberMax);
    console.log(result);

}


