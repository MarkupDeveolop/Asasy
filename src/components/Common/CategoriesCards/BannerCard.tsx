import React from "react";
import Image from "next/image";

interface BannerCardProps {
  imgSrc: string;
}

const BannerCard: React.FC<BannerCardProps> = ({ imgSrc }) => {
  return (
    <div className="lg:h-[35rem] ">
      <Image
        src={imgSrc}
        alt="user-image"
        width={0}
        height={0} // Consider setting a valid height or using responsive design
        className="w-full m-auto inline-block shadow-2xl rounded-xl "
      />
    </div>
  );
};

export default BannerCard;
