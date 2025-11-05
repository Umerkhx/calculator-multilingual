export async function GET() {
    const languages = ['home', 'fr', 'es', 'de', 'pt', 'ru', 'it', 'tr', 'zh', 'ar', 'hi', 'ur'];
    const baseUrl = 'https://calyx-mme.vercel.app';
    const lastmod = new Date().toISOString().split('T')[0];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${languages.map(lang => `  <url>
    <loc>${baseUrl}/sitemap_${lang}.xml</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1</priority>
  </url>`).join('\n')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}