// "use client";
import { ArtProduct } from "@/types/art";
import { FunctionComponent, ReactNode } from "react";
import { ArtCard } from "..";

interface ArtListProps {
  arts: ArtProduct[];
  children: ReactNode;
}

export default function ArtList({ arts, children }: ArtListProps) {
  return (
    <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
      {/* this is called render prop */}
      {/* children is passed as function and returs BookCard component */}
      {/* {arts.map((art) => children(art))} */}
      {arts.map((art) => (
        <ArtCard key={art.id} product={art} />
      ))}
    </section>
  );
}
