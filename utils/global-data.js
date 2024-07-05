export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'TopMobilePrices';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'TopMobilePrices | Latest Mobile Prices and Specs in Pakistan';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';
  const description = process.env.BLOG_DESCRIPTION
    ? decodeURI(process.env.BLOG_DESCRIPTION)
    : 'TopMobilePrices provides the latest mobile prices and detailed specifications in Pakistan.';

  return {
    name,
    blogTitle,
    footerText,
    description,
  };
};
