// "use client";
import { ArtProduct } from "@/types/art";
import { FunctionComponent, ReactNode } from "react";
import { ArtCard } from "..";

interface ArtListProps {
  arts: ArtProduct[];
  children?: ReactNode;
}

export default function ArtList({ arts, children }: ArtListProps) {
  return (
    <section className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 mt-5 sm:mt-0">
      {/* this is called render prop */}
      {/* children is passed as function and returs BookCard component */}
      {/* {arts.map((art) => children(art))} */}
      {arts.map((art) => (
        <ArtCard key={art.id} product={art} />
      ))}
    </section>
  );
}
