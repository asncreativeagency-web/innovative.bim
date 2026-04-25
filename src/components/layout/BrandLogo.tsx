import React from "react";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: { img: "h-9", pad: "px-3 py-1.5" },
  md: { img: "h-12", pad: "px-4 py-2.5" },
  lg: { img: "h-20", pad: "px-6 py-5" },
};

const BrandLogo: React.FC<BrandLogoProps> = ({ size = "md", className }) => {
  const s = sizes[size];
  return (
    <div className={`brand-frame logo-panel rounded-md inline-flex items-center ${s.pad} ${className ?? ""}`}>
      <img
        src="/brand-assets/32e39393-6068-41d7-9bc8-96d7fbdb5a9c.png"
        alt="Innovative BIM Services logo"
        className={`${s.img} w-auto drop-shadow-sm`}
        loading="eager"
      />
    </div>
  );
};

export default BrandLogo;
