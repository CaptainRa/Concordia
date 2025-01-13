
import { CiMail } from "react-icons/ci";
import { Link } from "react-scroll";
import { Link as PageLink} from '@inertiajs/react';
import Services from "./Services";
import Section from "./Section";
import Company from "./Company";
import Reports from "./Reports";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";


export default function Footer() {
    return (
        <div className="flex w-full h-[250px] flex-row bg-dark-bg items-start py-4 justify-center px-8 gap-8">
            <div className="w-full flex flex-col items-start justify-center text-white">
                <Company />
            </div>
            <div className="w-full flex flex-col items-start justify-center text-white">
                <Services />
            </div>
            <div className="w-full flex flex-col items-start justify-center text-white">
                <Section />
            </div>
            <div className="w-full flex flex-col items-start justify-center text-white">
              <Reports />
            </div>
            <div className="w-full flex flex-col items-centerjustify-center text-white">
                <h1 className="text-xl font-semibold"> Contact Us</h1>
                <div className="flex w-full flex-row items-center justify-start text-white mt-4 gap-2">
                    <CiMail className="text-white w-5 h-5" />
                    <h1 className="text-sm font-normal">
                        daffa.meganendra@gmail.com
                    </h1>
                </div>
                <div className="flex w-full flex-row items-center justify-start text-white mt-2 gap-2">
                    <FaInstagram className="text-white w-5 h-5" />
                    <h1 className="text-sm font-normal">
                        falydra
                    </h1>
                    <FaInstagram className="text-white w-5 h-5" />
                    <h1 className="text-sm font-normal">
                        taratirzaa
                    </h1>
                </div>
                <div className="flex w-full flex-row items-center justify-start text-white mt-2 gap-2">
                    <FaXTwitter className="text-white w-5 h-5" />
                    <h1 className="text-sm font-normal">
                       Oriessi
                    </h1>
                    <FaXTwitter className="text-white w-5 h-5" />
                    <h1 className="text-sm font-normal">
                        ndogdadaarr
                    </h1>
                </div>
                <h1 className="text-md font-light mt-4"> 
                    Get in touch with us
                </h1>
                <form className="relative flex flex-row w-full items-center justify-center">
                    <input type="text" placeholder="Email" className=" w-full h-8 rounded-md ">
                       
                    </input>
                    <button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black"
                        >
                            <IoSend  />

                    </button>

                   
                   
                </form>
                

            </div>
        </div>
    );
}