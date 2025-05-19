import React from 'react';
import Navbar from '../../components/navbar';
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query'
import { postSignUp } from '../../service/authService';
import Proptypes from 'prop-types';

const Pricing = ({ data }) => {
    // console.log(data);
    const { isLoading, mutateAsync } = useMutation({
        mutationFn: () => postSignUp(data)
    })
    const submitData = async () => {
        try {
            if (!data) {
                return
            }
            const response = await mutateAsync();
            console.log(response);
            window.location.replace(response.data.midtrans_payment_url)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="relative flex flex-col flex-1 p-4">
            <div className="absolute w-[calc(100%-20px)] min-h-[calc(100vh-20px)] h-[calc(100%-20px)] bg-[#060A23] -z-10 rounded-[20px]">
                <img
                    src="/assets/images/backgrounds/background-glow.png"
                    className="absolute bottom-0 transform -translate-x-1/2 left-1/2"
                    alt="background glow"
                />
            </div>

            {/* Navigation */}
            {/* <nav className="flex items-center justify-between p-8">
                <Navbar />
                <div className="flex items-center gap-3">
                    {[
                        { text: 'My Dashboard', link: '/manager/sign-in', bg: 'bg-[#070B24]', border: 'border-[#24283E]' },
                        { text: 'Sign Up', link: '#', bg: 'bg-[#662FFF]', border: 'border-[#8661EE]' }
                    ].map((btn, index) => (
                        <Link to={btn.link} key={index}>
                            <div className={`flex items-center gap-3 w-fit rounded-full border p-4 transition-all duration-300 ${btn.bg} ${btn.border} hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset]`}>
                                <span className="font-semibold text-white">{btn.text}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </nav> */}

            {/* Header */}
            <header className="flex flex-col items-center gap-5 text-center mt-12">
                <h1 className="font-extrabold text-4xl leading-[69px] text-white">
                    Best Pricing For Everyone<br />Who Wants to Grow Business
                </h1>
                <p className="text-lg text-white">We deliver robust features to anyone unconditionally.</p>
            </header>

            {/* Pricing Cards */}
            <div className="grid grid-cols-2 gap-8 max-w-[840px] mx-auto mt-12">
                {/* Plan Pertama */}
                <div className="card flex flex-col h-fit rounded-2xl border border-[#262A56] p-8 gap-8 bg-[#080A2A]">
                    <img src="/assets/images/icons/note-favorite-white.svg" className="w-14 h-14" alt="icon" />
                    <div>
                        <p className="font-extrabold text-4xl text-white">Rp 80.000</p>
                        <p className="text-[#6B6C7F] mt-2">Billed every single month</p>
                    </div>
                    <hr className="border-[#262A56]" />
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-2">
                            <img src="/assets/images/icons/tick-circle-white.svg" className="w-6 h-6" alt="icon" />
                            <p className="font-semibold text-white">Access gigantic features company</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/assets/images/icons/tick-circle-white.svg" className="w-6 h-6" alt="icon" />
                            <p className="font-semibold text-white">Students analytics and export</p>
                        </div>
                    </div>
                    <hr className="border-[#262A56]" />
                    <p className="text-[#FF435A]">This plan is not available in your country, try again later.</p>
                    <div className="flex flex-col gap-3">
                        <Link to="#">
                            <div className="flex items-center justify-center gap-3 w-full rounded-full border p-4 transition-all duration-300 bg-[#070B24] border-[#24283E]">
                                <span className="font-semibold text-white">Contact Our Sales</span>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Plan Kedua */}
                <div className="card flex flex-col h-fit rounded-2xl border border-[#262A56] p-8 gap-8 bg-[#080A2A]">
                    <img src="/assets/images/icons/note-favorite-white.svg" className="w-14 h-14" alt="icon" />
                    <div>
                        <p className="font-extrabold text-4xl text-white">Rp 280.000</p>
                        <p className="text-[#6B6C7F] mt-2">Billed every single month</p>
                    </div>
                    <hr className="border-[#262A56]" />
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-2">
                            <img src="/assets/images/icons/tick-circle-white.svg" className="w-6 h-6" alt="icon" />
                            <p className="font-semibold text-white">Access gigantic features company</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/assets/images/icons/tick-circle-white.svg" className="w-6 h-6" alt="icon" />
                            <p className="font-semibold text-white">Students analytics and export</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/assets/images/icons/tick-circle-white.svg" className="w-6 h-6" alt="icon" />
                            <p className="font-semibold text-white">Life support 24/7 maintenances</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/assets/images/icons/tick-circle-white.svg" className="w-6 h-6" alt="icon" />
                            <p className="font-semibold text-white">Export and analyze data real time</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/assets/images/icons/tick-circle-white.svg" className="w-6 h-6" alt="icon" />
                            <p className="font-semibold text-white">More big features coming soon</p>
                        </div>
                    </div>
                    <hr className="border-[#262A56]" />
                    <div className="flex flex-col gap-3">
                        <button type="button" onClick={submitData} disabled={isLoading}>
                            <div className="flex items-center justify-center gap-3 w-full rounded-full border p-4 transition-all duration-300 bg-[#662FFF] border-[#8661EE] hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
                                <span className="font-semibold text-white">Choose This Plan</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Pricing.proptypes = {
    data: Proptypes.object
};

export default Pricing;
