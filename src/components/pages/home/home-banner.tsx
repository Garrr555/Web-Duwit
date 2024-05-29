import Image from "next/image";
import Button from "@global/Button";

export default function HomeBanner() {
  return (
    <section className=" mx-auto pt-[198px] mb-20 relative">
      <div className="w-[1320px] mx-auto flex">
        <div className="basis-4/6">
          <p className="text-[74px] font-[300]">Collections</p>
          <p className="text-[30px] font-[400] my-10">
            you can explore ans shop many differnt collection from various
            barands here.
          </p>
          <Button
            classname="flex items-center text-[29px] font-[400] bg-black text-white py-[19px] px-[26px]"
            title={"Shop Now"}
          ></Button>
        </div>
        <div className=" basis-3/6 relative">
          <Image
            className="m-auto"
            src={"/homeimg.png"}
            height={562}
            width={442}
            alt=""
          ></Image>
        </div>
      </div>

      <div className="bunga basis-1/6 flex items-end absolute bottom-0 right-0">
        <Image
          className="m-auto -hue-rotate-30"
          src={"/Frame.png"}
          height={195}
          width={262}
          alt=""
        ></Image>
      </div>
    </section>
  );
}
