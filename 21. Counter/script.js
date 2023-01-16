const countHTML = document.querySelector(".count"),
countBtn = document.querySelector(".countBtn");

let count = 0;
countHTML.innerHTML = "000" + count;

const incrementCount = () => {
    let countStr = count;
    count += 1;
    if(count > -1 && count < 10){
        countStr = "000" + count;
    } else if(count > 9 && count < 99) {
        countStr = "00" + count;
    }else if(count > 99 && count < 999) {
        countStr = "0" + count;
    }
    countHTML.innerHTML = countStr;
}

countBtn.addEventListener("click", incrementCount);

