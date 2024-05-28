import DonationCard from "../DonationCard/DonationCard";

/* eslint-disable react/prop-types */
const Donations = ({ allDonations }) => {
  console.log(allDonations);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-10">Donations compo</h2>
      <div className="grid grid-cols-3 gap-8 my-16">
        {allDonations?.map((donation) => (
          <DonationCard key={donation.id} donation={donation}></DonationCard>
        ))}
      </div>
    </div>
  );
};

export default Donations;
