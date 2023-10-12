export const checkValidData = (email, password, fullName) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isFullNameValid = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(fullName);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Please enter valid password";
  if (!isFullNameValid && fullName !== undefined)
    return "Please enter valid name";

  return null;
};
