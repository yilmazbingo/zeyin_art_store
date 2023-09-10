import { ProductView } from "@/components/ui";
import { getAllArts, getProductBySlug } from "@/lib/art";
import { ArtProduct } from "@/types/art";
import { Metadata, ResolvingMetadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const slug = params.slug;
    const product = await getProductBySlug(slug);

    return {
      title: product ? product.title : "Zeyin Art 3D paper crafting",
      description: product?.description,
      alternates: { canonical: `/art/${slug}` },
      // openGraph: {
      //   images: [product?.coverImage],
      // },
    };
  } catch (e) {
    console.log(e);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }
}
export async function generateStaticParams() {
  const arts = await getAllArts();
  if (!arts.data) return [];
  return arts.data.map((art) => ({
    slug: art.slug,
  }));
}

const ProductSlug = async ({ params }: Props) => {
  const product = await getProductBySlug(params.slug);

  return <>{product && <ProductView product={product} />}</>;
  //   return <h2>sdjkdsajf</h2>;
};

export default ProductSlug;
