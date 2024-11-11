import Image from 'next/image';
import { libreBodoni } from '@/app/lib/fonts';

export default function HeroSection() {
    return (
        <div className={`${libreBodoni.className} flex justify-evenly items-center mt-[165.97px]`}>
            <div className="max-w-[798.9px] flex flex-wrap md:gap-10">
                <h1
                    className={`max-w-[472.97] leading-[62.24px] text-[37.84px] font-bold mb-4`} // h-[162.53px] w-[472.97px] mb-[60.2px]
                >
                    IMPECCABLE CRAFTSMANSHIP AND FINESSE
                </h1>
                <p
                    className={`mb-1 font-medium leading-[48.1px] text-[29.24px] text-[#787054]`} // w-[798.9px] h-[144px] mb-[42.61px]
                >
                    An example of intricate workmanship and detail, elegant necklaces and long
                    and short chains form a part of our desirable collection.
                </p>
                <button
                    className={`text-white bg-[#A29875] font-medium px-6 p-[8.6px] text-[25.8px] rounded-[8.6px]`}
                >
                    Explore Now
                </button>
            </div>
            <div className="h-fit">
                <div>
                    <Image
                        src={'/assets/img/hero_image.png'}
                        width={421.38}
                        height={573.59}
                        alt="heroSectionImage"
                    />
                </div>
            </div>
        </div>
    );
}