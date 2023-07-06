import React from "react";

export default function DownloadItem({ download, key, length, index, text }) {
  // console.log(key[0]);
  return (
    <div
      className={`flex flex-row py-2 justify-between ${
        index !== length - 1 ? "border-b-2 " : ""
      }`}
    >
      <div>
        {key}
        {text}
      </div>
      <button
        className="bg-yt text-bg px-2 rounded-md hover:cursor-pointer py-1"
        onClick={() => {
          download(key);
        }}
      >
        Download
      </button>
    </div>
  );
}
