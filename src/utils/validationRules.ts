type ValidationRule = (
  value: string | File | null,
  confirmPassword?: string,
) => string | null;

export const validationRules: {
  [key: string]: ValidationRule;
} = {
  name: (value) => {
    if (typeof value !== 'string') return 'Invalid name';
    if (!value) return 'Name is required';
    if (!/^[A-ZА-ЯЁ]/.test(value))
      return 'Name must start with an uppercase letter';
    return null;
  },
  age: (value) => {
    if (typeof value !== 'string') return 'Invalid age';
    if (!value) return 'Age is required';
    if (!/^[0-9]+$/.test(value)) return 'Age must be a number';
    if (Number(value) < 0) return 'Age must not be negative';
    return null;
  },
  email: (value) => {
    if (typeof value !== 'string') return 'Invalid email';
    if (!value) return 'Email is required';
    if (!/\S+@\S+\.\S+/.test(value)) return 'Email is invalid';
    return null;
  },
  password1: (value) => {
    if (typeof value !== 'string') return 'Invalid password';
    if (!value) return 'Password is required';
    if (value.length < 6) return 'Password must be at least 6 characters';
    if (!/[A-ZА-ЯЁ]/.test(value))
      return 'Password must contain at least one uppercase letter';
    if (!/[a-zа-яё]/.test(value))
      return 'Password must contain at least one lowercase letter';
    if (!/[0-9]/.test(value))
      return 'Password must contain at least one number';
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value))
      return 'Password must contain at least one special character';
    return null;
  },
  password2: (value, confirmPassword) => {
    if (typeof value !== 'string') return 'Invalid confirmation password';
    if (!value) return 'Confirmation password is required';
    if (value !== confirmPassword) return 'Passwords do not match';
    return null;
  },
  gender: (value) =>
    typeof value === 'string' && value ? null : 'Gender is required',
  terms: (value) =>
    typeof value === 'string' && value ? null : 'You must accept the terms',
  picture: (value) => {
    if (!value) return 'Picture is required';

    if (!(value instanceof File)) {
      return 'Invalid file';
    }

    const file = value;

    const allowedExtensions = ['image/png', 'image/jpeg'];
    const maxSizeInMB = 2;
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

    if (!allowedExtensions.includes(file.type)) {
      return 'Picture must be in PNG or JPEG format';
    }

    if (file.size > maxSizeInBytes) {
      return `Picture size must not exceed ${maxSizeInMB} MB`;
    }

    return null;
  },
  country: (value) =>
    typeof value === 'string' && value ? null : 'Country is required',
};
