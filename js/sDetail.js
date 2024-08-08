const productImage = document.querySelector(".product-image img");
const productImages = document.querySelectorAll(".product-images img");

productImages.forEach(function (img) {
    img.addEventListener("click", function (e) {
        const productImageUrl = e.target.src;
        productImage.src = productImageUrl;
    });
});