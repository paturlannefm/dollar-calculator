"use client";

import React from "react";

interface FormProps {
  value: number;
  onChange: (amount: number) => void;
}

function Form({ value, onChange }: FormProps) {
  return (
    <form className="w-full">
      <label className="block space-y-3 text-lg">
        <span>Ingrese el monto en ARS:</span>
        <input
          className="block w-full rounded-full bg-gray-200 p-2 text-right text-3xl outline-none transition-colors focus:border-cyan-800 hover:border-cyan-800 border border-gray"
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </label>
    </form>
  );
}

export default Form;
