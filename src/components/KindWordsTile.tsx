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
      <div className="topOfTile">
        <div className="tileImgDiv">
          {photo.includes("landscape") ? (
            <img className="tileLandscape" src={photo} alt={`Tile ${number}`} />
          ) : (
            <img className="tilePortrait" src={photo} alt={`Tile ${number}`} />
          )}
        </div>
        <div className="number">{number}</div>
      </div>
      <div className="content">
        <p>{quote}</p>
        <p className="name">{name}</p>
      </div>
    </div>
  );
};

export default KindWordsTile;
