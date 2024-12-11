// coding implementation
// end coding implementation

document.getElementById('submit').addEventListener('click', function(event){
    const email = document.getElementById('email').value;
    const rate = document.getElementById('rate').value;

    let isValid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email && !emailRegex.test(email)){
        alert("Le Thi Thao");
        isValid = false;
    }
    if(rate && isNaN(rate)){
        alert("231230910");
        isValid = false;
    }
    if(!isValid){
        event.preventDefault();
    }else{
        form.reset();
    }
});
