import React from "react";

function Home({ onStart }) {
  return (
    <main className="flex flex-col items-center justify-center h-screen px-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Quel métier est fait pour toi ?</h1>
      <p className="mb-6 text-gray-600">Un quiz rapide basé sur tes passions, pas ton CV.</p>
      <button
        onClick={onStart}
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700"
      >
        Commencer le quiz
      </button>
    </main>
  );
}

export default Home;
