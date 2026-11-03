// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const SITE = 'https://theaimasteryacademy.github.io';
const BASE = '/course';

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [
    starlight({
      title: 'The AI Mastery Academy',
      description:
        'A free course on AI, data science and big data, with Microsoft Azure. Whiteboard video lessons, notes, quizzes and homework, from zero.',
      logo: { src: './src/assets/logo.png', alt: 'The AI Mastery Academy' },
      favicon: '/favicon.png',
      customCss: [
        '@fontsource/shantell-sans/700.css',
        '@fontsource/shantell-sans/800.css',
        './src/styles/custom.css',
      ],
      social: [
        { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@TheAIMasteryAcademy' },
        { icon: 'substack', label: 'Substack', href: 'https://theaimasteryacademy.substack.com' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/TheAIMasteryAcademy/course' },
      ],
      editLink: { baseUrl: 'https://github.com/TheAIMasteryAcademy/course/edit/main/site/' },
      head: [
        { tag: 'meta', attrs: { property: 'og:image', content: `${SITE}${BASE}/og/default.jpg` } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
      ],
      sidebar: [
        { label: 'Start here', slug: 'start-here' },
        { label: 'Course map', slug: 'course-map' },
        {
          label: 'Season 0: Orientation',
          items: [{ autogenerate: { directory: 'season-0' } }],
        },
        { label: 'About', slug: 'about' },
      ],
    }),
  ],
});
