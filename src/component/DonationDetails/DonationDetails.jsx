import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const { id } = useParams();
  const detailsCard = useLoaderData();
  const findOne = detailsCard.find((one) => one.id === parseFloat(id));
  const { title, image, cardColor } = findOne;
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] my-10" style={{ backgroundColor: cardColor }}>
        <img
          className=" w-full rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg"
          src={image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
          <p className="mb-3 font-normal">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <button className="bg-green-400 rounded-md py-1 font-bold text-xl mt-6">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
