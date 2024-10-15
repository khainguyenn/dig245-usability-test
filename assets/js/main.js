let myForm = document.querySelector("#formSUS");

myForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let q1 = parseInt(this.q1.value);
    let q2 = parseInt(this.q2.value);
    let q3 = parseInt(this.q3.value);
    let q4 = parseInt(this.q4.value);
    let q5 = parseInt(this.q5.value);
    let q6 = parseInt(this.q6.value);
    let q7 = parseInt(this.q7.value);
    let q8 = parseInt(this.q8.value);
    let q9 = parseInt(this.q9.value);
    let q10 = parseInt(this.q10.value);

    q1 -= 1;
    q3 -= 1;
    q5 -= 1;
    q7 -= 1;
    q9 -= 1;

    q2 = 5 - q2;
    q4 = 5 - q4;
    q6 = 5 - q6;
    q8 = 5 - q8;
    q10 = 5 - q10;

    let answer = (q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10) * 2.5;
    this.answer.value = answer;

    console.log(answer);
});
