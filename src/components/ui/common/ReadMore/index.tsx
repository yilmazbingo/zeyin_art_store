interface ReadMoreProps {
  specs: string[];
}
const ReadMore = ({ specs }: ReadMoreProps) => {
  console.log("Specs in readmore", specs);
  return specs.map((spec) => {
    return <p className="w-2/3">&#x2713; {spec}</p>;
  });
};
export default ReadMore;
