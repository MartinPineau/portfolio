import { googleLogout } from "@react-oauth/google";
import { UserSchema, type User } from "../types";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;
const AUTHORIZED_EMAIL = import.meta.env.VITE_AUTHORIZED_EMAIL as string;

export { GOOGLE_CLIENT_ID };

export function parseGoogleCredential(credential: string): User | null {
  try {
    const payload = JSON.parse(atob(credential.split(".")[1]));
    const result = UserSchema.safeParse({
      id: payload.sub,
      name: payload.name,
      email: payload.email,
      avatarUrl: payload.picture,
    });
    return result.success ? result.data : null;
  } catch {
    return null;
  }
}

export function isAuthorizedEmail(email: string): boolean {
  return email.toLowerCase() === AUTHORIZED_EMAIL.toLowerCase();
}

export function logout(): void {
  googleLogout();
}
