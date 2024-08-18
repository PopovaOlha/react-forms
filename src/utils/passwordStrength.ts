export const passwordStrength = (password: string): string => {
  let strength = 'Weak';
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const criteriaMet = [hasUpper, hasLower, hasNumber, hasSpecial].filter(
    Boolean,
  ).length;

  if (password.length >= 8 && criteriaMet === 4) {
    strength = 'Strong';
  } else if (password.length >= 6 && criteriaMet >= 3) {
    strength = 'Moderate';
  }

  return strength;
};
