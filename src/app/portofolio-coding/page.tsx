'use client'
import Container from '@/components/common/container';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import ImageWithFallback from '@/components/common/imageWithFallback';
import { Coding } from '@/contants/dataCoding';
import Link from 'next/link';
import { MdPreview } from "react-icons/md";
import { motion } from 'framer-motion';
export default function PortofolioCoding() {
    return (
        <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {
                    Coding?.map((data, index) =>
                        <motion.div whileHover={{ scale: 1.1 }} className="h-full" key={index}>
                            <Card className="mt-6 w-full h-full bg-gray-800/50 flex flex-col justify-between">
                                <CardHeader className="relative h-56 shadow-lg shadow-anzac-200/30">
                                    <ImageWithFallback
                                        priority={true}
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        className='w-full h-full max-w-full rounded-lg object-cover' src={data.image} alt="" />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h5" color="white" className="mb-2">
                                        {data.projectName}
                                    </Typography>
                                    <Typography color="white">
                                        {data.desc}
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0 flex flex-row justify-end items-center space-x-4">
                                    <Link href={data.projectLink.github}>
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
                                    <Link href={data.projectLink.github}>
                                        <MdPreview className='text-[32px] text-white' />
                                    </Link>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    )
                }
            </div>
        </Container>
    );
}