let deduction = document.getElementById("deduction");
let extrainc = document.getElementById("extra-income");
let dropdown = document.getElementById("dropdown");
let finalincome = document.getElementById("final-inc");
let grossincome = document.getElementById("gross-annual-income");
let fieldDropdown = document.getElementsByClassName("field-dropdown")[0];
let header = document.getElementsByClassName('header')[0]
let field = document.getElementsByClassName('field-input')

// to calculate the tax --------------
const btn = document.getElementById("button");
btn.addEventListener("click", calculate);

function calculate(event) {
  event.preventDefault();
  let totalinc =
    Math.floor(grossincome.value) +
    Math.floor(extrainc.value) -
    Math.floor(deduction.value);

  if (grossincome.value && dropdown.value) {
    for (let i = 0; i < field.length; i++) {
        if(field[i].classList.contains('active')){
            return
        }
    }
    fieldDropdown.classList.remove("active");
    if (dropdown.value == 0) {
      fieldDropdown.classList.add("active");
    } else if (dropdown.value == 1) {
       const finalinc =totalinc - 0.3*(totalinc - 800000)
       header.classList.add('show')
       finalIncome(finalinc)
    } else if (dropdown.value == 2) {
        const finalinc =totalinc - 0.4*(totalinc - 800000)
        header.classList.add('show')
        finalIncome(finalinc)
    } else if (dropdown.value == 3) {
        const finalinc =totalinc - 0.1*(totalinc - 800000)
        header.classList.add('show')
        finalIncome(finalinc)
    } else {
      alert("please select the range");
    }
  }else {
    alert("please fill the gross income");
  }
}

function finalIncome(e){
    finalincome.innerHTML = e
}
// -----------------------------------------

// regex------------------------------------
grossincome.addEventListener("blur", (e) => validate(e));
deduction.addEventListener("blur", (e) => validate(e));
extrainc.addEventListener("blur", (e) => validate(e));
dropdown.addEventListener("blur", (e) => {
  if (e.target.value == 0) {
    fieldDropdown.classList.add("active");
  } else {
    fieldDropdown.classList.remove("active");
  }
});

function validate(e) {
  let splitstr = e.target.value.split(" ");
  if (e.target.value){
    if (splitstr.length > 1) {
      console.log("fail");
      console.log(document.parentElement(e.target));
    } else {
      const reg = /^([1-9][0-9]{0,100})$/;
      const str = e.target.value;
      if (reg.test(str)) {
        e.target.parentElement.classList.remove("active");
      } else {
        e.target.parentElement.classList.add("active");
      }
    }
  }
}
// --------------------------------------------

// Income after tax deduction------------------
function hideDisplay(){
    header.classList.remove('show')
    clearall()
}

function clearall(){
    grossincome.value=''
    deduction.value=''
    extrainc.value=''
    dropdown.value=0
}
// --------------------------------------------