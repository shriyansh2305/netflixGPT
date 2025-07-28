export const checkValidData = (email, password, name, isSignupForm) => {
  if (isSignupForm) {
    if (!name.trim()) return "Name is required";
    if (name.length < 3) return "Name must be at least 3 characters";
  }
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isEmailValid) return "Email is not Valid";
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if (!isPasswordValid) return "Password is not Valid";
  // returning null means the email and password are valid
  return null;
};
