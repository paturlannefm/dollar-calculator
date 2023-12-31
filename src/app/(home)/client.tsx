"use client";
import React from "react";
import { useState } from "react";

import type { Cotizacion } from "../types";

import Form from "../components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import HistoricAnalisis from "../components/HistoricAnalisis";

export default function HomeClient({
  cotizaciones,
}: {
  cotizaciones: Cotizacion[];
}) {
  const [amount, setAmount] = useState(0);
  const [showHistoricChart, setShowHistoricChart] = useState<boolean>(false);
  const [dollarType, setDollarType] = useState<string>("");

  const handleClickAnalisisButton = (nombre: string) => {
    setDollarType(nombre);
    setShowHistoricChart(true);
  };

  return (
    <main>
      {!showHistoricChart ? (
        <div className="grid gap-8">
          <section>
            <Form
              value={amount}
              onChange={(_amount: number) => setAmount(_amount)}
            />
          </section>
          <section className="flex-1 p-8 text-white rounded-xl bg-cyan-800">
            <ul className="flex flex-col gap-4">
              {cotizaciones.map(({ nombre, venta }) => {
                const total = amount ? Number(amount / venta) : venta;

                return (
                  <li
                    key={nombre}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="text-cyan-100">{nombre}</div>
                    <div className="flex items-center gap-4">
                      {amount ? (
                        <div className="text-xl font-bold text-cyan-500">
                          {Number(total).toLocaleString("es-AR", {
                            style: "currency",
                            currency: "ARS",
                          })}
                        </div>
                      ) : null}
                      <div className="text-3xl font-bold text-cyan-300">
                        {Number(venta).toLocaleString("es-AR", {
                          style: "currency",
                          currency: "ARS",
                        })}
                      </div>
                      <button
                        onClick={() => handleClickAnalisisButton(nombre)}
                        className="text-cyan-100 self-end text-2xl cursor-pointer hover:text-cyan-300 transition-colors ease-in-out duration-150"
                      >
                        <FontAwesomeIcon icon={faChartColumn} />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      ) : (
        <HistoricAnalisis
          handleClose={() => setShowHistoricChart(false)}
          dollarType={dollarType}
        />
      )}
    </main>
  );
}
