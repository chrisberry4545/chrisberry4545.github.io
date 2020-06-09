const Image = require('@11ty/eleventy-img');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('styles');
  eleventyConfig.addPassthroughCopy({ 'root': '.' });

  eleventyConfig.addShortcode('responsivePicture', async (
    src,
    alt,
    className,
    options
  ) => {
    if (alt === undefined) {
      throw new Error(`Missing \`alt\` on responsivePicture from: ${src}`);
    }

    const stats = await Image(src, {
      outputDir: 'images/processed/',
      urlPath: '/images/processed',
      widths: [600, 800, 1200],
      ...options
    });
    const lowestSrc = stats.jpeg[0];
    const sizes = '(min-width: 640px) 500px, 100vw';

    return `<picture class='${className}'>
      ${Object.values(stats).map(imageFormat => {
        return `  <source type='image/${imageFormat[0].format}' srcset='${imageFormat.map(entry => `${entry.url} ${entry.width}w`).join(',')}' sizes=${sizes}>`;
      }).join('\n')}
        <img
          alt='${alt}'
          src='${lowestSrc.url}'>
      </picture>`;
    });

  eleventyConfig.addPassthroughCopy('images/processed');
};
