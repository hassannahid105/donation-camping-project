import { useLoaderData } from "react-router-dom";
import Donations from "../../component/Donations.jsx/Donations";
import Hero from "../../component/Header/Hero/Hero";

const Home = () => {
  const allDonations = useLoaderData();
  return (
    <div>
      <Hero></Hero>

      <Donations allDonations={allDonations}></Donations>
    </div>
  );
};

export default Home;
