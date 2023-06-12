import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className='mt-24 py-24 bg-dark bg-opacity-95'>
            <div className='w-[85%] mx-auto grid lg:grid-cols-6 gap-14 text-footer-white'>
                <div className='col-span-2'>
                    <h3 className='text-white mb-5 text-2xl font-bold'>Linguistic Horizons</h3>
                    <p className='mb-5 text-justify'>Unlock Your Language Potential with Linguistic Horizons: Explore, Learn, and Connect in the World of Languages!</p>
                    <div className="md:place-self-center md:justify-self-end">
                        <div className="flex gap-4">
                            <a className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h5 className='text-lg font-semibold text-white'>Company</h5>
                    <Link>About Us</Link>
                    <Link>Reviews</Link>
                    <Link>Customers</Link>
                    <Link>Sellers</Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <h5 className='text-lg font-semibold text-white'>Product</h5>
                    <Link>Latest Toys</Link>
                    <Link>Prototype</Link>
                    <Link>Pricing</Link>
                    <Link>Career</Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <h5 className='text-lg font-semibold text-white'>Support</h5>
                    <Link>Help Desk</Link>
                    <Link>Corporate Sales</Link>
                    <Link>Become a Partner</Link>
                    <Link>Developers</Link>
                </div>
                <div className='flex flex-col gap-4'>
                    <h5 className='text-lg font-semibold text-white'>Contact</h5>
                    <Link>Chittagong - 4000, Bangladesh.</Link>
                    <Link>+88 011 - 222 - 555</Link>
                </div>
            </div>
            <div className='w-[85%] mx-auto'>
                <hr className='my-12 bg-light-dark pt-[1px] border-none' />
                <div className='flex flex-col md:flex-row justify-between items-center text-sm text-footer-white gap-4'>
                    <p> &copy; 2023 <span className='font-semibold'>Linguistic Horizons</span>. All Rights Reserved</p>
                    <p>Made with <span className="text-[#E41B17]">&#x2764;</span> by <span className="font-semibold">S M Arifur Rahman</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;