// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const SITE = 'https://datalyceum.com';

export default defineConfig({
  site: SITE,
  integrations: [
    starlight({
      title: 'Datalyceum',
      description:
        'A free course on AI, data science and big data, with Microsoft Azure. Whiteboard video lessons, notes, quizzes and homework, from zero.',
      logo: { light: './src/assets/logo.svg', dark: './src/assets/logo-dark.svg', alt: 'Datalyceum', replacesTitle: true },
      favicon: '/favicon.svg',
      customCss: [
        '@fontsource/sora/600.css',
        '@fontsource/inter/400.css',
        '@fontsource/inter/500.css',
        '@fontsource/inter/600.css',
        './src/styles/custom.css',
      ],
      social: [
        { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@datalyceum' },
        { icon: 'substack', label: 'Substack', href: 'https://datalyceum.substack.com' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/datalyceum/course' },
      ],
      editLink: { baseUrl: 'https://github.com/datalyceum/course/edit/main/site/' },
      head: [
        { tag: 'meta', attrs: { property: 'og:image', content: `${SITE}/og/default.jpg` } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
      ],
      sidebar: [
        { label: 'Start here', slug: 'start-here' },
        { label: 'Course map', slug: 'course-map' },
        {
          label: 'Season 0: Orientation',
          items: [{ autogenerate: { directory: 'season-0' } }],
        },
        {
          label: 'Learn AI with Pictures',
          items: [{ autogenerate: { directory: 'pictures' } }],
        },
        { label: 'About', slug: 'about' },
      ],
    }),
  ],
});
