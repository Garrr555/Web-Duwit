"use client";

import Image from "next/image";

interface Props {
  nama: string;
  gambar: string;
  kategori: string;
  harga: number;
  diskon: number;
}

const Produk: React.FC<Props> = ({ nama, gambar, kategori, harga, diskon }) => {
  return (
    <div className="w-[312px] h-[478px]">
      <div className="">
        <Image
          className="m-auto"
          src={`/${gambar}.png`}
          height={400}
          width={312}
          alt=""
        ></Image>
        <p className="text-[16px] font-bold">{`${nama}`}</p>
        <div className="pt-5">
          <p className="opacity-50 text-[16px] -mb-6">{`${kategori}`}</p>
          <div className="flex justify-end items-center">
            {diskon ? (
              <div className=""></div>
            ) : (
              <div>
                <p className="text-[16px] font-bold">{`$${harga.toFixed(
                  2
                )}`}</p>
              </div>
            )}
            {diskon ? (
              <div className="">
                <span className="line-through ">{`$${harga.toFixed(2)}`}</span>
                <span className="text-red-500 ml-2">{`$${diskon.toFixed(
                  2
                )}`}</span>
              </div>
            ) : (
              <div>
                <p className="hidden"></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produk;
