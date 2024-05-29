/* eslint-disable react/prop-types */
const EveryDonation = ({ mydo }) => {
  const { title, image, cardColor } = mydo;
  // ! local storage func

  return (
    <div>
      <div
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        style={{ backgroundColor: cardColor }}
      >
        <img className="" src={image} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <button className="px-2 py-1  bg-green-400 rounded-lg text-white font-bold">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EveryDonation;
