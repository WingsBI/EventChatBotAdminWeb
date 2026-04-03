import Cookies from 'js-cookie';

export interface AuthUser {
  sub: string;
  email: string;
  first_name: string;
  last_name: string;
  roleid: number;
  rolename: string;
  exp: number;
}

/** Base64-url decode the JWT payload — no library needed */
export function decodeJwt(token: string): AuthUser | null {
  try {
    const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64)) as AuthUser;
  } catch {
    return null;
  }
}

/** Read + decode the auth_token cookie */
export function getAuthUser(): AuthUser | null {
  const token = Cookies.get('auth_token');
  if (!token) return null;
  return decodeJwt(token);
}

/** "Preyas Magdum" → "PM" */
export function getInitials(user: AuthUser): string {
  const f = user.first_name?.[0] ?? '';
  const l = user.last_name?.[0] ?? '';
  return (f + l).toUpperCase() || user.email[0].toUpperCase();
}

/** "Preyas Magdum" */
export function getFullName(user: AuthUser): string {
  return `${user.first_name ?? ''} ${user.last_name ?? ''}`.trim() || user.email;
}

/** "system-admin" → "System Admin" */
export function formatRole(role: string): string {
  return role
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
