import { useEffect } from "react";
import { useState } from "react";
import EveryDonation from "../../component/EveryDonation/EveryDonation";

const DonationPage = () => {
  const [myDonate, setMyDonate] = useState([]);
  useEffect(() => {
    const getDonate = JSON.parse(localStorage.getItem("donate"));
    setMyDonate(getDonate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="grid grid-cols-2 gap-10">
      {myDonate?.map((mydo) => (
        <EveryDonation key={mydo.id} mydo={mydo}></EveryDonation>
      ))}
    </div>
  );
};

export default DonationPage;
