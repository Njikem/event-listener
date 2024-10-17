
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
}


//Add mouseleave listener to remove h3

   let hTag2 = document.querySelector('h-tag');

    hTag2.addEventListener('mouseleave', removeH3);

function removeH3(){

  //Remove the h3 tag if it exist

    if(hTag2){
        hTag2.remove();
    }

}


