import Image from "next/image";
import { Suspense } from "react";

// UI components
import Row from "@/app/components/Row";
import SuspenseRow from "@/app/components/SuspenseRow";

// Icons
import menu from "@/public/menu.svg";
import r from "@/public/r.svg";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="app w-[390px] h-[844px] bg-gray-200 flex-col justify-center items-center inline-flex rounded-3xl shadow border-4 border-white border-opacity-100">
        <div className="self-stretch grow shrink basis-0 p-5 flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="self-stretch justify-between items-center inline-flex mb-1">
            <div className="justify-start items-center gap-2 flex">
              <div className="status w-5 h-5 bg-blue-600 rounded-full border-4 border-white " />
              <div className="text-black text-[25px] font-medium">
                My health metrics
              </div>
            </div>
            <Image alt="menu" src={menu} />
          </div>
          <Suspense fallback={<SuspenseRow />}>
            <Row route={"heart-rate"} />
          </Suspense>
          <Suspense fallback={<SuspenseRow />}>
            <Row route={"calories"} />
          </Suspense>
          <Suspense fallback={<SuspenseRow />}>
            <Row route={"steps"} />
          </Suspense>
          <Suspense fallback={<SuspenseRow />}>
            <Row route={"sleep"} />
          </Suspense>
          <Suspense fallback={<SuspenseRow />}>
            <Row route={"screen-time"} />
          </Suspense>
          <Suspense fallback={<SuspenseRow />}>
            <Row route={"glucose-level"} />
          </Suspense>
          <div className="brand self-stretch py-3 justify-center items-start gap-[9px] inline-flex mt-1">
            <Image alt="Rendr logo" className="w-16 h-16" src={r} />
          </div>
        </div>
      </div>
    </main>
  );
}
