const answer = document.querySelector(`#answer`);
const fullScreenToggle = document.querySelector(`#fullScreenToggle`);
const bodyEle = document.documentElement;
var btnArr = ["A","B","C","D"];

// -----Prevent right click -------
document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);


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

fullScreenToggle.addEventListener('click',()=>{
    console.log(document.fullscreenElement)
    if (document.fullscreenElement) {
        document.exitFullscreen()
        .then(() => console.log("Document Exited from Full screen mode"))
        .catch((err) => console.error(err));
        fullScreenToggle.innerHTML = `<i class="fa-solid fa-up-right-and-down-left-from-center"></i>`;
      }
      else {
        document.documentElement.requestFullscreen();
        fullScreenToggle.innerHTML = `<i class="fa-solid fa-down-left-and-up-right-to-center"></i>`;
      }
})
