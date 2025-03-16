"use client";

import React, { useState } from "react";

const DashboardPage = () => {
  const [selectedGraph, setSelectedGraph] = useState("steps");

  return (
    <div className="min-h-screen bg-teal-200 p-6">
      {/* Toggle Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          className={`px-4 py-2 border ${selectedGraph === "steps" ? "bg-white" : "bg-gray-300"}`}
          onClick={() => setSelectedGraph("steps")}
        >
          Steps
        </button>
        <button
          className={`px-4 py-2 border ${selectedGraph === "calories" ? "bg-white" : "bg-gray-300"}`}
          onClick={() => setSelectedGraph("calories")}
        >
          Calories
        </button>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 bg-gray-100 p-4">Graphs (Daily)</div>
        <div className="col-span-1 bg-gray-100 p-4">Graphs (Weekly)</div>
        <div className="col-span-1 bg-gray-100 p-4">Graphs (Monthly)</div>

        {/* Long Leaderboard */}
        <div className="col-span-1 row-span-3 bg-gray-100 p-4 flex flex-col gap-2">
          <h2 className="text-lg font-bold mb-2">Leaderboard</h2>
          <div className="flex flex-col gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rank) => (
              <div
                key={rank}
                className="bg-white p-2 rounded-md shadow flex justify-between"
              >
                <span>🏆 Player {rank}</span>
                <span>{Math.floor(Math.random() * 5000) + 1000} pts</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2 row-span-2 bg-gray-100 p-4">Social Challenges</div>
        <div className="col-span-1 bg-gray-100 p-4">AI Based Workout</div>
        <div className="col-span-1 bg-gray-100 p-4">AI Based Diet Plan</div>
      </div>
    </div>
  );
};

export default DashboardPage;
