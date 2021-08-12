import React, {useState} from "react";
import {Transition} from "@headlessui/react";
import ReactDom from 'react-dom';
import './MainContent.css'
/*import Carousel from "./Carousel/Carousel";*/

const MainContent = () => {

    return (
        <div className="mainContent py-6">
            <div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="iphone-12-main-text pt-20">
                        <div>
                            <div className="text-center">
                                <a href="#" className="space-y-3">
                                    <div className="font-semibold lg:text-5xl md:text-3xl sm:text-2xl text-2xl">
                                        iPhone 12
                                    </div>
                                    <div className="font-normal lg:text-2xl text-xl">
                                        Blast past fast
                                    </div>
                                    <div className="font-normal text-lg text-gray-400">
                                        From $29.12/mo. for 24 mo. or $699 before trade‑in <br/>
                                        Buy directly from Apple with special carrier offers
                                    </div>
                                </a>
                                <div className="space-x-8 space-y-6">
                                    <a href="#" className="hover:underline text-blue-500 text-xl font-normal">
                                        Learn more
                                        <i className="fas fa-chevron-right ml-2"/>
                                    </a>
                                    <a href="#" className="hover:underline text-blue-500 text-xl font-normal">
                                        Buy
                                        <i className="fas fa-chevron-right ml-2"/>
                                    </a>
                                </div>
                            </div>
                            <div className="">
                                <img src="https://pngimg.com/uploads/iphone_12/iphone_12_PNG23.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-black my-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center py-12">
                            <a href="#" className="space-y-3">
                                <div className="font-semibold lg:text-5xl md:text-3xl sm:text-2xl text-2xl text-white">
                                    iPhone 12 Pro
                                </div>
                                <div className="font-normal lg:text-2xl text-xl text-white">
                                    It's a leap year
                                </div>
                                <div className="font-normal text-lg text-gray-400">
                                    From $29.12/mo. for 24 mo. or $699 before trade‑in <br/>
                                    Buy directly from Apple with special carrier offers
                                </div>
                            </a>
                            <div className="space-x-8 space-y-6">
                                <a href="#" className="hover:underline text-blue-500 text-xl font-normal">
                                    Learn more
                                    <i className="fas fa-chevron-right ml-2"/>
                                </a>
                                <a href="#" className="hover:underline text-blue-500 text-xl font-normal">
                                    Buy
                                    <i className="fas fa-chevron-right ml-2"/>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <img className="" src="https://assets.website-files.com/5e07e1f676f1c6deddaff358/5f8b8d11a4a54ef67c43e285_hero_endframe_portrait__k4dfs3u1zwi2_medium_2x.jpg"
                                 alt="iphone-12-pro"/>
                        </div>
                    </div>
                </div>
            </div>
            {/*iPad*/}
            <div>
                <div className="bg-black my-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center py-12">
                            <a href="#" className="space-y-3">
                                <div className="font-semibold lg:text-5xl md:text-3xl sm:text-2xl text-2xl text-white">
                                    iPad Pro
                                </div>
                                <div className="font-normal lg:text-2xl text-xl text-white">
                                    Supercharged by the Apple M1 chip
                                </div>
                                <div className="font-normal text-lg text-gray-400">
                                    From $29.12/mo. for 24 mo. or $699 before trade‑in <br/>
                                    Buy directly from Apple with special carrier offers
                                </div>
                            </a>
                            <div className="space-x-8 space-y-6">
                                <a href="#" className="hover:underline text-blue-500 text-xl font-normal">
                                    Learn more
                                    <i className="fas fa-chevron-right ml-2"/>
                                </a>
                                <a href="#" className="hover:underline text-blue-500 text-xl font-normal">
                                    Buy
                                    <i className="fas fa-chevron-right ml-2"/>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <img className="" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-og-202104?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1618674417000"
                                 alt="iphone-12-pro"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent;
