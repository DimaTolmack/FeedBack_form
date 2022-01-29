//// Start validation
let form = document.forms["form"];
let button = form.elements["button"]
form.addEventListener("input", inputHandler);
button.addEventListener("click", handlerButton)
let inputArr = Array.from(form);
let validInputArr = [];
inputArr.forEach((el) => {
  if (el.hasAttribute("data-reg")) {
    el.setAttribute("is-valid", "0")
    validInputArr.push(el)
  }
});
console.log(validInputArr)

function inputHandler({target}) {
  if (target.hasAttribute("data-reg")) {
    checkInput(target);
  }
}


function checkInput(el) {
  let inputValue = el.value;
  let inputReg = el.getAttribute("data-reg")
  let reg = new RegExp(inputReg)
  if (reg.test(inputValue)) {
    el.style.border = "3px solid rgb(0,196,0)"
    el.setAttribute("is-valid", "1")
  } else {
    el.style.border = "3px solid rgb(255,0,0)"
    el.setAttribute("is-valid", "0")
  }
}

function handlerButton(e) {
  let isAllValid = [];
  validInputArr.forEach((el) => {
    isAllValid.push(el.getAttribute("is-valid"))
  });
  let isValid = isAllValid.reduce((acc, current) => {
    return acc && current
  })
  if (!Boolean(Number(isValid))) {
    e.preventDefault();
  }
}
