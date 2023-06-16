
let adviceURL = "https://api.adviceslip.com/advice";
let adviceHeadingRandom = document.getElementById("adviceHeadingRandom");
let adviceTextRandom = document.getElementById("adviceTextRandom");
let adviceButton = document.getElementById("adviceButton");

const generateAdvice = async () => {
  try {
    const response = await fetch(adviceURL);
    let responseJson = await response.json();
    console.log(responseJson);
    adviceTextRandom.innerText = `"${responseJson.slip.advice}"`;
    adviceHeadingRandom.innerText =`ADVICE #${responseJson.slip.id}`;
  } catch (error) {
    console.log(error);
  }
};
adviceButton.addEventListener("click", generateAdvice);
window.addEventListener("load", generateAdvice);
   