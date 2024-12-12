let typePaper = {
    "Выберите бумагу": 0,
    "Мелованная бумага": 6.8,
    "Бумага повышенной белизны": 40.5,
    "Prestige Лён": 45,
};

let typeColor = {
    "Выберите цветность": {print: 0, file: 0},
    "Односторонняя чёрно-белая": {print: 14, file: 110},
    "Двусторонняя чёрно-белая": {print: 28, file: 220},
    "Односторонняя цветная": {print: 37, file: 110},
    "Цветная с лицевой, ч/б с оборотной": {print: 51, file: 220},
    "Двусторонняя цветная": {print: 74, file: 220},
}

function insertOptions(list, parent) {
    let html = "";
    for (type in list) {
        html += '<option value="' + type + '">' + type + "</option>";
    }
    getById(parent).innerHTML = html;
}

function calculate(){
    let tirSize = getById("card-quantity").value/30;
    let pricePaper = typePaper[getById("card-paper").value] * tirSize;
    let colorForm = getById("card-color").value;
    let priceForm = typeColor[colorForm]["file"];
    let pricePrint = typeColor[colorForm]["print"] * tirSize;
    
    let sum = pricePaper + priceForm + pricePrint;
    getById("final-price").textContent = sum;
}

getById("card-color").addEventListener('change', function(){
    let selectedValue = this.selectedIndex;
    
    document.querySelectorAll('img[id^="card-"]').forEach(function(image){
        image.style.display = 'none';
    });

    if (selectedValue > 0) {
        getById('card-' + selectedValue).style.display = 'block';
    }
});

getById("calc").addEventListener('change', function(){
    calculate();
}); 

document.addEventListener("DOMContentLoaded", function() {
    insertOptions(typePaper, "card-paper");
    insertOptions(typeColor, "card-color");
});

function getById(id){
    return document.getElementById(id);
}