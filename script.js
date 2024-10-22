const inputString = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultBox = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    
    // check for empty string
    if (inputString.value === ""){
        alert("Please input a value");
        return null;
    }

    // proceed with checking palindrome
    renderResult(checkPalindrome());
})

const cleanInputString = (str) => {

    // exclude all non-word characters and _
    // word characters are: digits, alphabets, _ 
    const regex = /[\W_]/g; 

    const cleanedStr = str.replace(regex, "");
    return cleanedStr;
}

const checkPalindrome = () => {

    const str = cleanInputString(inputString.value);
    const lowercaseStr = str.toLowerCase();

    // split each character in the str, reverse then join them into a new str
    const reversedStr = lowercaseStr.split("").reverse().join("");
    
    // return true if it is palindrome, otherwise, false
    return lowercaseStr === reversedStr ? true : false;
}

const renderResult = (isPalindrome) => {

    const result = isPalindrome ? "is" : "is not";
    const resultHTML = `<span class="bold">${inputString.value}</span> ${result} a palindrome.`;

    resultBox.innerHTML = resultHTML;
}
