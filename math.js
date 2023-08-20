let serialNum = 1;
let totalPrice = 0;

function handleClickBtn(masum){
    const selectItemList = document.getElementById("selected-items");
    const itemName = masum.parentNode.childNodes[1].innerText;
    const p = document.createElement("p");
    p.innerText = `${serialNum}.  ${itemName}`;
    serialNum++;
    selectItemList.appendChild(p);

    const price = masum.parentNode.parentNode.childNodes[7].innerText.split(' ')[0];
    totalPrice = parseFloat(totalPrice) + parseFloat(price);
    totalPrice = totalPrice.toFixed(2);
    
    const firstTotalPrice = document.getElementById('total-price').innerText=totalPrice;
    
    
    const buyButton = document.getElementById("buy-button");
    if (totalPrice > 0) {
        buyButton.removeAttribute("disabled");
        buyButton.style.backgroundColor = "#E526B2"; 
    } else {
        buyButton.setAttribute("disabled", "true");
        buyButton.style.backgroundColor = "#888888";
    }

    const couponButton = document.getElementById("coupon-button");
    if (totalPrice > 199) {
        couponButton.removeAttribute("disabled");
        couponButton.style.backgroundColor = "#E526B2"; 
        couponButton.style.borderColor = "#E526B2]"; 
    } else {
        couponButton.setAttribute("disabled", "true");
        couponButton.style.backgroundColor = "#888888";
    }

    
}

function applyCoupon() {
    const couponCode = document.getElementById("coupon-field").value;
    const discountAmount = document.getElementById("discount-amount");
    
    if (couponCode === "SELL200" && totalPrice > 199) {
        const discount = (totalPrice * 0.20).toFixed(2);
        discountAmount.innerText = discount;
    } else {
        alert('Use a valid COUPON')
        
    }
}
