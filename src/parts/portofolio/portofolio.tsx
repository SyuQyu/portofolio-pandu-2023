'use client'
// Import statements
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
const LineBar = dynamic(() => import('@/components/common/lineBar'));
import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import { codingPortfolio, threeDPortfolio } from '@/contants/portofolio';
const ImageWithFallback = dynamic(() => import('@/components/common/imageWithFallback'));
import { MdPreview } from 'react-icons/md';
import { IoMdClose } from "react-icons/io";
type codingPortfolio = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    projectLink: {
        github: string;
        hosting: string;
    };
}[];

type threeDPortfolio = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
}[];

const LayoutCards = () => {
    const [selectedId, setSelectedId] = useState('');
    const [portfolioType, setPortfolioType] = useState('coding');
    const currentPortfolio: any = portfolioType === 'coding' ? codingPortfolio : threeDPortfolio;

    return (
        <>
            <div id="portofolioSection" className='flex gap-8 flex-col w-full h-full'>
                <motion.div
                    className='flex flex-row justify-center items-center w-full gap-4'
                >
                    <motion.h1
                        className="md:text-5xl sm:text-2xl text-lg font-bold flex-1 whitespace-nowrap"
                    >
                        Portfolio
                    </motion.h1>
                    <LineBar />
                </motion.div>
                <div className='w-full flex justify-start items-center gap-4'>
                    <Button onClick={() => setPortfolioType('coding')} variant="outlined">Coding Portfolio</Button>
                    <Button onClick={() => setPortfolioType('3d')} variant="outlined">3D Portfolio</Button>
                </div>
                <motion.div className=" flex items-start justify-start w-full h-full mt-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full items-start justify-start">
                        {currentPortfolio.map((item: any) => (
                            <motion.div
                                className={`card bg-[#ececec] w-full p-4 sm:p-5 md:p-6 h-full rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 hover:scale-105
                            }`}
                                layoutId={`card-container-${item.id}`}
                                onClick={() => setSelectedId(item.id)}
                                key={item.id}
                                initial={{ scale: 1 }}
                                animate={{ scale: selectedId === item.id ? 1.1 : 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="card-content">
                                    <motion.h2 className="text-xl font-bold mb-2 text-[#f7444e]">{item.title}</motion.h2>
                                    <motion.h5 className="text-sm font-bold mb-1 text-gray-700">{item.subtitle}</motion.h5>
                                    {
                                        portfolioType !== 'coding' ? (
                                            <ImageWithFallback
                                                priority={true}
                                                width={0}
                                                height={0}
                                                sizes='100vw'
                                                className='w-full h-full max-h-[200px] max-w-full rounded-lg object-contain'
                                                src={item.image}
                                                alt=""
                                            />
                                        ) : null
                                    }
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <AnimatePresence>
                        {selectedId && (
                            <motion.div
                                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                {currentPortfolio.map((item: any) => (
                                    item.id === selectedId && (
                                        <motion.div
                                            className="bg-white rounded-lg p-4 shadow-md max-w-lg mx-auto"
                                            layoutId={`card-container-${item.id}`}
                                            key={item.id}
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.8, opacity: 0 }}
                                        >
                                            <motion.div className="relative">
                                                <motion.button
                                                    className="absolute top-2 right-2 py-1 px-2 text-center text-white bg-red-500 rounded-full"
                                                    onClick={() => setSelectedId('')}
                                                >
                                                    <IoMdClose className='w-5 h-5' />
                                                </motion.button>
                                                <motion.h2 className="text-xl font-bold mb-2 text-[#f7444e]">{item.title}</motion.h2>
                                                <motion.h5 className="text-sm font-bold mb-1 text-gray-700">{item.subtitle}</motion.h5>
                                                <div className='my-4'>
                                                    <ImageWithFallback
                                                        priority={true}
                                                        width={0}
                                                        height={0}
                                                        sizes='100vw'
                                                        className='w-full h-full max-h-[200px] max-w-full rounded-lg object-contain'
                                                        src={item.image}
                                                        alt=""
                                                    />
                                                </div>
                                                <motion.p className="text-md text-gray-700 mb-4">{item.description}</motion.p>
                                                <motion.p
                                                    className="text-md text-gray-700"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                >
                                                    {
                                                        portfolioType === 'coding' ? (
                                                            <div className='flex flex-row gap-4 justify-end items-center'>
                                                                <Link href={item?.projectLink.github}>
                                                                    <ImageWithFallback
                                                                        priority={true}
                                                                        src={'/image/sosmed/github (1).svg'}
                                                                        alt={`Image for github`}
                                                                        width={0}
                                                                        height={0}
                                                                        sizes='100vw'
                                                                        className='w-[32px] sm:h-[32px] object-contain'
                                                                    />
                                                                </Link>
                                                                <Link href={item?.projectLink.github}>
                                                                    <MdPreview className='text-[32px]' />
                                                                </Link>
                                                            </div>
                                                        ) : (
                                                            <p>test proto image 3d</p>
                                                        )
                                                    }

                                                </motion.p>
                                            </motion.div>
                                        </motion.div>
                                    )
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </>
    );
};

export default LayoutCards;
