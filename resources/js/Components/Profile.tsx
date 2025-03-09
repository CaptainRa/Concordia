import { BlackHoleStars } from "./BlackholeStars";
import { Button } from "./ui/button";

export default function Profile() {
    const handleDownloadCV = () => {
        
        const link = document.createElement("a");
        link.href = "/files/CV%20Daffa%20Aly%20M.pdf"; 
        link.download = "CV_Daffa_Aly_Meganendra.pdf"; 
        link.click();
      };
  return (
    <div
      className="relative flex flex-row w-full h-screen bg-transparent px-12"
      id="profile-section"
    >
      {/* Left Panel */}
      <div className="flex-1 h-[272px] w-full rounded-3xl rounded-tr-none rounded-br-none flex flex-row gap-6 pt-16 px-4 pb-16 bg-white bg-opacity-30 items-center justify-center">
        <div className="w-[125px] h-[125px] bg-white rounded-full flex items-center justify-center"/>
        <div className="w-[225px] h-[125px] flex flex-col items-start justify-center">
            <h1 className="text-black text-xl font-bold">
            Daffa Aly Meganendra
            </h1>
            <h2 className="text-black text-sm font-semibold">
                Informatika S1 - 2022
            </h2>
            <h4 className="text-black text-xs font-semibold">
                21 Years Old
            </h4>
            <Button
            onClick={handleDownloadCV}
            className=" mt-4 bg-transparent backdrop-blur-xl border border-dark-fg w-[125px] h-[35px] text-white rounded-xl"
            variant="default"
            >
                Download CV
            </Button>




        </div>
      </div>

      {/* Divider with BlackHole */}
      <div className="h-4 w-0 relative flex-shrink-0 items-center bg-transparent z-10">
        <div className="block absolute -left-4 skew-x-[42deg] top-0 h-[272px] w-4 bg-black" />
        <div className="absolute top-36 -left-1 -translate-x-1/2 -translate-y-1/2 bg-black w-[78px] h-[78px] rounded-full flex items-center justify-center overflow-hidden">
          <BlackHoleStars />
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 h-[272px] rounded-3xl flex-row rounded-tl-none rounded-bl-none gap-6 pb-6 px-4 pt-8 bg-white bg-opacity-30 flex items-center justify-center">
        <div className="w-[225px] h-[125px] flex flex-col items-end justify-center">
          <h1 className="text-black text-xl font-bold">
            Tara Tirzandina
          </h1>
          <h2 className="text-black text-sm font-semibold">
            Informatika S1 - 2022
          </h2>
          <h4 className="text-black text-xs font-semibold">
            21 Years Old
          </h4>
          <Button
           
            className=" mt-4 bg-transparent backdrop-blur-xl border border-dark-fg w-[125px] h-[35px] text-white rounded-xl"
            variant="default"
            >
                Download CV
            </Button>
        </div>
      <div className="w-[125px] h-[125px] bg-white rounded-full flex items-center justify-center"/>
      </div>
    </div>
  );
}
