const thumbs = document.querySelectorAll('.thumb')
const bigImg = document.querySelector('.big-img')
const circle = document.querySelector('.circle')
console.log(thumbs)
thumbs.forEach((e) => {
    e.addEventListener('click', () =>{
        bigImg.src = e.src
        if(e.alt == "green"){
            circle.classList.add('green')
            circle.classList.remove('yellow')
        }
        else if(e.alt == "yellow"){
            circle.classList.add('yellow')
            circle.classList.remove('green')
        }
        else{
            circle.classList.remove('yellow')
            circle.classList.remove('green')
        }
    })
})