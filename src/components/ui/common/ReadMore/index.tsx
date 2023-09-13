interface ReadMoreProps {
  specs: string[];
}
const ReadMore = ({ specs }: ReadMoreProps) => {
  console.log("Specs in readmore", specs);
  return specs.map((spec) => {
    return <p className="lg:w-2/4 sm:w-11/12 mt-2">&#x2713; {spec}</p>;
  });
};
export default ReadMore;
