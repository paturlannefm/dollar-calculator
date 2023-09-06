"use client";
import React from "react";
import { useState } from "react";

import Form from "./components/Form";
import cotizaciones from "./cotizaciones.json";

const COTIZACIONES = cotizaciones as Record<
  string,
  { compra: number; venta: number }
>;

export default function Home() {
  const [amount, setAmount] = useState(0);

  return (
    <main className="grid gap-8 ">
      <section>
        <Form
          value={amount}
          onChange={(_amount: number) => setAmount(_amount)}
        />
      </section>
      <section className="flex-1 bg-cyan-800 rounded-3xl p-10 text-white">
        <ul className="flex flex-col gap-4">
          {Object.entries(COTIZACIONES).map(
            ([name, value]: [string, { compra: number; venta: number }]) => {
              const total = amount ? Number(amount / value.venta) : value.venta;
              return (
                <li
                  key={name}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="text-cyan-100">{name}</div>
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
                      {Number(value.venta).toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      })}
                    </div>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </section>
    </main>
  );
}
