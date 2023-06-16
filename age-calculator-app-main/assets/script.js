//Label
let labelDay = document.getElementById("labelDay");
let labelMonth = document.getElementById("labelMonth");
let labelYear = document.getElementById("labelYear");

//input
let InputDay = document.getElementById("inputDay");
let inputMonth = document.getElementById("inputMonth");
let inputYear = document.getElementById("inputYear");

//paragraphError
let dayParag = document.getElementById("dayParag");
let monthParag = document.getElementById("monthParag");
let yearParag = document.getElementById("yearParag");

//output
let spanDay = document.getElementById("spanDay");
let spanMonth = document.getElementById("spanMonth");
let spanYear = document.getElementById("spanYear");

//submit
let submitButton = document.getElementById("submitButton");

let currentDate = new Date();
console.log(currentDate.getFullYear);

function validateInput() {
  if (InputDay.value === "") {
    dayParag.innerHTML = "Enter a valid day";
    InputDay.className = "inputError";
    dayParag.classList = "paraError";
    labelDay.classList = "paraError";
  } else if (InputDay.value < 1 || InputDay.value > 31) {
    dayParag.innerHTML = "Must a valid day";
    InputDay.className = "inputError";
    dayParag.classList = "paraError";
    labelDay.classList = "paraError";
  } else {
    dayParag.innerHTML = "";
    InputDay.className = "";
    dayParag.classList = "";
    labelDay.classList = "";
  }

  if (inputMonth.value === "") {
    monthParag.innerHTML = "Enter a valid month";
    inputMonth.className = "inputError";
    monthParag.classList = "paraError";
    labelMonth.classList = "paraError";
  } else if (inputMonth.value < 1 || inputMonth.value > 12) {
    monthParag.innerHTML = "Must be a valid month";
    inputMonth.className = "inputError";
    monthParag.classList = "paraError";
    labelMonth.classList = "paraError";
  } else {
    monthParag.innerHTML = "";
    inputMonth.className = "";
    monthParag.classList = "";
    labelMonth.classList = "";
  }

  if (inputYear.value === "") {
    yearParag.innerHTML = "Enter a valid year";
    inputYear.className = "inputError";
    yearParag.classList = "paraError";
    labelYear.classList = "paraError";
  } else if (inputYear.value > currentDate.getFullYear()) {
    yearParag.innerHTML = "must be in the past or current year";
    inputYear.className = "inputError";
    yearParag.classList = "paraError";
    labelYear.classList = "paraError";
  } else {
    yearParag.innerHTML = "";
    inputYear.className = "";
    yearParag.classList = "";
    labelYear.classList = "";
  }
  
}
submitButton.addEventListener("click", validateInput);


function validateBirthDate(event) {
  
  let birthDay = new Date(InputDay.value);
  let checkDay = getDate(InputDay.value);
  let birthMonth = new Date(inputMonth.value);
  let checkMonth = getMonth(inputMonth.value) ;
  let birthYear = new Date(inputYear.value);
  let checkYear =getFullYear(inputYear.value);
  
  if (
    birthYear !== checkYear ||
    birthMonth !== checkMonth ||
    birthDay !== checkDay
  ) {
    // Invalid date
    dayParag.innerHTML = "Enter a valid date";
    InputDay.className = "inputError";
    dayParag.classList = "paraError";
    labelDay.classList = "paraError";
  } else {
    // Valid date
    dayParag.innerHTML = "";
    InputDay.className = "";
    dayParag.classList = "";
    labelDay.classList = "";
    spanDay.innerHTML = "";
    spanMonth.innerHTML = "";
    spanYear.innerHTML = "";
  }
}

submitButton.addEventListener("submit", validateBirthDate);





  function updateDayDifference() {
    if (
      InputDay.value !== "" &&
      inputMonth.value !== "" &&
      inputYear.value !== "" &&
      InputDay.value >= 1 &&
      InputDay.value <= 31 &&
      inputMonth.value >= 1 &&
      inputMonth.value <= 12 &&
      inputYear.value <= currentDate.getFullYear()
    ) {
      let birthDate = new Date(inputYear.value, inputMonth.value - 1, InputDay.value);
  
      let differenceInTime = currentDate.getTime() - birthDate.getTime();
  
      let differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
    
      let remainingDays = (differenceInDays % 30);
    
      spanDay.innerHTML = remainingDays;
      
    }
  }
 
submitButton.addEventListener("click", updateDayDifference);


function updateYearDifference() {
  if (
    InputDay.value !== "" &&
    inputMonth.value !== "" &&
    inputYear.value !== "" &&
    InputDay.value >= 1 &&
    InputDay.value <= 31 &&
    inputMonth.value >= 1 &&
    inputMonth.value <= 12 &&
    inputYear.value <= currentDate.getFullYear()
  ) {
    let birthDate = new Date(inputYear.value, inputMonth.value - 1, InputDay.value);

    let differenceInTime = currentDate.getTime() - birthDate.getTime();

    let differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

    let differenceInYears = Math.floor(differenceInDays / 365);
    
    spanYear.innerHTML = differenceInYears;
    
  }
}
submitButton.addEventListener("click", updateYearDifference);


function updateMonthDifference() {
  if (
    InputDay.value !== "" &&
    inputMonth.value !== "" &&
    inputYear.value !== "" &&
    InputDay.value >= 1 &&
    InputDay.value <= 31 &&
    inputMonth.value >= 1 &&
    inputMonth.value <= 12 &&
    inputYear.value <= currentDate.getFullYear()
  ) {
    let birthDate = new Date(inputYear.value, inputMonth.value - 1, InputDay.value);

    let differenceInTime = currentDate.getTime() - birthDate.getTime();

    let differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

    let remainingDays = differenceInDays % 365;
    
    let differenceInMonths = Math.floor(remainingDays / 30);

    spanMonth.innerHTML = differenceInMonths;
    
  }
}
submitButton.addEventListener("click", updateMonthDifference);


// let dateString = `${inputYear.value}-${inputMonth.value}-${InputDay.value}`;
//   let dateStringValue = new Date(dateString);
//   console.log(dateStringValue);