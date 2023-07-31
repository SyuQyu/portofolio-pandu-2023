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
import { Coding } from '@/contants/dataCoding';
export default function PortofolioCoding() {
    return (
        <Container>
            <div className="w-full h-screen flex flex-col justify-between">
                {
                    Coding?.map((data, index) =>
                        <Card className="mt-6 w-96" key={index}>
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img
                                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {data.projectName}
                                </Typography>
                                <Typography>
                                    {data.desc}
                                </Typography>
                            </CardBody>
                            {/* <CardFooter className="pt-0">
                        <Button>Github</Button>
                    </CardFooter> */}
                        </Card>
                    )

                }
            </div>
        </Container>
    );
}