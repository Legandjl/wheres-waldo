import React from "react";
import imageData from "../images/imagedata/images";
const ImageContext = React.createContext();

const ImageContextProvider = (props) => {
  return (
    <ImageContext.Provider value={{ imageData }}>
      {props.children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageContextProvider };
