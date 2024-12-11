## Cheatsheet

## Extentions
- `auto rename tag`
- `html css support`
- `html tag wrapper`
- `html to css autocompletion
- `live server`


## HTML
- HEADING `h123456`
- paragraphs `p`
- Links `<a href=" ">...</a>`
- IMG `<img src=" " alt=" " width=" " height=" ">`
- Horizontal `hr`
- Line breaks `br`
- Preformatted text `pre`
- Forrmatting `b, strong, i, em, ins, sub, sup. small, mark`
- table
	```html
	<table>
		<tr>
			<th>...</th>
			<th>...</th>
		</tr>
		<tr>
			<td>...</td>
			<td>...</td>
		</tr>
	</table>
	
	<table>
		<tr>
			<th colspan="2">...</th>
		</tr>
		<tr>
			<td>...</td>
			<td>...</td>
		</tr>
	</table>

	<table>
		<tr>
		    <th>Name</th>
		    <td>Jill</td>
		</tr>
		<tr>
		    <th rowspan="2">Phone</th>
		    <td>555-1234</td>
		</tr>
		<tr>
		    <td>555-8745</td>
		</tr>
	</table>
	
	```
- List
	- Unordered
		```html
		<ul>
			<li>t</li>
			<li>h</li>
			<li>a</li>
		</ul>
		```
	- ordered `ol li`
	- description: `dl dt đd`

## css
- link html `<link rel="stylesheet" href="css/style.css">`
- box model `margin border padding content` 
- `display: flex, justify-content, flex-direction, align-items, align-content` 
- `text-transform`
- li `display: inline, list-style-type: none`
- gradients `background-image: linear-gradient(_direction_, _color-stop1_, _color-stop2, ..._);`
- grid `display: grid, grid-template-columns: auto auto auto`
- responsive `@media only screen and (max-width: 760px)`
## js
```js
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^0\d{9,10}$/; // Số điện thoại phải bắt đầu bằng 0 và có từ 10-11 số
const dateRegex = /^\d{1,2}([\/\-])\d{1,2}\1\d{4}$/; // Dạng dd/mm/yyyy hoặc dd-mm-yyyy
const pattern = /^[^0-9][a-zA-Z0-9]*$/;//ki tu dau khong phai la so 

if (email && !emailRegex.test(email))
if (rating && isNaN(rating))
if (!isValid) {
	event.preventDefault();
} else {
	form.reset();
}

const form = document.querySelector('form[action="#"]');
const name = document.getElementsByName('Fullname')[0].value;
const phone = document.getElementsByName('Phone')[0].value;
const date = document.getElementsByName('Date')[0].value;

```

## seo
```html
<!--xác định kiểu mã hóa ký tự tiếng việt-->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--đảm bảo trang web được hiển thị bằng engine hiện đại nhất-->
<meta http-equiv='X-UA-Compatible' content='IE=edge'>
<meta name="keywords" content="">
<meta name="description" content="">
<meta name="author" content="">
<!---->
```

```js
//from thou
document.getElementById("submit").addEventListener("click", function(event){
    const email = document.getElementById("email").value;
    const rating = document.getElementById("rate").value;
    const comment = document.getElementById("com").value;

    let isValid = true;

    if(!email || !rating || !comment){
        alert("hay dien day du thong tin");
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        alert("email khong hop le")
        isValid = false;
    }

    if (rating && isNaN(rating)) {
        alert("chi dien so")
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        alert("Form đã được gửi thành công!");
        form.reset();
    }
});

```

```js
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
```

```js
<script type="text/javascript">
  // Search form validation
  function validateSearch() {
    var searchInput = document.querySelector('input[type="text"]').value;
    if (searchInput.trim() == "" || searchInput == "Search for Products") {
      alert("Please enter a product to search.");
      return false;
    }
    return true;
  }

  // Contact form validation
  function validateContactForm() {
    var fullname = document.getElementsByName("Fullname")[0].value;
    var image = document.getElementsByName("Image")[0].value;

    if (fullname.trim() == "" || image.trim() == "") {
      alert("Please fill in all fields.");
      return false;
    }
    return true;
  }
</script>
```
```js
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
```
```js
document.querySelector('input[type="submit"]').addEventListener('click', function(event){
	const form = document.querySelector('form'); 
	const search = document.querySelector('input[type="text"]').value.trim();
	let isValid = true;
	if(!search || search === "Search for Products"){
		alert("vui long nhap ten can tim");
		isValid = false;
	}  
	if(!isValid){
		event.preventDefault();
	}else{
		form.reset(); 
	}
});

```

