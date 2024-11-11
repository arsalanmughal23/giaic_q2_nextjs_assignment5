import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import Image from "next/image";


export default function Header() {
    return (
        <header className="bg-primary h-[135.01px] flex justify-center">
            <div className="w-full px-[6%] flex justify-between items-center gap-5">                    
                <div className="">
                    <Image
                        alt="Purity Logo"
                        src={'/assets/img/logo.png'}
                        width={242.56}
                        height={87.45}
                    />
                </div>
                <div className="w-full flex justify-end items-center gap-32">
                    <div className="w-full min-w-[180px] max-w-[860px] flex bg-white rounded-2xl p-4">
                        <input className="w-full outline-0 pl-2 text-gray-500 text-lg" placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"/>
                        <Search color="black"/>
                    </div>
                    <div className="flex gap-[38.7px]">
                        <Heart color="white" size={36} />
                        <UserRound color="white" size={36} />
                        <ShoppingCart color="white" size={36} />
                    </div>
                </div>
            </div>
        </header>
    );
}