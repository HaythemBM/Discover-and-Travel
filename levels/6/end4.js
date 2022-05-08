document.getElementById("finish").addEventListener("click",function(){document.getElementsByClassName("ppopupp")[0].classList.add("active");
if (progressvalue<100) {
    progressvalue+=16;
}
else{
    progressvalue=100;
}
valuecontainer.textContent= `${progressvalue}%`;
progressbar.style.background= `conic-gradient(
    #b8973d ${progressvalue * 3.6}deg,
    #fcf4de ${progressvalue * 3.6}deg
    )`;

});
document.getElementById("finish").addEventListener("click",function(){document.getElementsByClassName("ppopupp")[0].classList.remove("active");
});