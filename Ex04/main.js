const ErrorMessages = 
{
    NAME_TOO_SHORT:          "Name must be at least 2 characters.",
    SALARY_OUT_OF_RANGE:     "Salary range is 10,000–16,000.",
    BIRTHDAY_REQUIRED:       "Birthday date cannot be null value.",
    PHONE_INVALID_LENGTH:    "Phone must be 10 digits long."
}
const Validate = function()
{
    const nameInput = document.getElementById("nameInput")
    const salaryInput = document.getElementById("salaryInput")
    const birthdayInput = document.getElementById("birthdayInput")
    const phoneInput = document.getElementById("phoneInput")
    const errorMsg = document.getElementById("errorMessage")
    if(nameInput.value.length < 2)
    {
        ShowError(errorMsg, ErrorMessages.NAME_TOO_SHORT)
    }
    else if(Number(salaryInput.value) < 10000 || salaryInput.value > 16000)
    {
        ShowError(errorMsg, ErrorMessages.SALARY_OUT_OF_RANGE)
    }
    else if(birthdayInput.value === null)
    {
        ShowError(errorMsg, ErrorMessages.BIRTHDAY_REQUIRED)

    }
    else if(phoneInput.value.length != 10)
    {
        ShowError(errorMsg, ErrorMessages.PHONE_INVALID_LENGTH)
    }
}
const ShowError = function(errorMsg, text)
{
    errorMsg.textContent = text;
    errorMsg.classList.toggle("hidden");
}
document.addEventListener('DOMContentLoaded', () => {
const submitButton = document.getElementById("submitBtn")
submitButton.addEventListener("click", Validate);
})