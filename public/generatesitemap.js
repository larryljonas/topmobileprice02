const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 0.3 },
  { url: '/posts/infinix-note-30-price', changefreq: 'daily', priority: 0.3 },
  { url: '/posts/infinix-note-12-price-in-pakistan', changefreq: 'daily', priority: 0.3 },
  // Add more URLs as needed
];

const generateSitemap = async () => {
  const sitemapStream = new SitemapStream({ hostname: 'https://topmobileprices.com/' });

  links.forEach(link => {
    sitemapStream.write(link);
  });

  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream);
  fs.writeFileSync('./public/sitemap.xml', sitemap.toString());
  console.log('Sitemap generated successfully!');
};

generateSitemap();
