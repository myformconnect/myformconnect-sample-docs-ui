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
        Sidebar: './src/components/Sidebar.astro',
      },
      expressiveCode: {
        themes: ['github-dark'],
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          collapsed: false,
          items: [
            { label: 'Overview', link: '/' },
            { label: 'Integrating HTML Forms', link: '/guides/html-form/' },
            { label: 'Using React SDK', link: '/guides/react/' },
            { label: 'API Quickstart', link: '/guides/wix/' },
          ],
        },
        {
          label: 'Features',
          collapsed: false,
          items: [
            { label: 'Domain Configuration', link: '/#explore-the-platform' },
            { label: 'Form Configuration', link: '/#explore-the-platform' },
            { label: 'Loader.js', link: '/#explore-the-platform' },
            { label: 'Booking Widget', link: '/#explore-the-platform' },
            { label: 'File Uploads', link: '/#explore-the-platform' },
            { label: 'Spam & CAPTCHA', link: '/#explore-the-platform' },
            { label: 'Autoresponder Emails', link: '/#explore-the-platform' },
          ],
        },
        {
          label: 'Integrations',
          collapsed: false,
          items: [
            { label: 'Frameworks', link: '/#popular-integrations' },
            { label: 'CMS Platforms', link: '/#popular-integrations' },
            { label: 'Website Builders', link: '/#popular-integrations' },
            { label: 'No-code Tools', link: '/#popular-integrations' },
            { label: 'Automation & Webhooks', link: '/#popular-integrations' },
          ],
        },
        {
          label: 'Deployment',
          collapsed: false,
          items: [
            { label: 'Static Sites', link: '/#more-guides' },
            { label: 'GitHub Pages', link: '/#more-guides' },
            { label: 'Vercel', link: '/#more-guides' },
            { label: 'Netlify', link: '/#more-guides' },
            { label: 'Cloudflare Pages', link: '/#more-guides' },
          ],
        },
        {
          label: 'AI & No-Backend Forms',
          collapsed: false,
          items: [
            { label: 'Build Forms with AI', link: '/#from-form-to-action' },
            { label: 'HTML Contact Form', link: '/#from-form-to-action' },
            { label: 'Backend for AI Websites', link: '/#from-form-to-action' },
          ],
        },
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      pagination: false,
    }),
  ],
});
