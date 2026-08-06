import { headers } from 'next/headers';
import crypto from 'crypto';

export async function getClientIdentifier(): Promise<string> {
  const headerList = await headers();
  const rawIp = headerList.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';
  const userAgent = headerList.get('user-agent') || 'unknown';
  const salt = process.env.ANON_SALT || 'fallback-salt-key';

  return crypto
    .createHash('sha256')
    .update(`${rawIp}-${userAgent}-${salt}`)
    .digest('hex');
}
