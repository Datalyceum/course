# datalyceum.com

The course website, built with [Astro Starlight](https://starlight.astro.build). Every push to `main` that changes `site/` deploys it to GitHub Pages.

## Run it locally

```
cd site
npm install
npm run dev
```

## Add a new lesson

1. Write the page in `src/content/docs/season-N/lesson-N-M-short-name.mdx`. Copy the latest lesson page as a starting point.
2. Put its diagrams in `src/assets/lNM/` and the 1200 x 630 share image in `public/og/lNM.jpg`.
3. Copy the share image to `src/assets/thumbs/lNM.jpg`. The cards on the home page and the season page use it.
4. End the page with the `LessonLinks` component. Set `solutions` once the solutions are published:

   ```mdx
   <LessonLinks folder="00-orientation/03-how-machines-learn" thread={5}
     post="https://datalyceum.substack.com/p/lesson-03-how-machines-learn"
     notebook="first-model.ipynb" data solutions />
   ```

5. Add a `ContentCard` for it on the home page (`src/content/docs/index.mdx`) and on the season page. Move the `badge="New"` to the newest card, and point the hero card on the home page at the new lesson.

## Add a new picture

1. Write the page in `src/content/docs/pictures/NN-short-name.mdx`, copying the latest one.
2. Put the picture in `src/assets/pictures/pNN.png`, the full-size download in `public/pictures/`, and the share image in `public/og/pictures-NN.jpg` and `src/assets/thumbs/pNN.jpg`.
3. Add a `ContentCard` on the home page and on `pictures/index.mdx`, newest first, and move the `badge="New"`.

## Components

| Component | What it does |
|---|---|
| `ContentCard` and `CardRow` | Cards with a thumbnail, for lessons and pictures |
| `LessonLinks` | Quiz, homework, solutions, thread, notebook, data and Substack links at the end of a lesson |
| `SubscribeBand` | The dark "get each lesson by email" band |

Brand colours and fonts are in `src/styles/custom.css`.
