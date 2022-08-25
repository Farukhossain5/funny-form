console.log('this is speacial events')
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
const pinkButton=document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink);
function makePink(){
    document.body.style.backgroundColor='pink';
}

function makeRed() {
    document.body.style.backgroundColor = 'red';
        }
       const greenButton=document.getElementById('make-green');
       greenButton.addEventListener('click',function greenButton(){
        document.body.style.backgroundColor='green';
       });