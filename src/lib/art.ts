import arts from "../content/arts.json";
import { ArtProduct } from "../types/art";

export const getAllArts = () => {
  return {
    data: arts,
    // a=accoumulator, c=course (data itelf), i=index
    artMap: arts.reduce((mapping, art, index) => {
      // since we passed {} as initial data, initially a={}
      // {courseID1:i,courseID2:i}
      mapping[art.id] = art;
      mapping[art.id].index = index;
      // mapping[art.id].index = index;
      return mapping;
      // we are passing initial data structure
    }, {} as Record<number, ArtProduct>),
  };
};

// {
//   1:{
//     arts,
//     ...
//     index:0
//   },
// }

export const getProductBySlug = async (slug: string) => {
  const { data } = await getAllArts();
  return data.find((item: ArtProduct) => item.slug === slug);
};
