import Link from 'next/link';
import React from 'react';

const Footer = () => {

    return (
        <footer className="bg-[#f7f5fb] py-[10px]">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="flex flex-wrap w-full">
                <div className="w-full px-[12px]">
                    <div className="bix-footer-contact flex justify-between max-[480px]:flex-col max-[480px]:justify-center max-[480px]:text-center">
                        <p className="font-montserrat text-[15px] font-medium text-[#777] leading-[30px] tracking-[0.03rem] m-[0] max-[480px]:mb-[8px]">&copy; <span id="copyright_year"></span> <Link  href="javascript:void(0)" className="font-semibold">Biox</Link >, All Rights Reserved.</p>
                        <div className="logo-links flex justify-center">
                            <Link  href="javascript:void(0)" className="h-[30px] w-[30px] mx-[5px] relative flex flex-wrap items-center justify-center border-[1px] border-solid border-[#111a24] rounded-[20px] hover:bg-[#111a24]">
                                <i className="ri-facebook-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#111a24]"></i>
                            </Link >
                            <Link  href="javascript:void(0)" className="h-[30px] w-[30px] mx-[5px] relative flex flex-wrap items-center justify-center border-[1px] border-solid border-[#111a24] rounded-[20px] hover:bg-[#111a24]">
                                <i className="ri-instagram-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#111a24]"></i>
                            </Link >
                            <Link  href="javascript:void(0)" className="h-[30px] w-[30px] mx-[5px] relative flex flex-wrap items-center justify-center border-[1px] border-solid border-[#111a24] rounded-[20px] hover:bg-[#111a24]">
                                <i className="ri-twitter-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#111a24]"></i>
                            </Link >
                            <Link  href="javascript:void(0)" className="h-[30px] w-[30px] mx-[5px] relative flex flex-wrap items-center justify-center border-[1px] border-solid border-[#111a24] rounded-[20px] hover:bg-[#111a24]">
                                <i className="ri-linkedin-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#111a24]"></i>
                            </Link >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};


export default Footer;