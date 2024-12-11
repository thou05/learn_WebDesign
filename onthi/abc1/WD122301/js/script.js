document.getElementsByName('submit')[0].addEventListener('click', function(event){
    const form = document.querySelector('form[action="#"]');
    const name = document.getElementsByName('Fullname')[0].value;
    const phone = document.getElementsByName('Phone')[0].value;
    const date = document.getElementsByName('Date')[0].value;
    let isValid = true;

    if(!name || !phone || !date){
        alert("Vui long dien du thong tin");
        isValid = false;
    }
    const phoneRegex = /^0\d{9,10}$/;
    if(phone && !phoneRegex.test(phone)){
        alert("vui long dien dung dinh dang");
        isValid = false;
    }
    const dateRegex = /^\d{1,2}([\/\-])\d{1,2}\1\d{4}$/;
    if(date && !dateRegex.test(date)){
        alert("vui long dien dung dinh dang ngay");
        isValid = false;
    }

    if(!isValid){
        event.preventDefault();
    }else{
        form.reset();
    }
});