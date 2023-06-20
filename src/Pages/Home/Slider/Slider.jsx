import slide1 from '../../../assets/banner/slide-1.jpg';
import slide2 from '../../../assets/banner/slide-2.jpg';
import slide3 from '../../../assets/banner/slide-3.jpg';
import slide4 from '../../../assets/banner/slide-4.jpg';

import { HiArrowRight } from "react-icons/hi";

const Slider = () => {
    return (
        <section className="carousel w-full h-screen">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slide1} className="w-full object-cover" />
                <div className="absolute text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full flex items-center">
                    <div className=' w-[85%] mx-auto'>
                        <div className='w-3/4 md:w-[60%]'>
                            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold font-playfair'>Unlock Your Potential with Linguistic Horizons</h1>
                            <p className='font-medium my-5'>Embark on an Unforgettable Linguistic Journey: Discover New Worlds, Forge Connections, and Master Multiple Languages with Linguistic Horizons!</p>
                            <a className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color text-dark px-6">
                                View Classes
                                <span className='ml-2'>
                                    <HiArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-14 bottom-3">
                    <a href="#slide4" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slide2} className="w-full object-cover" />
                <div className="absolute text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full flex items-center">
                    <div className=' w-[85%] mx-auto'>
                        <div className='w-3/4 md:w-1/2'>
                            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold font-playfair'>Unlock Your Potential with Linguistic Horizons</h1>
                            <p className='font-medium my-5'>Embark on an Unforgettable Linguistic Journey: Discover New Worlds, Forge Connections, and Master Multiple Languages with Linguistic Horizons!</p>
                            <a className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color text-dark px-6">
                                View Classes
                                <span className='ml-2'>
                                    <HiArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-14 bottom-3">
                    <a href="#slide1" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slide3} className="w-full object-cover" />
                <div className="absolute text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full flex items-center">
                    <div className=' w-[85%] mx-auto'>
                        <div className='w-3/4 md:w-1/2'>
                            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold font-playfair'>Unlock Your Potential with Linguistic Horizons</h1>
                            <p className='font-medium my-5'>Embark on an Unforgettable Linguistic Journey: Discover New Worlds, Forge Connections, and Master Multiple Languages with Linguistic Horizons!</p>
                            <a className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color text-dark px-6">
                                View Classes
                                <span className='ml-2'>
                                    <HiArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-14 bottom-3">
                    <a href="#slide2" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={slide4} className="w-full object-cover" />
                <div className="absolute text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full flex items-center">
                    <div className=' w-[85%] mx-auto'>
                        <div className='w-3/4 md:w-1/2'>
                            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold font-playfair'>Unlock Your Potential with Linguistic Horizons</h1>
                            <p className='font-medium my-5'>Embark on an Unforgettable Linguistic Journey: Discover New Worlds, Forge Connections, and Master Multiple Languages with Linguistic Horizons!</p>
                            <a className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color text-dark px-6">
                                View Classes
                                <span className='ml-2'>
                                    <HiArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-14 bottom-3">
                    <a href="#slide3" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❯</a>
                </div>
            </div>
        </section>
    );
};

export default Slider;