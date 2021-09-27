//Selecting the body
let window = document.querySelector('body');

//Generating random numbers
let random = (nums) => {
    return Math.floor(Math.random() * nums);
}

//Generatin random colors
let randomColors = () => {
    return 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
}

//Setting the random colors
let setColor = () => {
    let colorValue = randomColors();
    document.querySelector('body').style.background= colorValue;
}
    
//Adding the resize event
window.addEventListener('resize', setColor);
            