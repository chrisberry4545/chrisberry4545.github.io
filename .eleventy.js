const Image = require('@11ty/eleventy-img');
const Terser = require('terser');
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('styles');
  eleventyConfig.addPassthroughCopy({ 'root': '.' });

  eleventyConfig.addShortcode('responsivePicture', async (
    src,
    alt,
    className,
    dataAttribute,
    options
  ) => {
    if (alt === undefined) {
      throw new Error(`Missing \`alt\` on responsivePicture from: ${src}`);
    }

    const stats = await Image(src, {
      outputDir: 'images/processed/',
      urlPath: '/images/processed',
      widths: [100, 600, 800, 1200],
      ...options
    });
    const lowestSrc = stats.jpeg[0];
    const sizes = '(min-width: 640px) 500px, 100vw';

    return `<picture class='${className}' ${dataAttribute ? `${dataAttribute}=""` : ''}>
      ${Object.values(stats).map(imageFormat => {
      return `  <source type='image/${imageFormat[0].format}' srcset='${imageFormat.map(entry => `${entry.url} ${entry.width}w`).join(',')}' sizes=${sizes}>`;
    }).join('\n')}
        <img
          alt='${alt}'
          src='${lowestSrc.url}'>
      </picture>`;
  });

  eleventyConfig.addPassthroughCopy('images/processed');
  eleventyConfig.addPassthroughCopy('images/open-graph');
  eleventyConfig.addPassthroughCopy('scripts');
  eleventyConfig.addPassthroughCopy('robots.txt');

  eleventyConfig.addFilter('jsmin', function (code) {
    let minified = Terser.minify(code);
    if (minified.error) {
      console.log('Terser error: ', minified.error);
      return code;
    }

    return minified.code;
  });

  eleventyConfig.addFilter('reversed', function (data) {
    return data.slice().reverse();
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj)
      .toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "http://chrisberry4545.github.io/",
    },
  });
};
