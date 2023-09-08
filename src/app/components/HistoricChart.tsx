import React from "react";
import { useState, useEffect } from "react";

import LineChart from "./LineChart";

//actions
import { getOfficialDollarValues } from "../actions/getOfficialDollarValues";

interface DataItem {
  0: string;
  1: number;
}

interface Props {
  handleClose: () => void;
}

const HistoricChart = ({ handleClose }: Props) => {
  const [chartData, setChartData] = useState<DataItem[]>([]);

  const getChartData = async () => {
    const newData = await getOfficialDollarValues();
    setChartData(newData);
  };

  useEffect(() => {
    getChartData();
  }, []);

  return (
    <section className="relative flex flex-col">
      <button
        className="absolute -top-5 -right-4 text-cyan-800 hover:text-gray-800 text-4xl "
        onClick={() => handleClose()}
      >
        <span className="h-6 w-6 outline-none focus:outline-none">×</span>
      </button>
      <div className="flex justify-center">
        <h1 className="font-bold text-xl text-cyan-800">
          Precio histórico del dólar oficial
        </h1>
      </div>

      <LineChart data={chartData} />
    </section>
  );
};
export default HistoricChart;
