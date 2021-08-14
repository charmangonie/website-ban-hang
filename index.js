//1 phần tử trong mảng là một object, một obeject là một product: link ảnh, tên product, giá bắt đầu, giá kết thúc,số lg bán
const data=[
{
    img:"https://is.vnecdn.net/v837/45/14/02/4021445/assets/images/graphics/noodle-1.png",
    name:"Mỳ ăn liền ô ma chi",
    pricefrom:5000,
    priceto:7000,
    sold:"Đã bán 23k",
},
{
    img:"https://is.vnecdn.net/v837/45/14/02/4021445/assets/images/graphics/noodle-1.png",
    name:"Mỳ ăn liền hảo hảo",
    pricefrom:3000,
    priceto:5000,
    sold:"Đã bán 235k",
},
{
    img:"https://is.vnecdn.net/v837/45/14/02/4021445/assets/images/graphics/noodle-1.png",
    name:"Mỳ ăn liền cung đình",
    pricefrom:6000,
    priceto:7000,
    sold:"Đã bán 3k",
},
{
    img:"https://is.vnecdn.net/v837/45/14/02/4021445/assets/images/graphics/noodle-1.png",
    name:"Mỳ ăn liền kokomi",
    pricefrom:5000,
    priceto:10000,
    sold:"Đã bán 2k",
},
{
    img:"https://is.vnecdn.net/v837/45/14/02/4021445/assets/images/graphics/noodle-1.png",
    name:"Mỳ ăn liền kokomi",
    pricefrom:5000,
    priceto:10000,
    sold:"Đã bán 2k",
}
]
//Bước 2 in ra bên html
let allproduct = document.getElementById("allproduct")
let htmlallproduct =""
let namefavorite = localStorage.getItem("namefavorite")
namefavorite = JSON.parse(namefavorite)
//biến global ngoài hàm, gọi đc ở tất cả các vị trí
let showproduct = document.getElementById("show-favorite")
for(product of data){
 htmlallproduct += `
 <div class="container-product">
 <img class="product-img" src= ${product.img}>
                <div class="product-content">
                <div class="product-title">${product.name}</div>
                <div class="product-price-like">
                    <div class="product-price">
                        <p class="price-vnd">đ</p>
                        <p class="price-number">${product.pricefrom}</p>
                        <p class="price--">-</p>
                        <p class="price-vnd">đ</p>
                        <p class="price-number">${product.priceto}</p>
                    </div>
                    <div class="product-like">
                        <i class="fad fa-heart" onclick="getname("${product.name}")"></i>
                    </div>
                </div>
                <div class="product-footer">
                    <div class="product-rate">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="product-sold">${product.sold}</div>
                </div>
                </div>
                </div>`;

}
allproduct.innerHTML=htmlallproduct
function getname(name){
namefavorite.push(name)
localStorage.setItem("namefavorite",JSON.stringify(namefavorite))
readname()
}
function readname(){
    let htmlshowfavorite = ""
    for (let i=0; i<namefavorite.length; i++){
        htmlshowfavorite +=`
        <p> ${namefavorite[i]} </p>`
    }
    showproduct.innerHTML=htmlshowfavorite
}