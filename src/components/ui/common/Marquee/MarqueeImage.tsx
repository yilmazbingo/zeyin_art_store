import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArtProduct } from "@/types/art";

interface Props {
  product: ArtProduct;
  //   variant?: "simple" | "slim"
}
const placeholderImage = "/product-image-placeholder.svg";
const MarqueeImage: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div>
        <Image
          className="mr-5"
          alt={product.title ?? "Product image"}
          src={product.coverImage ?? placeholderImage}
          height={320}
          width={320}
          quality="85"
          // layout=
        />
      </div>
    </Link>
  );
};

export default MarqueeImage;
