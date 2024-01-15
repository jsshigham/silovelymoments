import React from "react";

interface TileProps {
  photoType: string;
  id: number;
  imgPath: string;
}

const MomentsTile: React.FC<TileProps> = ({ photoType, id, imgPath }) => {
  return (
    <div key={id} className="momentsTile">
      <div className="momentsTileImgDiv">
        <img src={imgPath} alt={photoType} className="momentsTileImg" />
      </div>
      <h3 className="momentsTileTitle">{photoType}</h3>
    </div>
  );
};

export default MomentsTile;
