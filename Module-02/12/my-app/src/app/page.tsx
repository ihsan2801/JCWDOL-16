import contentfulClient from "@/contentful/contentfulClient";
import { TypeBlogSkeleton, IAsset } from "@/contentful/types/blog.types";

const getBlogContentful = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeBlogSkeleton>();
    console.log(data.items[0].fields.image);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export deafult async function Home() {
  const blogs = await getBlogContentful();
  return (
    <div>
    {blogs &&
      blogs.items?.map((blog, idx) => (
        <div key={idx}>
        <p className="text-lg">{blog.fields.title}</p>
        <img src={`https:${blog.fields.image?.fields.file.url}`}

        </p></div>
  )
}
}