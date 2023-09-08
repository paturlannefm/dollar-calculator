import React from "react";

interface TimeSelectorProps {
  selectedTime: string;
  handleTimeChange: (time: string) => void;
}

function TimeSelector({ selectedTime, handleTimeChange }: TimeSelectorProps) {
  return (
    <div className="flex justify-center mt-4 gap-4">
      <button
        onClick={() => handleTimeChange("semanal")}
        className={`time-selector ${
          selectedTime === "semanal"
            ? "border-gray-600 text-gray-800"
            : "border-gray-300"
        }`}
      >
        Semanal
      </button>
      <button
        onClick={() => handleTimeChange("mensual")}
        className={`time-selector ${
          selectedTime === "mensual"
            ? "border-gray-600 text-gray-800"
            : "border-gray-300"
        }`}
      >
        Mensual
      </button>
      <button
        onClick={() => handleTimeChange("anual")}
        className={`time-selector ${
          selectedTime === "anual"
            ? "border-gray-600 text-gray-800"
            : "border-gray-300"
        }`}
      >
        Anual
      </button>
    </div>
  );
}

export default TimeSelector;
