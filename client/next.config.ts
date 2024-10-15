/** @type {import('next').NextConfig} */
const client = require('./client')
const nextConfig = {
    images: {
        domains: ["cdn.sanity.io"],
        
      },
};

module.exports = {
  // Make sure that your node enviroment supports async/await
  exportPathMap:  async function getData(cateogry: string) {
  const query = `*[_type == "product" && category->name == "${cateogry}"] {
        _id,
          "imageUrl": images[0].asset->url,
          price,
          name,
          "slug": slug.current,
          "categoryName": category->name
      }`;

  const data = await client.fetch(query);

  return data;
}
}

export default nextConfig;
