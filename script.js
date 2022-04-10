//Bank Credit

// function Credit(){
//     let sum = document.querySelector('.sum').value;
//     let percentage = document.querySelector('.percent').value;
//     let month = document.querySelector('.month').value;

//     let summary = ((sum*percentage)/100)*(month/12);
//     summary= Number.parseFloat(summary) + Number.parseFloat(sum);

//     document.querySelector('.summaryPercentage').innerHTML=summary;
//     document.querySelector('.monthPercentage').innerHTML=Number.parseFloat(summary)/Number.parseFloat(month);


// }




//Counter Program

let dec = document.querySelector(".decrease");
let res = document.querySelector(".reset");
let inc = document.querySelector(".increase");

let change = document.querySelector(".variable");

dec.addEventListener('click',()=>{
    let num = change.textContent;
    num--;
    change.textContent=num;
});

inc.addEventListener('click',()=>{
    let num = change.textContent;
    num++;
    change.textContent=num;
});

res.addEventListener('click',()=>{
    let num = change.textContent;
    num=0;
    change.textContent=num;
});


