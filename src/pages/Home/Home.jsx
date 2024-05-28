import { useLoaderData } from "react-router-dom";
import Donations from "../../component/Donations.jsx/Donations";

const Home = () => {
  const allDonations = useLoaderData();
  return (
    <div>
      <Donations allDonations={allDonations}></Donations>
    </div>
  );
};

export default Home;
