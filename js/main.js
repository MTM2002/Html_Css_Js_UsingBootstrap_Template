let navbarLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link")
navbarLinks.forEach(link => {
    link.addEventListener("click", e => {
        navbarLinks.forEach(link => {
            link.classList.remove("active")
        })
        e.target.classList.add("active")
    })
})
let shuffleLinks = document.querySelectorAll(".shuffle li")
let imgs = document.querySelectorAll(".our-work .row .shf")
shuffleLinks.forEach(link => {
    link.addEventListener("click", e => {
        shuffleLinks.forEach(link => {
            link.classList.remove("active")
            link.classList.remove("rounded-pill")
        })
        e.target.classList.add("active")
        e.target.classList.add("rounded-pill")
        imgs.forEach(img =>{
            img.style.display = "none"
        })
        document.querySelectorAll(e.target.dataset.cont).forEach(ele =>{
            ele.style.display = "block";
            document.querySelector(".our-work .row").style.justifyContent = "center"
        } )
    })
})