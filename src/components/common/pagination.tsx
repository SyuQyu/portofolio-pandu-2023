// components/Layout/index.js

import { motion } from "framer-motion";
import clsx from 'clsx';
import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const Pagination = ({ number, transitionData, className, currentPage, onChange }: any) => {
    const [active, setActive] = React.useState(currentPage);
    const router = useRouter();

    const next = () => {
        if (active === number) return;
        if (parseInt(currentPage) !== parseInt(number)) {
            setActive(parseInt(active) + 1);
            console.log(active)
            router.push(`/portofolio-3d/${parseInt(active) + 1}`);
        }
    };

    const prev = () => {
        if (active === 1) return;
        if (parseInt(currentPage) !== 1) {
            setActive(active - 1);
            console.log(active)
            router.push(`/portofolio-3d/${active - 1}`);
        }
    };

    return (
        <div className="flex items-center justify-between gap-4">
            <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-2 text-anzac-200 text-xl"
                onClick={prev}
                disabled={parseInt(currentPage) === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
            </Button>
            <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-2 text-anzac-200 text-xl"
                onClick={next}
                disabled={parseInt(currentPage) === parseInt(number)}
            >
                Next
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
};
export default Pagination;