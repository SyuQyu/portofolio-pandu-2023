// components/Layout/index.js

import { motion } from "framer-motion";
import clsx from 'clsx';
import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Pagination = ({ number, transitionData, className, currentPage, onChange }: any) => {
    const [active, setActive] = React.useState(currentPage);

    const getItemProps = (index: any) =>
    ({
        variant: active === index ? "filled" : "text",
        color: active === index ? "blue" : "blue-gray",
        onClick: () => setActive(index),
    } as any);

    const next = () => {
        if (active === number) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    return (
        <div className="flex items-center justify-center gap-4">
            {console.log(active, "data number")}
            <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-2"
                onClick={prev}
                disabled={active === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
            </Button>
            <div className="flex items-center gap-2">
                {Array.from(Array(number), (e, index) => (
                    <IconButton
                        {...getItemProps(index + 1)}
                        key={index + 1}
                        onClick={() => onChange(index + 1)} // Call the onChange function with the correct page number
                    >
                        <Link href={`/portofolio-3d/${index + 1}`}>
                            {index + 1}
                        </Link>
                    </IconButton>
                ))}
            </div>
            <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-2"
                onClick={next}
                disabled={active === number}
            >
                Next
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
};
export default Pagination;