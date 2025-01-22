// alert('welcome');

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
        console.log('clicked');
        
    })
};

if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
        console.log('clicked');
        
    })
};

let lastScrollY = 0;

        const wer = document.getElementById('header');

        window.addEventListener('load',()=>{
            wer.classList.remove('hidden')
        });
        
        window.addEventListener('scroll', ()=>{
            const currentScrollY = window.scrollY
            if ( currentScrollY > lastScrollY ) {

                console.log('scroll Down');
                wer.classList.add('hidden')

            }else{
                console.log('scroll up');
                wer.classList.remove('hidden')
            }
            lastScrollY = currentScrollY

         
        });


