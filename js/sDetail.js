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

colorRadios.forEach(radio => {
    radio.addEventListener('change', function () {
        if (this.checked) {
            detailBox.style.display = "block";
        }
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

// function viewdetail(){
//     const sizeAngle = document.querySelector(".size-box i");
//     const sizeBoxDetail = document.querySelector(".size-box-detail");
//     if(sizeAngle.classList.contains("fa-angle-down")){
//         sizeAngle.classList.remove("fa-angle-down");
//         sizeAngle.classList.add("fa-angle-up");
//         sizeBoxDetail.style.display = "block";
//     }else{
//         sizeAngle.classList.remove("fa-angle-up");
//         sizeAngle.classList.add("fa-angle-down");
//         sizeBoxDetail.style.display = "none";
//     }
// 자작 2}

function viewdetail() {
    const detailBox = document.querySelector(".size-box-detail");
    const toggleIcon = document.getElementById("toggle-icon");
    if (detailBox.style.display == "block") {
        detailBox.style.display = "none";
        toggleIcon.classList.remove("fa-angle-up");
        toggleIcon.classList.add("fa-angle-down");
    } else {
        detailBox.style.display = "block";
        toggleIcon.classList.remove("fa-angle-down");
        toggleIcon.classList.add("fa-angle-up");
    }
}

const options = document.querySelectorAll(".option");
const sizeBox = document.querySelector(".size-box span");
const toggleIcon = document.getElementById("toggle-icon");
options.forEach(option => {
    option.addEventListener("click", (e) => {
        const svalue = e.target.getAttribute("data-value");
        console.log(e.target.getAttribute("data-value"));
        options.forEach(opt => {
            opt.classList.remove("selected");
        });
        e.target.classList.add("selected");
        sizeBox.textContent = `사이즈 : ${svalue}`;
        document.getElementById("size").value = svalue;
        toggleIcon.classList.remove("fa-angle-up");
        toggleIcon.classList.add("fa-angle-down");
    });
});

