import Button2 from "@global/button2";
import Image from "next/image";

export default function Brand() {
  return (
    <section
      className="relative h-[776px] w-[1920px] mx-auto bg-center bg-cover"
      style={{ backgroundImage: `url('/background.png')` }}
    >
      <Image
        className="absolute top-0 right-0"
        src={"/Zara_Logo1.png"}
        height={309}
        width={732}
        alt=""
      ></Image>

       
        <div className="max-h-[187px] max-w-[540px] left-[1083px] top-[233px] absolute">
        <Image
          className=""
          src={"/Zara_Logo2.png"}
          height={81}
          width={191}
          alt=""
        ></Image>
        <p className="text-[26px] text-justify text-white my-10 leading-[40px] capitalize">
          Lustrous yet understated. The new evening wear collection exclusively
          offered at the reopened Giorgio Armani boutique in Los Angeles.
        </p>

        <Button2
          classname="flex items-center text-[29px] font-[400] text-black bg-white py-[19px] px-[26px]"
          title={"See Collection"}
        ></Button2>
      </div>
        
      
    </section>
  );
}
