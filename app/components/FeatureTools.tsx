import Image from 'next/image';
import React from 'react';

const FeatureTools = () => {
    
    
    return (
        <>
        <div className="bix-tools-sidebar-overlay w-full h-screen hidden fixed top-0 left-0 z-[41] bg-[#00000080] blur-[2px]"></div>
        <div className="bix-tools-sidebar w-[300px] h-screen fixed right-[0] top-[0] bg-[#fff] z-[42] transition-all duration-[0.3s] ease translate-x-[300px]">
            <a href="javascript:void(0)" className="bix-tools-sidebar-toggle in-out absolute top-[45%] right-[302px] w-[40px] h-[40px] bg-[#1d253199] transition-all ease-in duration-[0.3s] flex items-center justify-center text-[25px] z-[-1] rounded-[5px]">
                <i className="ri-settings-3-line text-[#fff]"></i>
            </a>
            <div className="bix-bar-title mb-[15px] p-[15px] flex flex-row justify-between items-center border-b-[1px] border-solid border-[#eae8ef]">
                <h6 className="m-[0] font-montserrat text-[17px] font-bold text-[#111a24] tracking-[0.03rem] leading-[1.2]">Tools</h6>
                <a href="javascript:void(0)" className="close-tools text-[#ff0000] text-[17px]"><i className="ri-close-line"></i></a>
            </div>
            <div className="bix-tools-detail h-[calc(100vh-72px)] pb-[15px] px-[15px] overflow-auto">
                <div className="bix-tools-block">
                    <h3 className="font-montserrat my-[15px] text-[14px] font-medium text-[#111a24] tracking-[0.03rem] leading-[1.2]">Select Color</h3>
                    <ul className="bix-color m-[0] p-[0]">
                        <li className="color-primary inline-block h-[35px] w-[35px] m-[6px] rounded-[5px] cursor-pointer align-middle relative bg-[#f41a4a] active-variant"></li>
                        <li className="color-1 inline-block h-[35px] w-[35px] m-[6px] rounded-[5px] cursor-pointer align-middle relative bg-[#7b18d5]"></li>
                        <li className="color-2 inline-block h-[35px] w-[35px] m-[6px] rounded-[5px] cursor-pointer align-middle relative bg-[#5f6af5]"></li>
                        <li className="color-3 inline-block h-[35px] w-[35px] m-[6px] rounded-[5px] cursor-pointer align-middle relative bg-[#f5885f]"></li>
                        <li className="color-4 inline-block h-[35px] w-[35px] m-[6px] rounded-[5px] cursor-pointer align-middle relative bg-[#32dbe2]"></li>
                        <li className="color-5 inline-block h-[35px] w-[35px] m-[6px] rounded-[5px] cursor-pointer align-middle relative bg-[#3f51b5]"></li>
                        <li className="color-6 inline-block h-[35px] w-[35px] m-[6px] rounded-[5px] cursor-pointer align-middle relative bg-[#f44336]"></li>
                        <li className="color-7 inline-block h-[35px] w-[35px] m-[6px] rounded-[5px] cursor-pointer align-middle relative bg-[#ed578a]"></li>
                        <li className="color-8 inline-block h-[35px] w-[35px] m-[6px] rounded-[5px] cursor-pointer align-middle relative bg-[#607d8b]"></li>
                        <li className="color-9 inline-block h-[35px] w-[35px] m-[6px] rounded-[5px] cursor-pointer align-middle relative bg-[#5caf90]"></li>
                    </ul>
                </div>
                <div className="bix-tools-block">
                    <h3 className="font-montserrat my-[15px] text-[14px] font-medium text-[#111a24] tracking-[0.03rem] leading-[1.2]">Modes</h3>
                    <div className="bix-tools-rtl m-[0] p-[0] flex flex-wrap flex-row justify-between">
                        <div className="mode-primary bix-tools-item mode w-[125px] mb-[10px] text-center active-mode ltr" data-bix-mode-tool="ltr">
                            <Image height={300} width={300} src="/assets/img/tools/ltr.png" alt="ltr" className="w-full p-[5px] rounded-[10px] border-[1px] border-solid border-[#eae8ef] hover:border-[#f41a4a]"/>
                            <p className="m-[0] capitalize font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">LTR</p>
                        </div>
                        <div className="mode-primary bix-tools-item mode w-[125px] mb-[10px] text-center rtl" data-bix-mode-tool="rtl">
                            <Image height={300} width={300} src="/assets/img/tools/rtl.png" alt="rtl" className="w-full p-[5px] rounded-[10px] border-[1px] border-solid border-[#eae8ef] hover:border-[#f41a4a]"/>
                            <p className="m-[0] capitalize font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">RTL</p>
                        </div>
                    </div>
                </div>
                <div className="bix-tools-block">
                    <h3 className="font-montserrat my-[15px] text-[14px] font-medium text-[#111a24] tracking-[0.03rem] leading-[1.2]">Dark Modes</h3>
                    <div className="bix-tools-dark m-[0] p-[0] flex flex-wrap flex-row justify-between">
                        <div className="mode-primary bix-tools-item mode w-[125px] mb-[10px] text-center active-dark-mode light" data-bix-mode-tool="light">
                            <Image height={300} width={300} src="/assets/img/tools/light.png" alt="light" className="w-full p-[5px] rounded-[10px] border-[1px] border-solid border-[#eae8ef] hover:border-[#f41a4a]"/>
                            <p className="m-[0] capitalize font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">Light</p>
                        </div>
                        <div className="bix-tools-item w-[125px] mb-[10px] text-center mode dark" data-bix-mode-tool="dark">
                            <Image height={300} width={300} src="/assets/img/tools/dark.png" alt="dark" className="w-full p-[5px] rounded-[10px] border-[1px] border-solid border-[#eae8ef] hover:border-[#f41a4a]"/>
                            <p className="m-[0] capitalize font-montserrat text-[14px] text-[#495461] font-normal leading-[26px] tracking-[0.03rem]">Dark</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default FeatureTools;