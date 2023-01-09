import React from "react";
import { Link } from "react-router-dom";
import DefaultArtistImg from "../assets/images/default-artist-image-sm.png";


const ArtistCard = ({ artistImgURL, artistName, link }) => {
  let artistArray = artistName.split(" & " || ", " || ",");
  let firstArtist = artistArray[0];
  artistName = firstArtist;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-24 h-24 rounded-full">
        <img
          className="w-full h-full object-cover object-center rounded-full"
          src={artistImgURL ? artistImgURL : DefaultArtistImg}
          alt={artistName}
        />
      </div>
      <Link to={link} className="cursor-pointer">
      <p className="text-xs hover:underline">{artistName}</p>
      </Link>
    </div>
  );
};

export default ArtistCard;
