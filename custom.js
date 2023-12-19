let count = document.querySelector('textarea');
count.addEventListener('input',()=>{
    document.querySelector('h6').innerText = count.value.length;
})

// let input = document.querySelector('input')

// input.addEventListener(
//     'input', function(){
//         document.getElementsByTagName('h1')[0].innerText = input.value;
//     }
// )