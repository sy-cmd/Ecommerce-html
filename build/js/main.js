const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
        console.log('clicked');
        
    })
}
if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
        console.log('clicked');
        
    })
}


// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('button').addEventListener('click', function() {
//       console.log('Button clicked!');
//     });
//   });

// document.addEventListener('DOMContentLoaded', function() {
//     war.addEventListener('click', function() {
//         nav.classList.add('active');
//     });
//   });