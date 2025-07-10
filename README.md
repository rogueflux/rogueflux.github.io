# Electronics-Themed Portfolio Website

Welcome to your dynamic, electronics-inspired portfolio! This site is designed for easy deployment on GitHub Pages and showcases your résumé in a structured, visually engaging format.

## 📁 Project Structure

| File/Folder         | Purpose                                                      |
|---------------------|-------------------------------------------------------------|
| `index.html`        | Main website file (homepage)                                |
| `style.css`         | Custom styles for electronics/PCB look & feel               |
| `app.js`            | Résumé data, dynamic rendering, photo upload, interactions  |
| `assets/`           | Folder for images (background GIF, profile photo, etc.)     |
| `README.md`         | This guide                                                  |

## 🚀 Features

- **Electronics Aesthetic:** Neon accents, animated circuit-board background (GIF), and monospace fonts.
- **Dynamic Content:** All résumé data is in `app.js` for easy editing.
- **Profile Photo Upload:** Users can preview a new profile image locally.
- **Smooth Navigation:** Section highlights and smooth scrolling.
- **Contact Form:** Sends messages via Formspree (update endpoint in `app.js`).
- **Responsive Design:** Looks great on desktop and mobile.

## 🏗️ Setup & Deployment

1. **Create Your Repository**
   - Name it `<username>.github.io` for personal sites, or any name for project sites.

2. **Upload Files**
   - Add `index.html`, `style.css`, `app.js`, and the `assets` folder (with your background GIF and profile photo).

3. **Publish with GitHub Pages**
   - Go to **Settings → Pages**.
   - Set the source branch (usually `main`) and root folder (`/`).
   - Save. Your site will be live at `https://<username>.github.io/`.

## 🎨 Customization

- **Edit Résumé Content:**  
  Open `app.js` and update the `dataJson` object. Each section (summary, skills, education, experience, projects, competitions, courses, contacts) is clearly labeled for easy editing.

- **Change Background or Profile Photo:**  
  Replace the GIF or profile image in the `assets` folder. Update file names in your code if needed.

- **Styling Tweaks:**  
  Modify `style.css` for colors, fonts, or layout changes.

## 🖼️ Assets

- **Background GIF:** Place in `assets/background.gif` (or `assets/images/background.gif`).
- **Profile Photo:** Place in `assets/profile.jpg` (or `assets/images/profile.jpg`).

## 📝 Editing Sections

- **Projects & Competitions:**  
  Add GitHub links and tool badges in the relevant arrays in `app.js`.

- **Courses:**  
  Add certificate URLs directly in the courses array for clickable links.

- **Contacts:**  
  Update your email, LinkedIn, or other contact details in the data object.

## 🛠️ Tips

- **No build tools required:** Just edit, commit, and refresh.
- **Avoid folders starting with `_`** (like `_assets`)—GitHub Pages may not serve these.
- **Do not use Git LFS** for images; commit them directly.

## 📬 Contact

For questions or to report issues, open an issue in your repository or use the contact form on your site.

Enjoy your new electronics-themed portfolio!  
Fork, tweak, and make it your own.

