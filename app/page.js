"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Play from "./components/Play";

export default function Home() {
  const [definition, setDefinition] = useState(null);
  const [theme, setTheme] = useState("light");
  const [font, setFont] = useState("sans");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    document.body.className = font;
  }, [font]);

  const handleSearch = async (query) => {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
    );
    const data = await response.json();
    setDefinition(data[0]);
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "light" ? "bg-gray-100" : "bg-gray-900"
      } text-${theme === "light" ? "black" : "white"}`}
    >
      <Navbar onThemeChange={setTheme} onFontChange={setFont} />
      <div className="flex flex-col justify-center items-center p-4">
        <Search onSearch={handleSearch} theme={theme} />
        {definition && (
          <div className="mt-4 ml-4 relative w-full">
            <div className="relative">
              <h1 className="text-4xl font-black">{definition.word}</h1>
              <p className="text-purple-500">{definition.phonetic}</p>
              {definition.phonetics.map((phonetic, index) => (
                <div
                  key={index}
                  className="text-gray-500 absolute top-2 right-5"
                >
                  {phonetic.audio && (
                    <Play src={phonetic.audio} theme={theme} />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4">
              {definition.meanings.map((meaning, index) => (
                <div key={index} className="mb-4">
                  <h3 className="italic text-xl font-semibold mb-4">
                    {meaning.partOfSpeech}
                  </h3>
                  <p className=" text-gray-600">Meaning</p>
                  {meaning.definitions.map((def, idx) => (
                    <div key={idx} className="ml-4">
                      <li>{def.definition}</li>
                      {def.example && (
                        <p className={`italic ml-6 ${theme === "light" ? "text-gray-600 " : "text-gray-300"}`}>
                          "{def.example}"
                        </p>
                      )}
                    </div>
                  ))}
                  {meaning.synonyms.length > 0 && (
                    <>
                      <p className="italic text-gray-600 ml-6">
                        Synonyms:
                        {meaning.synonyms.map((syn, idx) => (
                          <div key={idx} className="ml-6">
                            <ul className=" text-pruple-600 ">{syn}</ul>
                          </div>
                        ))}
                      </p>
                    </>
                  )}
                  {meaning.antonyms.length > 0 && (
                    <>
                      <p className="italic text-gray-600 ml-6">Antonyms:</p>
                      {meaning.antonyms.map((ant, idx) => (
                        <div key={idx} className="ml-4">
                          <p>Antonyms: {ant}</p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
            <footer></footer>
          </div>
        )}
      </div>
    </div>
  );
}
