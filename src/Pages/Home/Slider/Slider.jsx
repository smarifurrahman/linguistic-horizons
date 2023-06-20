import { HiArrowRight } from "react-icons/hi";

const Slider = () => {
    return (
        <section className="carousel w-full h-[90vh] md:h-screen">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/0J3910W/slide-1.jpg" className="w-full object-cover" />
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
                <img src="https://i.ibb.co/bK2Bct4/slide-2.jpg" className="w-full object-cover" />
                <div className="absolute text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full h-full flex items-center">
                    <div className='w-[85%] mx-auto'>
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
                    <a href="#slide1" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/L0ZkQZ6/slide-3.jpg" className="w-full object-cover" />
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
                    <a href="#slide2" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/W5Nghns/slide-4.jpg" className="w-full object-cover" />
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
                    <a href="#slide3" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-transparent border-white hover:bg-primary-color hover:border-primary-color">❯</a>
                </div>
            </div>
        </section>
    );
};

export default Slider;