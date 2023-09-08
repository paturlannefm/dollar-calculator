import React from "react";
import { useState, useEffect } from "react";

import LineChart from "./LineChart";

//actions
import { getDollarValuesByType } from "../actions/getDollarValuesByType";

interface DataItem {
  0: string;
  1: number;
}

interface Props {
  handleClose: () => void;
  dollarType: string;
}

const HistoricChart = ({ handleClose, dollarType }: Props) => {
  const [chartData, setChartData] = useState<DataItem[]>([]);
  const [chartTitle, setChartTitle] = useState<string>("");

  const getChartData = async () => {
    const newData = await getDollarValuesByType(dollarType);
    setChartData(newData);
  };

  useEffect(() => {
    switch (dollarType) {
      case "Dolar Oficial":
        setChartTitle("Precio histórico del dólar Oficial");
        break;
      case "Dolar Blue":
        setChartTitle("Precio histórico del dólar Blue");
        break;
      case "Dolar Bolsa":
        setChartTitle("Precio histórico del dólar Bolsa");
        break;
      default:
        setChartTitle("Precio histórico del dólar");
        break;
    }

    getChartData();
  }, [dollarType]);
  return (
    <section className="relative flex flex-col">
      <button
        className="absolute -top-5 -right-4 text-cyan-800 hover:text-gray-800 text-4xl "
        onClick={() => handleClose()}
      >
        <span className="h-6 w-6 outline-none focus:outline-none">×</span>
      </button>
      <div className="flex justify-center">
        <h1 className="font-bold text-xl text-cyan-800">{chartTitle}</h1>
      </div>

      <LineChart data={chartData} />
    </section>
  );
};
export default HistoricChart;
