const list_img = document.getElementById("list_img");
let i = 0, k = -1;
setInterval(function () {
    i = i + 400 * k;
    // console.log(i);
    list_img.style.transform = `translateX(${i}px)`;
    if (i == -400 * 4) k = 1;
    if (i == 0) k = -1;
}, 4000);