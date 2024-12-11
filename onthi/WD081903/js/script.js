// coding implementation
// end coding implementation

document.getElementById('submit').addEventListener('click', function(event){
    const key = document.getElementById('key').value;
    const cat = document.getElementById('cat').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;

    let isValid = true;
    if(!key || !cat || !from || !to){
        alert("dien du thong tin");
        isValid = false;
    }
    if(from && isNaN(from) || to && isNaN(to)){
        alert("dien so");
        isValid = false;
    }
    //parseFloat: chuyen tu chuoi string ve so thuc
    if(from && to && parseFloat(from) > parseFloat(to)){
        alert("gia to phai cao hon from");
        isValid = false;
    }
    if(!isValid){
        event.preventDefault();
    }else{
        from.reset();
    }


})