
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    const tenCoQuan = document.getElementById('ten-co-quan').value;
    const diaChi = document.getElementById('dia-chi').value;
    const hoTen = document.getElementById('ho-ten').value;
    const ngaySinh = document.getElementById('ngay-sinh').value;
    const quocTich = document.getElementById('quoc-tich').value;
    const chucDanh = document.getElementById('chuc-danh').value;
    const soCMND = document.getElementById('so-cmt').value;
    const noiCap = document.getElementById('noi-cap').value;
    const diaChiLienLac = document.getElementById('dia-chi-lien-lac').value;
    
    let isValid = true;

    if (!tenCoQuan || !diaChi || !hoTen || !ngaySinh || !quocTich || !chucDanh || !soCMND || !noiCap || !diaChiLienLac) {
        alert("Vui lòng điền đầy đủ các thông tin bắt buộc.");
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        alert("Form đã được gửi thành công!");
        form.reset();
    }
});

// Validatate
function Validator(options) {
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector('.form-message');
        var errorMessage = rule.test(inputElement.value);

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }

    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                inputElement.onblur = function() {
                    validate(inputElement, rule);
                };

                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector('.form-message');
                    errorElement.innerText = ''; 
                    inputElement.parentElement.classList.remove('invalid');
                };
            }
        });
    }
}

// rule
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : 'Vui lòng nhập thông tin';
        }
    };
};

Validator.isText = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^[a-zA-Z\s]+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập thông tin dạng chữ';
        }
    };
};

Validator.isNumber = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\d+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập thông tin dạng số';
        }
    };
};

Validator({
    form: '#form-1',
    rules: [
        Validator.isRequired('#ten-co-quan'),
        Validator.isRequired('#dia-chi'),
        Validator.isRequired('#ho-ten'),
        Validator.isRequired('#chuc-danh'),
        Validator.isNumber('#dien-thoai'),
        Validator.isNumber('#so-cmt'),
        Validator.isText('#ho-ten')
    ]
});
