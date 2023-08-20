let serialNum = 1;

function handleClickBtn(masum){
    const selectItemList = document.getElementById("selected-items");
    const itemName = masum.parentNode.childNodes[1].innerText;
    const p = document.createElement("p");
    p.innerText = `${serialNum}-  ${itemName}`;
    serialNum++;
    
    selectItemList.appendChild(p)
}