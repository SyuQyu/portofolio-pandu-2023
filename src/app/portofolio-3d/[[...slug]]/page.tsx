'use client'
import Container from '@/components/common/container';
import ImageWithFallback from '@/components/common/imageWithFallback';
import Pagination from '@/components/common/pagination';
import { Design } from '@/contants/data3D';
import { useState } from 'react';
export default function Portofolio3D(page: any) {
    const itemsPerPage = 12;
    const pages = page?.params?.slug !== undefined ? page.params.slug[0] : 1;

    const [currentPage, setCurrentPage] = useState(pages);

    // Calculate the total number of pages based on the chunked data
    const totalPages = Math.ceil(Design.length / itemsPerPage);

    // Slice the data into chunks of 12 items each
    const paginatedData = Design.slice(
        (pages - 1) * itemsPerPage,
        pages * itemsPerPage
    );
    return (
        <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                    paginatedData?.map((data, index) =>
                        <div key={index} className='w-full h-[100%]' data-aos='fade-up'>
                            <ImageWithFallback
                                priority={true}
                                width={0}
                                height={0}
                                sizes='100vw'
                                className='w-full h-full max-w-full rounded-lg object-cover' src={data.image} alt="" />
                        </div>
                    )
                }
            </div>
            <Pagination
                number={totalPages}
                currentPage={currentPage}
            />
        </Container>
    );
}