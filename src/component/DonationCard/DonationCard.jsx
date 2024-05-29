import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DonationCard = ({ donation }) => {
  const { id, title, cardColor, categoryColor, category, titleColor } =
    donation;
  return (
    <div>
      <Link to={`/donationcard/${id}`}>
        <div
          className=" border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
          style={{
            backgroundColor: cardColor,
          }}
        >
          <img
            className="rounded-t-lg w-full"
            src={"https://i.ibb.co/m0zGR11/Food.png"}
            alt=""
          />

          <div className="p-5">
            <p
              className="p-1 inline-block rounded mb-2 text-white"
              style={{ backgroundColor: categoryColor }}
            >
              {category}
            </p>
            <h5
              className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
              style={{
                color: titleColor,
              }}
            >
              {title}
            </h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationCard;
