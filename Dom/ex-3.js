const btn = document.querySelector("#show-btn");
const inp = document.querySelector("#img-input");
const img = document.querySelector("#rabbi-img");
btn.addEventListener("click", function () {
    img.src = inp.value
})