"use client";

import Link from "next/link";
import Container from "../Container";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
              flex
              flex-row
              items-center
              gap-3
              md:justify-between        
              "
          >
            <Link className="font-bold text-lg" href="/">
              AliShop
            </Link>
            <div
              className="            
            border-[1px]
            w-full
            md:w-auto
            py-2
            rounded-full
            shadow-sm
            "
            >
              <div
                className="
                flex
                flex-row
                items-center
                justify-center
                "
              >
                <Link
                  href="bajuanak"
                  className="
                text-sm
                font-semibold
                px-6
                hover:shadow-md
                transition
                cursor-pointer   
                rounded-full         
                "
                >
                  Baju Anak
                </Link>
                <Link
                  href="atributanak"
                  className="
                text-sm
                font-semibold
                px-6
                hover:shadow-md
                transition
                cursor-pointer   
                rounded-full         
                "
                >
                  Atribut Anak
                </Link>
                <Link
                  href="peralatananak"
                  className="
                text-sm
                font-semibold
                px-6
                hover:shadow-md
                transition
                cursor-pointer   
                rounded-full         
                "
                >
                  Peralatan Anak
                </Link>
              </div>
            </div>
            <div className="hidden md:flex"></div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
