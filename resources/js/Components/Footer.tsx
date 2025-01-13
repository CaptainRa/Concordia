import { CiMail } from "react-icons/ci";

export default function Footer() {
    return (
        <div className="flex w-full h-[250px] flex-row bg-dark-bg items-start py-8 justify-center px-8">
            <div className="w-full flex flex-col items-start justify-center text-white">
                <h1 className="text-2xl font-semibold"> Concordia</h1>
                <h5 className="text-sm font-thin"> We're inspired by something that bring us <br/> forget about small task or else. <br/>So, we decide to create this our personal website <br/> to prevent loss scheduling and login streak of puzzle games.  </h5>
                <div className="flex w-full flex-row items-center justify-start text-white mt-4 gap-2">

                    <CiMail className="text-white w-5 h-5" />
                    <h1 className="text-sm font-normal">daffa.meganendra@gmail.com</h1>
                </div>
                <div className="flex w-full flex-row items-center justify-start text-white mt-2 gap-2">

                    <CiMail className="text-white w-5 h-5" />
                    <h1 className="text-sm font-normal">taraandina42@gmail.com</h1>
                </div>

            </div>
            <div className="w-full flex flex-row items-center justify-center text-white">
                <h1> Concordia</h1>

            </div>
        </div>
    );
}