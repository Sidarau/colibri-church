# Colibri Church — Deployment Log

Completed deployment steps for the Colibri Church project.

## 1. Firebase Configuration
- **Project Created**: `colibri-church-retreat-888`
- **Auth Service**: Enabled with Email/Password provider.
- **Web App**: Created (`Colibri Church Web App`).
- **SDK Configuration**: Saved to `.env.local` in project root.

### .env.local Configuration
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCCNn5x9DbL9HdUbOxa1MtWwTcR5FmUr4s
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=colibri-church-retreat-888.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=colibri-church-retreat-888
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=colibri-church-retreat-888.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=732805386766
NEXT_PUBLIC_FIREBASE_APP_ID=1:732805386766:web:84966fbd3ff9b7f786a25f
```

## 2. Firestore Setup
- **Database ID**: `(default)`
- **Region**: `us-central1`
- **Security Rules**: Deployed with specific rules for `users`, `applications`, and `medicalForms` collections. Admins (role: "admin") have full access, while users can read/modify their own data.

## 3. Netlify Setup
- **New Site Created**: `colibri-church` (Site ID: `9c05e2ea-f445-40da-bf89-49d2af75192f`)
- **Primary URL**: [http://colibri-church.netlify.app](http://colibri-church.netlify.app)

### Remaining Manual Steps:
1. **Push to GitHub**:
   - Create a repository on GitHub.
   - Run `git remote add origin YOUR_REPO_URL`.
   - Run `git push -u origin main`.
2. **Connect Netlify to GitHub**:
   - Go to [Netlify Dashboard](https://app.netlify.com/sites/colibri-church/overview).
   - In **Site configuration** -> **Build & deploy**, connect to your GitHub repository.
3. **Environment Variables**:
   - Add the 6 variables from the SDK config (listed above) to **Site setting** -> **Environment variables** in the Netlify dashboard.
4. **Admin Role**:
   - Once a user signs up, go to Firestore -> `users` collection -> find their document and manually set `role: "admin"`.
