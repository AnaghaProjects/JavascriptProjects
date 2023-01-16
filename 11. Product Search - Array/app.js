const productItems = [
    {
        id      : 1,
        title   : "Tshirt Trivandrum",
        price   : "$25",
        imgPic  : "./img/Tshirt1 - Trivandrum Tshirt.jfif"
    },
    {
        id      : 2,
        title   : "Rare Rabbit Tshirt",
        price   : "$15",
        imgPic  : "./img/Tshirt2 - Rare Rabbit Tshirt.jfif"
    },
    {
        id      : 3,
        title   : "Tshirt - Colmar",
        price   : "$20",
        imgPic  : "./img/Tshirt3 - Colmar Tshirt.jfif"
    },
    {
        id      : 4,
        title   : "Jersey Tshirt",
        price   : "$30",
        imgPic  : "./img/Tshirt4 - Jersey Tshirt.jfif"
    },
    {
        id      : 5,
        title   : "Kurti Dress",
        price   : "$25",
        imgPic  : "./img/Dresses1 - Kurtis.jfif"
    },
    {
        id      : 6,
        title   : "Dress - One Pieces",
        price   : "$25",
        imgPic  : "./img/Dresses2 - One Pieces.jfif"
    },
    {
        id      : 7,
        title   : "Wedding Dress",
        price   : "$50",
        imgPic  : "./img/Dresses3 - Wedding Dress.jfif"
    },
    {
        id      : 8,
        title   : "Formal Dress",
        price   : "$35",
        imgPic  : "./img/Dresses4 - Formal Dress.jfif"
    },
    {
        id      : 9,
        title   : "Printed Hoodie",
        price   : "$17",
        imgPic  : "./img/Hoodie1 - Printed.jfif"
    },
    {
        id      : 10,
        title   : "Regular Hoodie",
        price   : "$5",
        imgPic  : "./img/Hoodie1 - Regular.jfif"
    },
    {
        id      : 11,
        title   : "GAP Hoodie",
        price   : "$25",
        imgPic  : "./img/Hoodie3 - GAP.jfif"
    },
    {
        id      : 12,
        title   : "Hoodie Designer",
        price   : "$35",
        imgPic  : "./img/Hoodie4 - Designer.jfif"
    },
    {
        id      : 13,
        title   : "Watch - Rado",
        price   : "$25",
        imgPic  : "./img/Watch1 - RAdo.jfif"
    },
    {
        id      : 14,
        title   : "Jphnson Watch",
        price   : "$25",
        imgPic  : "./img/Watch2 - Jphnson Watches.jfif"
    },
    {
        id      : 15,
        title   : "Just In Time Watch",
        price   : "$25",
        imgPic  : "./img/Watch3 - JustinTime.jfif"
    },
    {
        id      : 16,
        title   : "Titan Watch",
        price   : "$30",
        imgPic  : "./img/Watch4 - Titan.jfif"
    }
];

productList = document.querySelector("#product-list");

function showItems (items) {
    let itemList = "";
    items.forEach((item, id) => {
            // Template Literals
            itemList += `
            <div class="product" key="${id}">
                <img src="${item.imgPic}" alt="">
                <div class="p-details">
                    <h2>${item.title}</h2>
                    <h3>${item.price}</h3>
                </div>
            </div>
            `;        
    });

     // If li isn't empty, insert this value inside taskbox else insert span
     productList.innerHTML = itemList || `<span>You dont't have any Products here</span>`;
}

showItems(productItems)

const search = () =>{

    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const newList = [];

    for(var i = 0 ; i < productItems.length ; i++) {
        let match = productItems[i].title;
        if(match.toUpperCase().indexOf(searchBox) > -1) {
            newList.push(productItems[i]);
        }
    }
    showItems(newList);
    
}