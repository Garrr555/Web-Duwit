import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
interface INavbar {}

export default function Navbar({}: INavbar) {
  return (
    <nav className="bg-[#f4f4f5] bg-opacity-90 z-50 fixed w-full">
      <nav
        className="w-[1320px] mx-auto
     pt-[31px] pb-5"
      >
        <div className="flex justify-center items-center gap-28 mb-5">
          <div className="basis-2/6 ">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="cursor-pointer w-[25px] h-auto"
            />
          </div>
          <div className="basis-1/6">
            <div className="flex gap-3 items-center mx-auto">
              <div className="flex">
                <div className="w-[15px] h-[15px] border border-black transform rotate-45 -mx-1"></div>
                <div className="w-[15px] h-[15px] border border-black transform rotate-45"></div>
                <div className="w-[15px] h-[15px] border border-black transform rotate-45 -mx-1"></div>
              </div>

              <div className=" h-[34px] text-center flex items-center">
                <p className="text-[40px]">DUWIT</p>
              </div>

              <div className="flex">
                <div className="w-[15px] h-[15px] border border-black transform rotate-45 -mx-1"></div>
                <div className="w-[15px] h-[15px] border border-black transform rotate-45"></div>
                <div className="w-[15px] h-[15px] border border-black transform rotate-45 -mx-1"></div>
              </div>
            </div>
          </div>
          <div className="basis-2/6">
            <div className="flex gap-7 justify-end">
              <div className="flex items-center h-[25px] gap-3">
                <svg
                  width={20}
                  hanging={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
                <p className="cursor-pointer text-[22px]">Account</p>
              </div>
              <div className="flex items-center h-[25px] gap-3">
                <svg
                  width={20}
                  hanging={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                </svg>
                <p className="cursor-pointer text-[22px]">Shoping</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex gap-14 mt-5">
          <Link href={"/"} className="text-[16px]">
            Jewelry & Accessories
          </Link>
          <Link href={"/"} className="text-[16px]">
            Clothing & Shoes
          </Link>
          <Link href={"/"} className="text-[16px]">
            Home & Living
          </Link>
          <Link href={"/"} className="text-[16px]">
            Wedding & Party
          </Link>
          <Link href={"/"} className="text-[16px]">
            Toys & Entertainment
          </Link>
          <Link href={"/"} className="text-[16px]">
            Art & Collectibles
          </Link>
          <Link href={"/"} className="ml-auto text-[16px]">
            Craft Supplies & Tools
          </Link>
        </div>
      </nav>
    </nav>
  );
}
