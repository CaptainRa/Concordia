export default function Navbar(){
    return (
        <div className="w-full fixed ">
            <div className="flex-row flex w-full h-[85px] backdrop-blur-md z-15   items-center justify-center top-0 left-0 sticky">
                <div className="flex w-full h-full items-center justify-center">
                    <div className="flex w-full items-center justify-center">
                        <div className="text-3xl font-bold text-center text-white">Jupiter</div>
                    </div>
                    <div className="flex w-full items-center justify-center">
                      <h1>
                        Home
                      </h1>
                      <h2>
                        About
                      </h2>
                        <h3>
                            Contact
                        </h3>
                    </div>
                    <div className="flex w-full items-center justify-center">
                        Login
                    </div>
                </div>
            </div>

        </div>

    )
}

