"use client";

import { useState } from "react";
import Search from "./components/Search";
import Play from "./components/Play";

export default function Home() {
  const [definition, setDefinition] = useState(null);

  const handleSearch = async (query) => {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
    );
    const data = await response.json();
    setDefinition(data[0]);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <Search onSearch={handleSearch} />
      {definition && (
        <div className="mt-4 ml-4 relative w-full">
          <div className="relative">
            <h2 className="text-2xl font-semibold">{definition.word}</h2>
            <p>{definition.phonetic}</p>
            {definition.phonetics.map((phonetic, index) => (
              <div key={index} className="text-gray-500 absolute top-2 right-5">
                {phonetic.audio && <Play src={phonetic.audio} />}
              </div>
            ))}
          </div>
          <div className="mt-4">
            {definition.meanings.map((meaning, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">
                  {meaning.partOfSpeech}
                </h3>
                <p>Meaning</p>
                {meaning.definitions.map((def, idx) => (
                  <div key={idx} className="ml-4">
                    <li>{def.definition}</li>
                    {def.example && (
                      <p className="italic text-gray-600 ml-6">
                        "{def.example}"
                      </p>
                    )}
                  </div>
                ))}
                {meaning.synonyms != 0 && (
                  <p className="italic text-gray-600 ml-6">Synonyms:</p>
                )}
                {meaning.synonyms.map((syn, idx) => (
                  <div key={idx} className="ml-6">
                    {syn && <ul className="italic text-gray-600">{syn}</ul>}
                  </div>
                ))}
                {meaning.antonyms != 0 && (
                  <p className="italic text-gray-600 ml-6">Antonyms:</p>
                )}
                {meaning.antonyms.map((ant, idx) => (
                  <div key={idx} className="ml-4">
                    <p>Antonyms: {ant}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <footer></footer>
        </div>
      )}
    </div>
  );
}
