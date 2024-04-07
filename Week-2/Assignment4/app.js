
const btnToggle = document.querySelector('.btn-toggle');
btnToggle.addEventListener('click', () => {
    const hiddenContainer = document.querySelector('.hidden-container');
    
    if(hiddenContainer.style.display==="none"){
        hiddenContainer.style.display="flex";
    }else{
        hiddenContainer.style.display="none"
    }
     
});
