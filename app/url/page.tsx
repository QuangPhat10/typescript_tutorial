"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";

const data = [
  {
    id: 1,
    name: "house",
    sub_data: [
      {
        id: 1,
        size: "s",
        quantity: 1,
      },
      {
        id: 2,
        size: "m",
        quantity: 0,
      },
      {
        id: 3,
        size: "l",
        quantity: 1,
      },
      {
        id: 4,
        size: "xl",
        quantity: 1,
      },
      {
        id: 5,
        size: "xxl",
        quantity: 0,
      },
    ],
  },
  {
    id: 2,
    name: "bell",
    sub_data: [
      {
        id: 1,
        size: "s",
        quantity: 1,
      },
      {
        id: 2,
        size: "m",
        quantity: 1,
      },
      {
        id: 3,
        size: "l",
        quantity: 1,
      },
      {
        id: 4,
        size: "xl",
        quantity: 1,
      },
      {
        id: 5,
        size: "xxl",
        quantity: 1,
      },
    ],
  },
  {
    id: 3,
    name: "check",
    sub_data: [
      {
        id: 1,
        size: "s",
        quantity: 1,
      },
      {
        id: 2,
        size: "m",
        quantity: 1,
      },
      {
        id: 3,
        size: "l",
        quantity: 1,
      },
      {
        id: 4,
        size: "xl",
        quantity: 1,
      },
      {
        id: 5,
        size: "xxl",
        quantity: 1,
      },
    ],
  },
  {
    id: 4,
    name: "moon",
    sub_data: [
      {
        id: 1,
        size: "s",
        quantity: 1,
      },
      {
        id: 2,
        size: "m",
        quantity: 1,
      },
      {
        id: 3,
        size: "l",
        quantity: 1,
      },
      {
        id: 4,
        size: "xl",
        quantity: 1,
      },
      {
        id: 5,
        size: "xxl",
        quantity: 1,
      },
    ],
  },
];

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const selectedList = (searchParams.list || "house") as string;
  const selectedSize = (searchParams.size || "l") as string;

  const Size = ({ size }: { size: string }) => {
    if (size === "s") {
      return "text-[4rem]";
    } else if (size === "m") {
      return "text-[6rem]";
    } else if (size === "l") {
      return "text-[8rem]";
    } else if (size === "xl") {
      return "text-[10rem]";
    } else {
      return "text-[12rem]";
    }
  };
  const [listSize, setListSize] = useState<
    { id: number; size: string; quantity: number }[]
  >([]);
  const [checkQuantity, setCheckQuantity] = useState(false);

  useEffect(() => {
    if (selectedList) {
      const updatedListSize =
        data.find((item) => item.name === selectedList)?.sub_data || [];
      setListSize(updatedListSize);
    }
  }, [data, selectedList]);

  useEffect(() => {
    if (listSize) {
      listSize.map((item) => {
        if (item.size === selectedSize && item.quantity < 1) {
          console.log("abc");
          setCheckQuantity(true);
        } else {
          setCheckQuantity(false);
          console.log("123");
        }
      });
    }
  }, [listSize, selectedSize]);
  console.log("check", checkQuantity);
  return (
    <main className="w-full h-screen bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <div className="grid grid-cols-2 gap-2 m-5 min-h-72">
        <section className="flex flex-col justify-center items-center gap-4 ">
          <div className="flex flex-initial h-64 items-center justify-center">
            <i
              className={`fa-solid fa-${selectedList} ${Size({
                size: selectedSize,
              })}`}
            ></i>
          </div>
          <p className="text-[1rem] font-bold">
            List: {selectedList.toUpperCase()} & Size:{" "}
            {selectedSize.toUpperCase()}
          </p>
        </section>
        <div className="flex-1 ">
          <p className="text-[2rem] mb-2 font-semibold">
            Sản phẩm mới {selectedList}
          </p>
          <section className="inline-block bg-blue-500 text-white px-2 py-1 rounded-full mt-3 mb-10 text-[1.8rem]">
            $200
          </section>
          <div>
            <section>
              <h2 className="text-[1.5rem] mb-5">List: </h2>
              <div className="flex gap-2">
                {data.map((item) => (
                  <Link
                    className={`bg-gray-100 px-4 py-1 rounded-full border-2 ${
                      selectedList === item.name
                        ? "border-blue-500"
                        : "border-gray-200"
                    }`}
                    key={item.id}
                    href={`?${new URLSearchParams({
                      list: item.name,
                      size: selectedSize,
                    })}`}
                  >
                    {item.name.toUpperCase()}
                  </Link>
                ))}
              </div>
            </section>
            <section className="mt-2">
              <h2 className="text-[1.5rem] mb-5">Size:</h2>
              <div className="flex gap-4">
                {listSize.map((sub_item) => (
                  <Link
                    className={`bg-gray-100 px-4 py-1 rounded-full border-2 ${
                      selectedSize === sub_item.size
                        ? "border-blue-500"
                        : "border-gray-200"
                    }  ${
                      sub_item.quantity < 1
                        ? "pointer-events-none bg-gray-100 text-gray-400"
                        : ""
                    }`}
                    key={sub_item.id}
                    href={`?${new URLSearchParams({
                      list: selectedList,
                      size: sub_item.size,
                    })}`}
                  >
                    {sub_item.size.toUpperCase()}
                  </Link>
                ))}
              </div>
              <p className="text-red-500 font-bold h-1 mt-2">
                {checkQuantity ? "Đã hết hàng" : ""}
              </p>
            </section>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full mt-10"
            type="button"
          >
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default page;
