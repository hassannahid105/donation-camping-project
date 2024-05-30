import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";

const Statistics = () => {
  const [statisData, setStatisData] = useState(0);
  let total = 12 - statisData;
  useEffect(() => {
    const getDonate = JSON.parse(localStorage.getItem("donate"));
    setStatisData(getDonate.length);
  }, []);
  console.log(statisData);
  return (
    <div>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: total, label: "Total" },
              { id: 1, value: statisData, label: "Donate" },
            ],
          },
        ]}
        width={400}
        height={400}
      />
    </div>
  );
};

export default Statistics;
