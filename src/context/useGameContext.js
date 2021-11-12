import React, { useCallback, useEffect, useState } from "react";
import { imageData } from "../images/imagedata/images";
import { Firebase } from "../components/Firebase/Firebase";
const GameContext = React.createContext();

const GameContextProvider = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [allData, setData] = useState([]);
  const [foundItems, setFoundItems] = useState([]);
  const fb = Firebase();

  const clearFound = useCallback(() => {
    setFoundItems([]);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      if (isLoading) {
        const gameData = await fb.getCharacterLocations();

        setData(() => {
          return gameData;
        });
        setLoading(false);
      }
    };
    loadData();
  }, [fb, isLoading]);

  const setFound = (name, id) => {
    const found = allData.find((item) => {
      return item.name === name && item.id === id;
    });
    setFoundItems((prev) => {
      return [...prev, found];
    });
  };

  const getDataById = (id) => {
    const filtered = allData.filter((item) => {
      return item.id === id;
    });
    return filtered;
  };

  return (
    <GameContext.Provider
      value={{
        fb,
        imageData,
        isLoading,
        getDataById,
        foundItems,
        setFound,
        clearFound,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export { GameContext, GameContextProvider };
