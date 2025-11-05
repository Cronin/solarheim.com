import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, isValidLocale } from '@/lib/i18n/config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname already has a valid locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If pathname already has a valid locale, continue
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // For default locale (de), no redirect needed - continue as is
  // This keeps German URLs without /de/ prefix for SEO continuity
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, images, etc.)
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*|sw.js|workbox-.*).*)',
  ],
};
