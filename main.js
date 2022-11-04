window.addEventListener('scroll', function animated(){
    let screen = window.scrollY + window.innerHeight
    if(screen > 1000 && screen < 1008){
        trocarCor1()    
    }
    if(screen > 1008){
        trocarCor2()     
    } 

    if(screen < 1000){
        trocarCor3()
    } 
    window.removeEventListener('scroll', function animated(){});
});


function trocarCor1(){
    let div = document.querySelector('.navbar-dark ')
        let logo1 = document.querySelector('.logo')
        let logo2 = document.querySelector('.logo2')
        logo1.style.display = "none"
        logo2.style.display = "initial"
        div.style.backgroundColor = "white";
        div.style.borderBottom = "red";
        link.style.color = "black"

}

function trocarCor2() {
    let div = document.querySelector('.navbar-dark ')
    let link  = document.querySelectorAll('.nav-item a')
    let logo1 = document.querySelector('.logo')
    let logo2 = document.querySelector('.logo2')
    logo1.style.display = "none"
    logo2.style.display = "initial"
    div.style.backgroundColor = "white";
    div.style.borderBottom = "2px solid red";
    link[0].style.color = "black"
    link[1].style.color = "black"
    link[2].style.color = "black"
    link[3].style.color = "black"
    link[4].style.color = "black"
    link[5].style.color = "black"
}

function trocarCor3() {
    let div = document.querySelector('.navbar-dark ')
    let link  = document.querySelectorAll('.nav-item a')
    let logo1 = document.querySelector('.logo')
    let logo2 = document.querySelector('.logo2')
    logo1.style.display = ""
    logo2.style.display = "none"
    div.style.backgroundColor = "";
    div.style.borderBottom = "";
    link[0].style.color = ""
    link[1].style.color = ""
    link[2].style.color = ""
    link[3].style.color = ""
    link[4].style.color = ""
    link[5].style.color = ""
    
}