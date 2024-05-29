"use client";

import { useRef, useState } from "react";
import Produk from "./produk";
import Image from "next/image";
import Brand from "./home-brans";

interface Product {
  nama: string;
  gambar: string;
  kategori: string;
  kategori2: string;
  harga: number;
  diskon: number;
}

const produk: Product[] = [
  {
    nama: "Adicolor Classics Joggers",
    gambar: "15",
    kategori: "Dress",
    kategori2: " ",
    harga: 63.85,
    diskon: 0,
  },
  {
    nama: "Nike Sportswear Futura Luxe",
    gambar: "14",
    kategori: "Bag",
    kategori2: " ",
    harga: 130.0,
    diskon: 0,
  },
  {
    nama: "Geometric print Scarf",
    gambar: "top-product",
    kategori: "Scraft",
    kategori2: "Hoodies",
    harga: 53.0,
    diskon: 0,
  },
  {
    nama: "Yellow Reserved Hoodie",
    gambar: "top-product4",
    kategori: "Dress",
    kategori2: "Jacket",
    harga: 155.0,
    diskon: 0,
  },
  {
    nama: "Basic Dress Green",
    gambar: "top-product3",
    kategori: "Dress",
    kategori2: "T-Shirt",
    harga: 236.0,
    diskon: 0,
  },
  {
    nama: "Nike Air Zoom Pegasus",
    gambar: "top-product2",
    kategori: "Shoes",
    kategori2: "",
    harga: 220.0,
    diskon: 198.0,
  },
  {
    nama: "Nike Repel Miler",
    gambar: "17",
    kategori: "Dress",
    kategori2: "Jacket",
    harga: 120.5,
    diskon: 0,
  },
  {
    nama: "Nike Sportswear Futura Luxe",
    gambar: "16",
    kategori: "Glasses",
    kategori2: "",
    harga: 160.0,
    diskon: 0,
  },
];

