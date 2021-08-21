/* ---------------------------
      memory function 
--------------------------*/
function addMemory(memorySize) {

    let memoryPriceText = document.getElementById("memory-price");
    memoryPrice = parseInt(memoryPriceText.innerText);
    if (memorySize == "normal") {
        memoryPriceText.innerText = 0;
    }
    else {
        memoryPriceText.innerText = 180;
    }

    totalPrice()
}
/* ---------------------
     storage function
------------------------ */
function addStorage(storageSize) {
    let storagePriceText = document.getElementById("SSD-price");
    storagePrice = parseInt(storagePriceText.innerText);
    if (storageSize == "256-SSD") {
        storagePriceText.innerText = 0;
    }
    else if (storageSize == "512-SSD") {
        storagePriceText.innerText = 100;
    }
    else {
        storagePriceText.innerText = 180;
    }

    totalPrice()
}
/* --------------------------- 
   deliveryCost function
--------------------------- */

function addDeliveryCost(deliverycost) {
    let deliveryPriceText = document.getElementById("delivery-price");
    deliveryPrice = parseInt(deliveryPriceText.innerText);
    if (deliverycost == "free") {
        deliveryPriceText.innerText = 0;
    }
    else {
        deliveryPriceText.innerText = 20;
    }

    totalPrice()
}
/* ---------------------
   total calculation 
-------------------*/

function totalPrice() {
    let memoryPriceText = document.getElementById('memory-price');
    memoryPrice = parseInt(memoryPriceText.innerText);


    let storagePriceText = document.getElementById('SSD-price').innerText;
    // storagePrice = storagePriceText.innertext;


    let deliveryCostText = document.getElementById("delivery-price");
    deliveryCost = parseInt(deliveryCostText.innerText);
    let totalPrices = document.getElementById('Total-price');
    totalPrices.innerText = 1299 + memoryPrice + parseInt(storagePriceText) + deliveryCost;
    let finalTotal = document.getElementById("final-price");
    let finalTotalText = finalTotal.innerText
    finalTotal.innerText = totalPrices.innerText;
    let returnValue = totalPrices.innerText;


    return returnValue;

}





/* --------------
      memory 
---------------*/


/*----- normal memory ----*/
document.getElementById('for-8GB-Memory').addEventListener('click', function () {
    addMemory("normal")


})
/* --------for Extra 16GB memory-----*/
document.getElementById('for-16GB-Memory').addEventListener('click', function () {

    addMemory("16GB")

})

/* -------------
    Storage
-------------*/
/* ----------------for-256-SSD---------- */
document.getElementById('for-256-SSD').addEventListener('click', function () {
    addStorage("256-SSD")

})
/*----------------- for-512-SSD-------------- */
document.getElementById('for-512-SSD').addEventListener('click', function () {
    addStorage("512-SSD")

})

/*---------------- for-1TB-SSD---------------- */
document.getElementById('for-1TB-SSD').addEventListener('click', function () {
    addStorage("1TB-SSD")

})

/*------------------------- 
      Delivery option
----------------------- */
document.getElementById('free-shipping').addEventListener('click', function () {
    addDeliveryCost("free")

})

document.getElementById('shipping-charge').addEventListener('click', function () {
    addDeliveryCost("cost")



})


/* ----------------
    bonus part
--------------- */

document.getElementById("apply-button").addEventListener("click", function () {
    const inputtext = document.getElementById("secret-code");
    const secretCode = inputtext.value;
    if (secretCode == "stevekaku") {
        /* -----get the totalPrice--- */
        let secret = totalPrice();
        /* ------------ 20% discount------------ */
        let discount = parseInt(secret) * 20 / 100;

        let finalPrice = parseInt(secret) - discount;
        let finalDiscountPrice = document.getElementById("final-price");
        finalDiscountPrice.innerText = finalPrice;
        inputtext.value = "";
    }
})

