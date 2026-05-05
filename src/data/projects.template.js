/**
 * TEMPLATE PROGETTI PORTFOLIO
 *
 * Come usarlo:
 * 1) Crea le cartelle media in public/media/<project-id>/
 * 2) Duplica gli oggetti qui sotto e aggiorna title/url/src/alt
 *    Opzionali: url (se assente, in header non compare ↗ sul titolo),
 *    description (testo sotto il titolo con la lightbox aperta),
 *    year (numero o stringa)
 * 3) Copia il contenuto finale in src/data/projects.js
 */

export const projects = [
  {
    id: "project-1",
    title: "Project One",
    url: "https://example.com/project-one",
    description: "Breve descrizione (opzionale).",
    year: 2026,
    cover: {
      type: "image", // "image" | "video"
      src: "/media/project-1/cover.jpg",
      alt: "Project One cover"
    },
    gallery: [
      {
        type: "image",
        src: "/media/project-1/01.jpg",
        alt: "Project One image 1"
      },
      {
        type: "video",
        src: "/media/project-1/02.mp4",
        alt: "Project One video 1"
      },
      {
        type: "image",
        src: "/media/project-1/03.jpg",
        alt: "Project One image 2"
      }
    ]
  },
  {
    id: "project-2",
    title: "Project Two",
    url: "https://example.com/project-two",
    cover: {
      type: "video",
      src: "/media/project-2/cover.mp4",
      alt: "Project Two cover video"
    },
    gallery: [
      {
        type: "video",
        src: "/media/project-2/01.mp4",
        alt: "Project Two video 1"
      },
      {
        type: "image",
        src: "/media/project-2/02.jpg",
        alt: "Project Two image 1"
      },
      {
        type: "image",
        src: "/media/project-2/03.webp",
        alt: "Project Two image 2"
      }
    ]
  },
  {
    id: "project-3",
    title: "Project Three",
    url: "https://example.com/project-three",
    cover: {
      type: "image",
      src: "/media/project-3/cover.png",
      alt: "Project Three cover"
    },
    gallery: [
      {
        type: "image",
        src: "/media/project-3/01.png",
        alt: "Project Three image 1"
      },
      {
        type: "image",
        src: "/media/project-3/02.jpg",
        alt: "Project Three image 2"
      }
    ]
  }
];

