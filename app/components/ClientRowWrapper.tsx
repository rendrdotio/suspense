"use client";

import { Suspense, use, useEffect, useState } from "react";
import Image from "next/image";

// UI components
import ErrorBoundary from "@/app/components/ErrorBoundary";
import ErrorRow from "@/app/components/ErrorRow";
import SuspenseRow from "@/app/components/SuspenseRow";

// Helpers
// import getData from "@/app/lib/get-data";

// Icons
import arrowDown from "@/public/arrow-down.svg";
import arrowUp from "@/public/arrow-up.svg";
import glucose from "@/public/glucose.svg";
import heart from "@/public/heart.svg";
import phone from "@/public/phone.svg";
import pulse from "@/public/pulse.svg";
import shoe from "@/public/shoe.svg";
import timer from "@/public/timer.svg";

const icons: any = {
  glucose,
  heart,
  phone,
  pulse,
  shoe,
  timer,
};

const getData = async (route: string) => {
  const res = await fetch(`http://localhost:3001/api/${route}`, {
    cache: "no-cache",
  }).then((res) => res.json());

  return res?.data;
};

const ClientRowWrapper = ({ route }: { route: string }) => {
  return (
    // <ErrorBoundary fallback="THJIS ONE">
    <Suspense fallback={<SuspenseRow />}>
      <Row route={route} />
    </Suspense>
    // </ErrorBoundary>
  );
};

const Row = ({ route }: { route: string }) => {
  // const [data, setData] = useState<any>(null);

  // useEffect(() => {
  //   getData(route).then((data) => setData(data));
  // }, [route]);

  // if (!data) return null;

  const data = use(getData(route));

  return (
    <div className="flex justify-between p-2.5 bg-white rounded-[26px] shadow border border-black border-opacity-10 items-center w-full">
      <div className="flex items-center">
        <div className="w-20 h-20 mr-5">
          <div className="w-20 h-20 bg-blue-600 rounded-[22px] flex justify-center items-center">
            <Image alt="icon" src={icons[data.icon]} />
          </div>
        </div>
        <div className="w-34">
          <div className="text-neutral-400 font-normal text-xl">
            {data.label}
          </div>
          <div className="text-black font-medium leading-7 text-2xl">
            {data.value}
          </div>
        </div>
      </div>
      <div className="flex mr-2">
        <div className="w-6 h-6 mt-1">
          <Image
            alt="arrow"
            src={data.varianceDirection === "up" ? arrowUp : arrowDown}
          />
        </div>
        <div className="text-blue-600 text-[23px] font-normal">
          {data.variance}
        </div>
      </div>
    </div>
  );
};

export default ClientRowWrapper;
