const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset &&  top < offset + height) {
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        
        }
    })
}

function getRandomcat() {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const foxImage = document.getElementById('catImage');
            foxImage.src = data[0].url; // Access the first image URL in the response array
            foxImage.alt = 'Random cat';
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

    //lab 9
function diagonal() {
    let base = parseFloat(prompt('ป้อนความยาวของฐาน:'));
    let height = parseFloat(prompt('ป้อนความสูง:'));
    let result = Math.sqrt(base ** 2 + height ** 2);
    console.log('ความยาวของเส้นแยงมุมคือ: ' + result.toFixed(2));
    document.getElementById("show1").innerHTML = "ความยาวของเส้นแยงมุมคือ: " + result.toFixed(2);
    alert(result.toFixed(2))
  }
v  

//lab 2 Accumulator 
function Accumulator(){
let accumulator = {
    currentValue: 0,
    read: function() {
        let input = prompt("ป้อนค่าที่ต้องการบวกเข้ากับค่าสะสม:");
        this.currentValue += Number(input);
    },
    show: function() {
        console.log("ค่าสะสมปัจจุบัน: " + this.currentValue);
        document.getElementById("show2").innerHTML = "ค่าสะสมปัจจุบัน: " + this.currentValue;
    }
};

accumulator.read();
accumulator.read();
accumulator.show();
}

//สุ่มตัวเลข 1-6
function randomnumberr(){
document.getElementById("show3").innerHTML = "สุ่มตัวเลข: " + Math.floor(Math.random() * 11);
}
//ตัวอักษรใหญ่ตัวแรก
function bigtextt(){
var str = prompt("Enter name ");
var res = str.slice(0,1).toUpperCase()+str.slice(1);
document.getElementById("show4").innerHTML = "ตัวอักษรตัวแรกใหญ่เสมอ: " + res;
alert(res);
}

    //เช็คอายุ
function names(){
let age = prompt('How old are you');
let message = (age >= 20) ? 'ผ่าน' : 'ไม่ผ่าน';
console.log(message);
document.getElementById("show").innerHTML = "สถานะ: " + message;


}


