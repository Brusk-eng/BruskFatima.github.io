# Brusk & Fatima Wedding Invitation

A luxury animated digital wedding invitation for **Brusk & Fatima**, built with HTML, CSS, and vanilla JavaScript. Designed for free hosting on GitHub Pages.

## Features

- Animated envelope opening with burgundy wax seal
- Islamic blessing section
- Live countdown timer (Asia/Baghdad timezone)
- Schedule of events timeline
- Venue section with embedded Google Maps
- RSVP via WhatsApp
- Photo gallery with elegant placeholders
- Dress code and gift note
- Floating music button
- Smooth animations, petals, and sparkles
- Mobile-first luxury design
- Full accessibility support

## How to Run Locally

1. Download or clone this repository
2. Open `index.html` in your web browser (double-click or drag into Chrome, Safari, or Firefox)

No build step, npm, or server required.

## How to Host Free on GitHub Pages

1. Create a [GitHub account](https://github.com) if you don't have one

2. Create a new repository named:

   ```
   USERNAME.github.io
   ```

   Example: `BruskFatima.github.io`

3. Upload these files to the repository:

   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - `assets/` folder (with your photos and music)

4. Commit the changes

5. Go to your repository on GitHub → **Settings** → **Pages**

6. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)

7. Click **Save**

8. Wait 2 to 5 minutes for deployment

9. Open your site at:

   ```
   https://USERNAME.github.io
   ```

   Example: `https://BruskFatima.github.io`

## How to Edit

All main settings are in `script.js` at the top in the `CONFIG` object:

```javascript
const CONFIG = {
  coupleName: "Brusk & Fatima",
  groomName: "Brusk",
  brideName: "Fatima",
  weddingDateText: "Thursday, 09 July 2026",
  countdownDate: "2026-07-09T19:00:00+03:00",
  venueName: "Divan Erbil Hotel",
  venuePlace: "Ballroom",
  venueAddress: "Gulan Street, Erbil, Kurdistan Region, Iraq",
  mapUrl: "https://maps.google.com/?q=Divan+Erbil+Hotel",
  whatsappNumber: "9647500000000"
};
```

| What to change | Where |
|----------------|-------|
| Couple names | `CONFIG.coupleName`, `groomName`, `brideName` |
| Wedding date | `CONFIG.weddingDateText`, `countdownDate` |
| Venue | `CONFIG.venueName`, `venuePlace`, `venueAddressLines` in `script.js` |
| Google Maps link | `CONFIG.mapUrl` |
| WhatsApp RSVP number | `CONFIG.whatsappNumber` (no + sign) |
| Hero photo | Replace `assets/hero.jpg` |
| Gallery photos | Replace `assets/photo1.jpg` through `photo6.jpg` |
| Background music | Replace `assets/music.mp3` |

If images or music are missing, the site shows elegant gradient placeholders and continues to work.

## Wedding Details

- **Date:** Thursday, 09 July 2026 at 7:00 PM (Asia/Baghdad)
- **Venue:** Divan Erbil Hotel, Ballroom
- **Address:** Gulan Street, Erbil, Kurdistan Region, Iraq

## File Structure

```
/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── hero.jpg
    ├── photo1.jpg
    ├── photo2.jpg
    ├── photo3.jpg
    ├── photo4.jpg
    ├── photo5.jpg
    ├── photo6.jpg
    └── music.mp3
```

## Browser Support

Works on modern browsers: Chrome, Safari, Firefox, Edge, and mobile browsers on iOS and Android.

---

With love, **Brusk & Fatima**
