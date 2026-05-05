# Editorial One-Page Portfolio (React + Vite)

Prototype one-page portfolio with a minimal/editorial style and small central media column.

## Tech

- React + Vite
- Plain CSS (easy to customize)

## Project Structure

```text
portfolio/
  public/
    media/                 # put your real media here
  src/
    components/
      ExpandedGallery.jsx
      Header.jsx
      MediaRenderer.jsx
      ProjectFeed.jsx
      ProjectItem.jsx
    data/
      projects.js
    App.jsx
    main.jsx
    styles.css
  index.html
  package.json
  vite.config.js
```

## Install & Run

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Replace Mock Data With Real Projects

Edit `src/data/projects.js`:

- `title`: project name
- `url`: website link
- `cover`: first media in the feed
- `gallery`: array of image/video items

Recommended local paths:

- Images: `/media/<project>/01.jpg`
- Videos: `/media/<project>/02.mp4`

Then place files in `public/media/...`.

You can start from the ready template file: `src/data/projects.template.js`.

## Interaction Included

- Click a feed media -> expands to large gallery view
- Click left half -> previous media
- Click right half -> next media
- Click outside expanded media -> close
- `Escape` -> close
- `ArrowLeft` / `ArrowRight` -> navigate
- Videos are rendered muted, looped, autoplay (with `playsInline`)

## Notes

- Mobile keeps media intentionally small (not full width), around one-third viewport width.
- Header is fixed and always visible.
- Style is minimal with wide whitespace and subtle transitions.
