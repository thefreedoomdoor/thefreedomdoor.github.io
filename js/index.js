const textEl = document.querySelector('#text');
const texts = JSON.parse(textEl.getAttribute('data-text'));

let index = 0;
let charIndex = 0;
let delta = 100;

let start = null;
let isDeleting = false;

function type(time){
    window.requestAnimationFrame(type);
    if(!start) start = time;
    let progress = time - start;

    if(progress > delta){
        let text = texts[index];
        if(!isDeleting){
            textEl.innerHTML = text.slice(0,++charIndex);
            delta = 100 - Math.random();
        }   else{
            textEl.innerHTML = text.slice(0,charIndex--);
        }

        start = time;
        if(charIndex === text.length){
            isDeleting = true;
            delta = 100;
            start = time + 1000;

        }
        
        if(charIndex < 0){
            isDeleting = false;
            start = time + 100;
            index = ++index % texts.length;
        }
    }
}

window.requestAnimationFrame(type);
