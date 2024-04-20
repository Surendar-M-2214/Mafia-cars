import Link from "next/link";

export default function App(){

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              VR Mode
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-5">
    <Link href={`https://www.kia.com/in/vr/showroom/index.html`}>
Kia cars
    </Link>
    <Link href={`https://configure.bmw.in/en_IN/configure/I20/22CF_ZH1Q/FSACX,P0A96,S01LB,S02VB,S02VR,S0300,S0322,S0323,S0330,S0358,S0407,S0428,S042A,S04AA,S04FM,S04NB,S04U9,S04V1,S05AS,S05DN,S0688,S06C3,S06CP,S06NX,S06U7`}>
Xuv cars
    </Link>
    <Link href={`https://cc.mgmotor.co.in/mgexpert/#/new-hectorplus/home?utm_source=landing&utm_medium=web&utm_campaign=expert`}>
Hector cars
    </Link>
     </div>
        </div>
        </div>
   
    );


  }
  