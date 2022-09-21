import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Banner = () => {

    const slides = [
        { title: 'First item', description: 'Lorem ipsum' },
        { title: 'Second item', description: 'Lorem ipsum' }
    ];

    return (
        <div>
            <section>
                <Slider>
                    <div className="flex justify-between gap-5 mx-auto bg-slate-300">
                        <div className='flex-initial'>
                            <h1 className='text-7xl'>We are different</h1>
                            <h1 className=' mt-3 text-7xl'>From Other</h1>
                            <p className=' my-10'>
                                Our Online banking system
                                project's aim is to automate transactions of the bank and provide better and faster service to the
                                customers by using the internet.
                            </p>


                            <button className="btn btn-primary p-3 px-5 rounded-full">
                                Get Started
                            </button>


                        </div>

                        <div className=''>
                            <img src="https://i.ibb.co/1RNPK3X/dfshyrey.png" alt="" />
                        </div>
                    </div>
                </Slider>
            </section>
        </div>
    );
};

export default Banner;