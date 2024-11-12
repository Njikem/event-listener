
let image = document.getElementById('image');

image.addEventListener('click', imageClick);

function imageClick(){
    
    image.src = 'image/mountain.jpg'; 
   
}


let hTag = document.getElementById('h-tag');

hTag.addEventListener('mouseover', hTag1);

function hTag1(){

    //create a new h3 element
     
    let newH3 = document.createElement('h3');

    //Set its text content to 'Secret hover'

    newH3.textContent = 'Secret hover'

    
    // Insert the new h3 element after the h1 element
    hTag.insertAdjacentElement('afterend', newH3);

    //Remove theh3 tag if it exist

    newH3.addEventListener('click', h3Tag);

    function h3Tag(){
        if(newH3){
            newH3.remove();
        }
    }

   
}


//Add mouseleave listener to remove h3

  //  hTag.addEventListener('mouseleave', removeH3);

//unction removeH3(){

  //Remove the h3 tag if it exist

 //   if(h3){
     //   h3.remove();
   // }

//


//Key down event
document.body.addEventListener('keydown', bodyTag1);

function bodyTag1(event){
      if(event.key.toLowerCase() === 'p'){
        document.body.style.backgroundColor = 'Purple';
      }
}

//Key Up event
document.body.addEventListener('keyup', keyUp);

function keyUp(event){
    if(event.key.toLowerCase() === 'p'){

        document.body.style.backgroundColor = 'white'

    }
    
}

// Select all buttons
let buttons = document.querySelectorAll('button');


//Add event listner for each button

buttons.forEach(button => {

    button.addEventListener('click', function () {

          //Create an h1 element
    let h1Tag = document.createElement('h1');

    h1Tag.textContent = `You Selected: ${button.value}`;



    //Inject an h1 element into the body
    document.body.appendChild(h1Tag);

    //Remove the h1 tag when the item is selected
    h1Tag.addEventListener('click', function() {
        if(h1Tag){
            h1Tag.remove();
        }
    })

    })
})



   



