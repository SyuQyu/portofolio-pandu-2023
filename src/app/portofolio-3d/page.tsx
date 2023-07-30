'use client'
import Container from '@/components/common/container';
import ImageWithFallback from '@/components/common/imageWithFallback';
import { Design } from '@/contants/data3D';
export default function Portofolio3D() {
    return (
        <Container>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                    Design?.map((data, index) =>
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
        </Container>
    );
}