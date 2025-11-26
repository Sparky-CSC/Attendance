// Example TOTP (Time-based One-Time Password) integration placeholder
// This file demonstrates how to integrate TOTP into a web login system.
// Replace this with your application's full code and logic.

import totp from 'otplib';

export function generateTOTP(secret) {
    return totp.authenticator.generate(secret);
}

export function verifyTOTP(token, secret) {
    return totp.authenticator.check(token, secret);
}

// Usage:
// const secret = totp.authenticator.generateSecret();
// const code = generateTOTP(secret);
// const isValid = verifyTOTP(code, secret);
