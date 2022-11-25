import React from "react";

export default function PageNumber({ number }) {
  return (
    <div className="w-[32px] h-[32px] rounded text-blue-800 bg-white flex justify-center text-2xl hover:bg-red-800 hover:text-white cursor-pointer">
      {number}
    </div>
  );
}
