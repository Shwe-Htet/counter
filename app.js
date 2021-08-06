const myBtn = document.getElementsByTagName("button");
const numberBox = document.getElementsByTagName("h1")[0];

let number = 0;
let setInter;

myBtn[0].addEventListener("click", () => {
    clearInterval(setInter);
    setInter = setInterval(() => {
        decrease();
    }, 500);

});
myBtn[1].addEventListener("click", () => {
    clearInterval(setInter);
    reset();
});
myBtn[2].addEventListener("click", () => {
    clearInterval(setInter);
    setInter = setInterval(() => {
        increase();
    }, 500);
})

const decrease = () => {
    number -= 1;
    numberBox.innerText = number;
    numberBox.style.color = "red";
};
const reset = () => {
    number = 0;
    numberBox.innerText = number;
    numberBox.style.color = "green";

};
const increase = () => {
    number += 1;
    numberBox.innerText = number;
    numberBox.style.color = "blue";
}