export default function Product() {
  const [filter, setFilter] = useState("");
  const [klikFilter, setKlikFilter] = useState("");
  const [scrollX, setScrollX] = useState(0);

  const handleFilter = (kategori: string) => {
    setFilter(kategori);
    setKlikFilter(kategori);
  };

  const filterProduk = (produk: any) => {
    if (filter === "") {
      return true;
    } else {
      return produk.kategori2 === filter;
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("product-container");
    if (container) {
      container.scrollLeft += 700;
      setScrollX(container.scrollLeft);
    }
  };

  const scrollLeft = () => {
    const container = document.getElementById("product-container");
    if (container) {
      container.scrollLeft -= 700;
      setScrollX(container.scrollLeft);
    }
  };

  const containerRef = useRef(null)

  return (
    <>
      <section className="container  mx-auto mb-32 max-w-[1336px] max-h-[1141px]">
        <p className="text-[50px] max-w-[1320px] max-h[1141px] text-center mb-10">
          Or Subscribe To The Newsletter
        </p>
        <div className="mb-10 px-6 max-w-[1320px] max-h[1141px] flex items-center justify-between">
          <div className="flex gap-4  ">
            <button
              onClick={() => handleFilter("")}
              className={`text-[16px] ${
                klikFilter === ""
                  ? "text-Black font-bold"
                  : "text-black text-opacity-50"
              } border-b-2 border-transparent focus:outline-none`}
            >
              All Products
            </button>
            <button
              onClick={() => handleFilter("T-Shirt")}
              className={`text-[16px] ${
                klikFilter === "T-Shirt"
                  ? "text-Black font-bold"
                  : "text-black text-opacity-50"
              } border-b-2 border-transparent focus:outline-none`}
            >
              T-Shirt
            </button>
            <button
              onClick={() => handleFilter("Hoodies")}
              className={`text-[16px] ${
                klikFilter === "Hoodies"
                  ? "text-Black font-bold"
                  : "text-black text-opacity-50"
              } border-b-2 border-transparent focus:outline-none`}
            >
              Hoodies
            </button>
            <button
              onClick={() => handleFilter("Jacket")}
              className={`text-[16px] ${
                klikFilter === "Jacket"
                  ? "text-Black font-bold"
                  : "text-black text-opacity-50"
              } border-b-2 border-transparent focus:outline-none`}
            >
              Jacket
            </button>
          </div>
          <p className="text-white text-[16px] bg-[#1E2832] w-[92px] h-[32px] justify-center flex items-center cursor-pointer">
            <Image
              className=""
              src={"/gktau.png"}
              height={20}
              width={20}
              alt=""
            ></Image>
            Filter
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 ">
          {produk.filter(filterProduk).map((items, i) => (
            <Produk
              key={i}
              nama={items?.nama}
              gambar={items?.gambar}
              kategori={items?.kategori}
              harga={items?.harga}
              diskon={items?.diskon}
            />
          ))}
        </div>
      </section>

      <Brand />

      <div className="mt-40 mx-auto w-[1336px] max-h-[1141px]">
        <p className="text-[50px] text-center mb-10 font-bold">Best Sellers</p>
        <div className="mb-10 px-6 max-w-[1320px] max-h[1141px] flex items-center justify-between">
          <div className="flex gap-4  ">
            <button
              onClick={() => handleFilter("")}
              className={`text-[16px] ${
                klikFilter === ""
                  ? "text-Black font-bold"
                  : "text-black text-opacity-50"
              } border-b-2 border-transparent focus:outline-none`}
            >
              All Products
            </button>
            <button
              onClick={() => handleFilter("T-Shirt")}
              className={`text-[16px] ${
                klikFilter === "T-Shirt"
                  ? "text-Black font-bold"
                  : "text-black text-opacity-50"
              } border-b-2 border-transparent focus:outline-none`}
            >
              T-Shirt
            </button>
            <button
              onClick={() => handleFilter("Hoodies")}
              className={`text-[16px] ${
                klikFilter === "Hoodies"
                  ? "text-Black font-bold"
                  : "text-black text-opacity-50"
              } border-b-2 border-transparent focus:outline-none`}
            >
              Hoodies
            </button>
            <button
              onClick={() => handleFilter("Jacket")}
              className={`text-[16px] ${
                klikFilter === "Jacket"
                  ? "text-Black font-bold"
                  : "text-black text-opacity-50"
              } border-b-2 border-transparent focus:outline-none`}
            >
              Jacket
            </button>
          </div>
          <p className="text-white text-[16px] bg-[#1E2832] w-[92px] h-[32px] justify-center flex items-center cursor-pointer">
            Show All
          </p>
        </div>

        <div className="relative">
          <div
          ref={containerRef}
            id="product-container"
            className="flex flex-nowrap w-[1320px] h-[500px] overflow-x-auto justify-center gap-4 hide-scrollbar"
            style={{scrollBehavior: "smooth"}}
          >
            {produk.filter(filterProduk).map((items, i) => (
              <div key={i}>
                <Produk
                  nama={items?.nama}
                  gambar={items?.gambar}
                  kategori={items?.kategori}
                  harga={items?.harga}
                  diskon={items?.diskon}
                />
              </div>
            ))}
          </div>
          {/* Tombol anak panah ke kanan */}
          <button
            className="absolute top-1/2 right-5 transform rotate-180 -translate-y-12  rounded-full p-2"
            onClick={scrollRight}
          >
            <Image
              className=""
              src={"/v6-icon.png"}
              height={40}
              width={40}
              alt=""
            ></Image>
          </button>
          {/* Tombol anak panah ke kiri */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-12  rounded-full p-2"
            onClick={scrollLeft}
          >
            <Image
              className=""
              src={"/v6-icon.png"}
              height={40}
              width={40}
              alt=""
            ></Image>
          </button>
        </div>
      </div>
    </>
  );
}
