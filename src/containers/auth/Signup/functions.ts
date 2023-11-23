import { validEmail } from '../../../utils/validation';

export function validateForm(
  name: string,
  email: string,
  password: string,
  confirmPassword: string
): boolean {
  return (
    name.length > 3 &&
    validEmail(email) &&
    password.length >= 6 &&
    password === confirmPassword
  )
}