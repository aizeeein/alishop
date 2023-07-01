import Link from "next/link";
import React from "react";

const BajuAnak = () => {
  return (
    <div
      className="
        w-full
        h-full
        flex
        flex-col
        pt-20
        p-4        
        "
    >
      <div className="flex justify-center">List of item</div>
      <Link href="https://id-id.facebook.com/">1. Jumper Baby</Link>
    </div>
  );
};

export default BajuAnak;
