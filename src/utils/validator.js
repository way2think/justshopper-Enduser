function isValidEmail(email) {
  // Regular expression for a valid email address
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  // Test the email against the regex pattern
  return emailRegex.test(email);
}

function isValidPassword(password) {
  // Password must be 6 characters or more in length
  const passwordRegex = /^.{6,}$/;

  // Test the password against the regex pattern
  return passwordRegex.test(password);
}

function isValidName(name) {
  //Name contains letter and space(no space in beginning and ending)
  const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;

  //Test the name against the regex pattern
  return nameRegex.test(name);
}

function isValidPhoneNumber(phoneNumber) {
  // contains only 10 digit number
  const phoneNumberRegex = /^\d{10}$/;

  //Test the Phone number against the regex pattern
  return phoneNumberRegex.test(phoneNumber);
}

function isValidAddress(address) {
  const addressRegex = /^[a-zA-Z0-9\s\/.,#'-]+$/;

  //Test the address against the regex pattern
  return addressRegex.test(address);
}

function isValidNumber(num) {
  // contains only 10 digit number
  const numberRegex = /^\d+$/;

  //Test the Phone number against the regex pattern
  return numberRegex.test(num);
}

export {
  isValidEmail,
  isValidPassword,
  isValidAddress,
  isValidPhoneNumber,
  isValidName,
  isValidNumber,
};
