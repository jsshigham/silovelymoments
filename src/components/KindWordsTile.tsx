import React from "react";

interface TileProps {
  photo: string;
  quote: string;
  name: string;
  number: string;
}

const KindWordsTile: React.FC<TileProps> = ({ photo, quote, name, number }) => {
  return (
    <div className="tile">
      <div className="tileTop">
        <div className="tileImg">
          {photo.includes("landscape") ? (
            <div className="tileImgDiv">
              <img
                className="tileLandscape"
                src={photo}
                alt={`Tile ${number}`}
              />
            </div>
          ) : (
            <img className="tilePortrait" src={photo} alt={`Tile ${number}`} />
          )}
        </div>
        <div className="content">
          <p>{quote}</p>
        </div>
      </div>
      <p className="name">{name}</p>
    </div>
  );
};

export default KindWordsTile;
