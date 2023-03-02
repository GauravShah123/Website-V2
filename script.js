//Mouse
const blob = document.getElementById("mouse-blob");
document.body.onpointermove = event => {
    const { clientX, pageY } = event;
    let yPosition = pageY;
    // if (yPosition + 50 > window.innerHeight) {
    //     yPosition = window.innerHeight - 50;
    // }
    blob.animate({
        left: `${clientX}px`,
        top: `${yPosition}px`
    }, { duration: 200, fill: "forwards" });
}

window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 40) {
        document.querySelector(".navBar").classList.add("shadow");
    }else{
        document.querySelector(".navBar").classList.remove("shadow");
    }
});

// document.getElementById("investmint").addEventListener("mousemove", function(e){
//     console.log(e);
//     const image = document.getElementById("investmintImg");
//     image.animate({
//         left: `${e.clientX}px`,
//         top: `${e.pageY}px`
//     }, { duration: 0, fill: "forwards" });
// })
