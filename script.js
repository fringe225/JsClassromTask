function Credit(){
    let sum = document.querySelector('.sum').value;
    let percentage = document.querySelector('.percent').value;
    let month = document.querySelector('.month').value;

    let summary = ((sum*percentage)/100)*(month/12);
    summary= Number.parseFloat(summary) + Number.parseFloat(sum);

    document.querySelector('.summaryPercentage').innerHTML=summary;
    document.querySelector('.monthPercentage').innerHTML=Number.parseFloat(summary)/Number.parseFloat(month);


}