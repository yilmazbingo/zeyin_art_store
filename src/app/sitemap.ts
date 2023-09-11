// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
import { getAllArts } from "@/lib/art";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.BASE_URL as string;

  const { data } = await getAllArts();
  const artUrls =
    data.map((a) => {
      return {
        url: `${baseUrl}/art/${a.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...artUrls,
    // {
    //   url: ,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
    // {
    //   url: "https://acme.com/blog",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.5,
    // },
  ];
}
