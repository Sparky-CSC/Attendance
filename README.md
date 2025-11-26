# Attendance TOTP System v3 (Firebase + Per-Student TOTP)

This package contains:

- index.html  – React admin app + display mode + student check-in page
- student-app.html – PWA-capable per-student rolling-code app (reads secrets from Firebase)
- manifest.json – PWA manifest for the student app
- service-worker.js – basic service worker
- totp_example.js – small standalone TOTP helper (optional)

## IMPORTANT

You MUST replace the placeholder Firebase config in both:

- index.html
- student-app.html

Search for:

    const firebaseConfig = { /* TODO: FILL IN YOUR FIREBASE CONFIG */ };

and paste in your actual config from the Firebase console (Web app).

Firestore rules should at minimum allow reads of the `students` collection, and controlled writes for your admin interface.
