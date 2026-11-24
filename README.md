# My Website — React Educational Website

A responsive, dark-themed educational landing page built with React and Vite. It is configured for free GitHub Pages hosting using GitHub Actions.

## Requirements for local preview

- Node.js 20 or newer
- npm (included with Node.js)

## Run on your computer

1. Install Node.js from https://nodejs.org/
2. Extract this project ZIP.
3. Open a terminal inside the `my-website` folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Publish free on GitHub Pages

1. Sign in to GitHub and create a **new public repository** named `my-website` (or any name you prefer).
2. Extract the ZIP file on your computer.
3. Open the repository on GitHub and choose **Add file → Upload files**.
4. Upload the *contents* of this project folder, not the outer ZIP and not an extra nested `my-website` folder. Make sure `.github/workflows/deploy.yml` is included. If the `.github` folder is hidden, enable showing hidden files in your file picker.
5. Commit the upload to the `main` branch.
6. In the repository, open **Settings → Pages**.
7. Under **Build and deployment → Source**, select **GitHub Actions**.
8. Open the **Actions** tab. Wait for the “Deploy React site to GitHub Pages” workflow to finish with a green check mark.
9. Your site will be available at:

   `https://YOUR-GITHUB-USERNAME.github.io/my-website/`

   Replace `YOUR-GITHUB-USERNAME` with your GitHub username. If you chose a different repository name, use that name in the URL.

Whenever you upload changes to the `main` branch, GitHub Actions will automatically rebuild and publish the website.

## Customize the site

- Edit page text, subject cards, FAQ entries and contact recipient in `src/App.jsx`.
- Edit colors, spacing, typography and responsive layout in `src/styles.css`.
- Change the email address in the `recipient` constant in `src/App.jsx`. Also update the visible `hello@example.com` text in the contact section.
- Update the page title and description in `index.html`.

## Important: contact form

This starter project has no backend or email service. Submitting the form opens the visitor's default email application with a pre-filled message; the visitor must send it there. For a form that submits directly from the website, connect a form service or build a secure backend. Never put private API keys in frontend code.

## Project structure

```text
my-website/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
