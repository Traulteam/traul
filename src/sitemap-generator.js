// sitemap-generator.js

import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import fs from 'fs';

async function generateSitemap() {
  const hostname = 'https://www.traul.in'; // Replace with your domain

  // Define your static routes
  const staticLinks = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about-us', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact-us', changefreq: 'monthly', priority: 0.8 },
    { url: '/download', changefreq: 'monthly', priority: 0.7 },
    { url: '/booking', changefreq: 'monthly', priority: 0.9 },
    { url: '/privacy', changefreq: 'monthly', priority: 0.5 },
    { url: '/terms', changefreq: 'monthly', priority: 0.5 },
    { url: '/refund', changefreq: 'monthly', priority: 0.5 },
    { url: '/cancel', changefreq: 'monthly', priority: 0.5 },
    { url: '/disclaimer', changefreq: 'monthly', priority: 0.5 },
  ];

  // Vijayawada service pages
  const vijayawadaServices = [
    { url: '/vijayawada/office-shifting', changefreq: 'monthly', priority: 0.8 },
    { url: '/vijayawada/appliance-moving', changefreq: 'monthly', priority: 0.8 },
    { url: '/vijayawada/furniture-transport', changefreq: 'monthly', priority: 0.8 },
    { url: '/vijayawada/house-shifting', changefreq: 'monthly', priority: 0.8 },
    { url: '/vijayawada/mini-truck-booking', changefreq: 'monthly', priority: 0.8 },
    { url: '/vijayawada/parcel-delivery', changefreq: 'monthly', priority: 0.8 },
  ];
  
  const allLinks = [...staticLinks, ...vijayawadaServices];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname });

  // Use streamToPromise to wait for the sitemap to be generated
  const sitemap = await streamToPromise(Readable.from(allLinks).pipe(stream))
    .then(data => data.toString());
  
  // Write the sitemap to the public directory
  fs.writeFileSync('./public/sitemap.xml', sitemap);
  console.log('✅ sitemap.xml generated successfully!');
  console.log(`Generated ${allLinks.length} URLs`);
}

generateSitemap().catch(console.error);