function convertToFahrenheit() {
    userValue = document.getElementById("temp-converter-temp").value;
    userValue = (userValue * 9/5) + 32;
    conversionOutput = document.getElementById("convert-result");
    conversionOutput.innerHTML=(`${userValue}`);
    const thermometerStyle = document.getElementById("thermometer");
        thermometerStyle.classList.remove("thermometer-hot");
        thermometerStyle.classList.remove("thermometer-hottest");
        thermometerStyle.classList.remove("thermometer-mid");
        if(userValue>70 && userValue < 100) {
            thermometerStyle.classList.remove("thermometer-hot");
            thermometerStyle.classList.add("thermometer-hot");
            
        }
        else if (userValue > 100) {
            thermometerStyle.classList.remove("thermometer-hottest");
            thermometerStyle.classList.add("thermometer-hottest");
            
        }        
        else if (userValue <= 70 ) {
            thermometerStyle.classList.remove("thermometer-mid");
            thermometerStyle.classList.add("thermometer-mid");
            
        }
    
}

function convertToCelsius() {
    userValue = document.getElementById("temp-converter-temp").value;
    userValue = (userValue - 32) * 5/9;
    conversionOutput = document.getElementById("convert-result")
    conversionOutput.innerHTML=(`${userValue}`)
}

function conversionTable() {
    celsiusInsert = document.getElementById("conversionTable");
    fahrenheitInsert = document.getElementById("conversionTable");
    for(i=0; i<110; i+=10) {
        celsius = i;
        fahrenheit = (i * 9/5 + 32);
        fahrenheitInsert.innerHTML+= 
        `<tr>
        <td>${celsius}</td>
        <td>${fahrenheit}</td>
        </tr>`;
        
    }
}