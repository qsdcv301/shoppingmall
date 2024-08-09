// const productImage = document.querySelector(".product-image img");
// const productImages = document.querySelectorAll(".product-images img");

// productImages.forEach(function (img) {
//     img.addEventListener("click", function (e) {
//         const productImageUrl = e.target.src;
//         productImage.src = productImageUrl;
//     });
// });

const simgs = document.querySelectorAll(".simg");
// const simgs = document.getElementsByClassName("simg");
const bimg = document.querySelector(".b-img > img");
simgs.forEach(img => {
    img.addEventListener("click", (e) => {
        bimg.src = e.target.src;
    });
});

const colorRadios = document.querySelectorAll(".colors");
const thisColor = document.getElementById("thiscolor");
colorRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
        const selectColor = e.target.value;
        thisColor.textContent = selectColor;
    });
});
// const sizeBox = document.querySelector(".size-box");
// const sizeBoxArrow = document.querySelector(".size-box i");
// const sizeSelect = document.querySelectorAll(".size-select");
// const sizeBoxText = document.querySelector(".size-box span");
// sizeBox.addEventListener("click",(e)=>{
//     if(sizeBoxArrow.classList.contains("ri-arrow-down-wide-line")){
//         sizeBoxArrow.classList.remove("ri-arrow-down-wide-line");
//         sizeBoxArrow.classList.add("ri-arrow-up-wide-line");
//         sizeSelect.forEach((element) => {
//             element.style.display = "block";
//             element.addEventListener("click", (element)=>{
//                 const labelElement = element.target.querySelector('label');
//                 sizeBoxText.textContent = labelElement.textContent;
//             });
//         });

//     }else{
//         sizeBoxArrow.classList.add("ri-arrow-down-wide-line");
//         sizeBoxArrow.classList.remove("ri-arrow-up-wide-line");
//         sizeSelect.forEach((element) => {
//             element.style.display = "none";
//         });
//     }
// }); 자작

