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
    userValue = (userValue - 32 ) * 5/9;
    conversionOutput = document.getElementById("convert-result");
    conversionOutput.innerHTML=(`${userValue.toFixed(2)}`);
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


function conversionTable() {
        let fahrenheitInsert = document.getElementById("conversionTable");
        fahrenheitInsert.style.display = "block"
        if (fahrenheitInsert.innerHTML !== "") {
        fahrenheitInsert.innerHTML = "";
        return
    }
        fahrenheitInsert.innerHTML = `<tr>
        <th>Celsius</th>
        <th>Fahrenheit</th>
        </tr>`;
    
    
        for(i=0; i<110; i+=10) {
        let celsius = i;
        let fahrenheit = (i * 9/5 + 32);
        fahrenheitInsert.innerHTML += 
        `<tr>
        <td>${celsius}</td>
        <td>${fahrenheit}</td>
        </tr>`;
        
    }
}

function closeTable() {
    console.log("Close Table Function");
    const table = document.getElementById("conversionTable")
    table.style.display = "none"
    //table.style.display="table"
}