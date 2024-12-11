// coding implementation
// end coding implementation

document.getElementById('submit').addEventListener("click", function(event){
    const email = document.getElementById("email").value;
    const rating = document.getElementById("rate").value;
    const comment = document.getElementById("com").value;
    
    let isValid = true;
    if(!email || !rating || !comment){
        alert("thieu thong tin trong");
        isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email && !emailRegex.test(email)){
        alert("email khong hop le");
        isValid = false;
    }

    if(rating && isNaN(rating)){
        alert("chi dien so");
        isValid = false;
    }

    if(!isValid){
        event.preventDefault();
    }else{
        form.reset();
    }

});






