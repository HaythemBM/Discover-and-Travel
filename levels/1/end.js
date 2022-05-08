let clickend = 0;


/* document.getElementById("open-popup-btn").addEventListener("click",function(){document.getElementsByClassName("popupp")[0].classList.add("active");
if (progressvalue<100) {
    progressvalue+=25;
}
else{
    progressvalue=100;
}
valuecontainer.textContent= `${progressvalue}%`;
progressbar.style.background= `conic-gradient(
    #b8973d ${progressvalue * 3.6}deg,
    #fcf4de ${progressvalue * 3.6}deg
    )`;});
document.getElementById("dismiss-popup-btn").addEventListener("click",function(){document.getElementsByClassName("popupp")[0].classList.remove("active");
}); */
const exit = document.getElementById("dismisss");
exit.addEventListener('click', () => {

    if (exit.innerHTML == "Try again") {
        document.getElementById('finish').style.display = 'none';
        console.log("helllllllllllllllooooo");
        location.reload();
    }
    else
        window.location.pathname = 'play.html';
    clickend = 1;
    stopp = 1;

})
const next = document.getElementById("nexxt");
next.addEventListener('click', () => {
    document.getElementById('finish').style.display = 'none';
    window.location.pathname = 'levels/2/maze2.html';
})