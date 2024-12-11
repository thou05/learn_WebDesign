document.getElementsByName('submit')[0].addEventListener('click', function(event){
    const form = document.querySelector('form[action="#"]');
    const name = document.getElementsByName('Fullname')[0].value;
    const rate = document.getElementsByName('Rate')[0].value;
    let isValid = true;

    if(!name || !rate){
        alert("nhap du");
        isValid = false;
    }
    if(rate && isNaN(rate)){
        alert("nhap so");
        isValid = false;
    }
    if(!isValid){
        event.preventDefault();
    }else{
        form.reset();
    }
})