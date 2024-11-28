import React from "react";

const Tag: React.FC<{ value: string }> = ({ value }) => {
  return (
    <div className="flex text-xs text-center items-center justify-center w-28 h-10 bg-orange-50 hover:bg-red-100 rounded border m-1">
      {value}
    </div>
  );
};

export default Tag;
