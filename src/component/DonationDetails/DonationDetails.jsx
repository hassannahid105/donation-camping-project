import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const DonationDetails = () => {
  const { id } = useParams();
  const detailsCard = useLoaderData();
  const findOne = detailsCard.find((one) => one.id === parseFloat(id));
  const { title, image, cardColor, titleColor } = findOne;
  const addDonate = [];
  // ! local storage func
  const handleAddtocart = () => {
    const getDonate = JSON.parse(localStorage.getItem("donate"));
    if (!getDonate) {
      addDonate.push(findOne);
      localStorage.setItem("donate", JSON.stringify(addDonate));
      swal("Good job!", "You Successfully added loaclstorage!", "success");
    } else {
      const isExist = getDonate.find((donate) => donate.id === findOne.id);
      if (!isExist) {
        addDonate.push(...getDonate, findOne);
        localStorage.setItem("donate", JSON.stringify(addDonate));
        swal("Good job!", "You Successfully added loaclstorage!", "success");
      } else {
        // alert("item is already added");
        swal("Already Added", "Try another one ", "error");
      }
    }
  };
  console.log(addDonate);
  return (
    <div className="flex items-center justify-center">
      <div className="my-10 rounded-2xl" style={{ backgroundColor: cardColor }}>
        <div className="relative">
          <img
            className=" w-full rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg"
            src={image}
            alt=""
          />
          <button
            onClick={handleAddtocart}
            className=" px-8 py-2 rounded-md font-bold text-white absolute bottom-5 left-5"
            style={{ backgroundColor: titleColor }}
          >
            Donate
          </button>
        </div>
        <div className="flex flex-col justify-between px-12 py-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
          <p className="mb-3 font-normal">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
