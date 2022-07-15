const answer = document.querySelector(`#answer`)
var btnArr = ["A","B","C","D"];

btnArr.forEach(button => {
    document.querySelector(`#${button}`).addEventListener('click',()=>{
        btnArr.forEach(btn => {
            document.querySelector(`#${btn}`).classList.remove("okActive");
        })
        document.querySelector(`#${button}`).classList.add("okActive");
        answer.value = button;
        console.log(button);
    });
});