import dotenv from 'dotenv';
import path from 'path';

/**
 * Single source of truth for environment configuration. Loaded once, here,
 * rather than each consumer reading `process.env.X` directly — as the
 * suite grows past a handful of variables (or gains named environment
 * profiles: dev/staging/prod), this is the one place that changes.
 */
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

export interface Env {
  /** Origin of the admin panel under test. */
  baseUrl: string;
  /** Test account credentials. Optional: consumers decide how to react when absent (see tests/setup/auth.setup.ts). */
  adminEmail?: string;
  adminPassword?: string;
}

export const env: Env = {
  baseUrl: process.env.BASE_URL || 'https://dev.admin.avtoikonom.com',
  adminEmail: process.env.ADMIN_EMAIL,
  adminPassword: process.env.ADMIN_PASSWORD,
};

/** Where the authenticated browser session (cookies + localStorage) is cached between the "setup" project and every test project that depends on it. */
export const STORAGE_STATE_PATH = path.resolve(__dirname, '..', 'playwright', '.auth', 'user.json');
