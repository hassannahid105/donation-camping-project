import { useEffect, useState } from "react";
import EveryDonation from "../../component/EveryDonation/EveryDonation";

const DonationPage = () => {
  const [myDonate, setMyDonate] = useState([]);
  const [data, setData] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const getDonate = JSON.parse(localStorage.getItem("donate"));
    if (getDonate) {
      setMyDonate(getDonate);
    } else {
      setData("No data found");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myDonate]);

  const handleSee = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      {data ? (
        <p className="text-4xl font-bold flex items-center h-screen justify-center">
          {data}
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-8">
          {showAll
            ? myDonate.map((mydo) => (
                <EveryDonation key={mydo.id} mydo={mydo}></EveryDonation>
              ))
            : myDonate
                .slice(0, 4)
                .map((mydo) => (
                  <EveryDonation key={mydo.id} mydo={mydo}></EveryDonation>
                ))}
        </div>
      )}
      {myDonate.length > 4 && (
        <div className="text-center">
          <button
            onClick={handleSee}
            className="px-8 py-2 rounded-md  bg-green-400 mt-10 text-white font-semibold mb-20"
          >
            {showAll ? "Show Less" : "See All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default DonationPage;
