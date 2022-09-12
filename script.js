console.log("Script running...")

function check() {
    document.querySelector('.cross').style.display = 'none';
}

setInterval(check , 2000);

function home() {
    document.querySelector('#home').style.display = 'flex';

    document.querySelector('#myself').style.display = 'none';
    document.querySelector('#skills').style.display = 'none';
    document.querySelector('#exp').style.display = 'none';
    document.querySelector('#contact').style.display = 'none';
}

function myself() {
    document.querySelector('#myself').style.display = 'flex';
    
    document.querySelector('#home').style.display = 'none';
    document.querySelector('#skills').style.display = 'none';
    document.querySelector('#exp').style.display = 'none';
    document.querySelector('#contact').style.display = 'none';
}

function exp() {
    document.querySelector('#myself').style.display = 'none';
    
    document.querySelector('#home').style.display = 'none';
    document.querySelector('#skills').style.display = 'none';
    document.querySelector('#exp').style.display = 'flex';
    document.querySelector('#contact').style.display = 'none';
}

function skills() {
    document.querySelector('#myself').style.display = 'none';
    
    document.querySelector('#home').style.display = 'none';
    document.querySelector('#skills').style.display = 'flex';
    document.querySelector('#exp').style.display = 'none';
    document.querySelector('#contact').style.display = 'none';
}

function contact() {
    document.querySelector('#myself').style.display = 'none';
    
    document.querySelector('#home').style.display = 'none';
    document.querySelector('#skills').style.display = 'none';
    document.querySelector('#exp').style.display = 'none';
    document.querySelector('#contact').style.display = 'flex';
}