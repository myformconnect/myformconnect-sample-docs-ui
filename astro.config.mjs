import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'MyFormCapture',
      favicon: '/favicon.png',
      logo: {
        src: './public/favicon.png',
      },
      components: {
        Header: './src/components/Header.astro',
        PageTitle: './src/components/PageTitle.astro',
      },
      expressiveCode: {
        themes: ['github-dark'],
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Welcome', link: '/' },
          ],
        },
        {
          label: 'Integrations',
          items: [
            { label: 'HTML Form Integration', link: '/guides/html-form/' },
            { label: 'React Integration', link: '/guides/react/' },
            { label: 'Wix Integration', link: '/guides/wix/' },
          ],
        },
        {
          label: 'More Guides',
          items: [
            { label: 'Webhooks', link: '/#webhooks', badge: { text: 'Soon', variant: 'caution' } },
            { label: 'Booking Widget', link: '/#booking-widget', badge: { text: 'Soon', variant: 'caution' } },
            { label: 'File Upload', link: '/#file-upload', badge: { text: 'Soon', variant: 'caution' } },
            { label: 'WordPress', link: '/#wordpress', badge: { text: 'Soon', variant: 'caution' } },
          ],
        },
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      pagination: false,
    }),
  ],
});
