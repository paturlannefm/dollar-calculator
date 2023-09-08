import React from "react";

interface TimeSelectorProps {
  selectedTime: string;
  handleTimeChange: (time: string) => void;
}

function TimeSelector({ selectedTime, handleTimeChange }: TimeSelectorProps) {
  const timeOptions = [
    { label: "Semanal", value: "semanal" },
    { label: "Mensual", value: "mensual" },
    { label: "Anual", value: "anual" },
  ];

  return (
    <div className="flex justify-center mt-4 gap-4">
      {timeOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => handleTimeChange(option.value)}
          className={`time-selector ${
            selectedTime === option.value
              ? "border-gray-600 text-gray-800"
              : "border-gray-300"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default TimeSelector;
