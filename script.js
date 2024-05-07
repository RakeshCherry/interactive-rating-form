const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');
const submitbutton = document.querySelector('.btn-submit');
const rateagain = document.querySelector('#rate-again');
const ratinglink = document.getElementById('ratinglink');
const circles = document.querySelectorAll('.circle');
const rates = document.getElementById('rating')


submitbutton.addEventListener('click', () =>{
    container2.classList.remove('hidden');
    container.style.display='none';
})
rateagain.addEventListener('click', () =>{
    container2.classList.add('hidden');
    container.style.display='block';
})

circles.forEach(circle =>{
    
    circle.addEventListener('click', ()=>{
        if(circle.classList.contains('active')){
            circle.classList.remove('active')
        }else{
            circles.forEach(c => c.classList.remove('active'));
            circle.classList.add('active');
        }
    })
})

circles.forEach((rate) =>{
    rate.addEventListener('click', () =>{
        rates.innerHTML =rate.innerHTML;
    })
})



