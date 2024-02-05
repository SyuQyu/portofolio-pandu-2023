import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Chip,
} from "@material-tailwind/react";
import ImageWithFallback from "./imageWithFallback";
import { Badge, Button } from "@material-tailwind/react";
type AccordionCustomStylesProps = {
    jobsPosition: string;
    company: string;
    id: number;
    tipe: string;
    image: string;
    dateStart: string;
    dateEnd: string;
    untilNow: boolean;
    desc: any;
};
export default function AccordionCustomStyles({
    jobsPosition = "Full-stack Developer",
    company = "Peluang.co",
    id = 1,
    tipe = "Part-time",
    image = "/image/company/peluang.jpg",
    dateStart = "2022-01-01",
    dateEnd = "2023-02-01",
    untilNow = false,
    desc = "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet"
}: AccordionCustomStylesProps) {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value: React.SetStateAction<number>) =>
        setOpen(open === value ? 0 : value);

    const startDate = new Date(dateStart); // Replace with your start date
    const endDate = untilNow ? null : new Date(dateEnd); // Replace with your end date, or set to null if still working

    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long" };
        return date.toLocaleDateString(undefined, options);
    };

    const calculateDuration = (startDate: Date, endDate: Date | null) => {
        const currentDate = endDate || new Date(); // Use endDate or current date if still working
        const diffInMilliseconds = currentDate.getTime() - startDate.getTime();
        const years = Math.floor(diffInMilliseconds / (365 * 24 * 60 * 60 * 1000));
        const months = Math.floor(
            (diffInMilliseconds % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000)
        );

        let durationString = '';

        if (years > 0) {
            durationString += `${years} ${years === 1 ? 'year' : 'years'}`;
        }

        if (months > 0) {
            durationString += ` ${months} ${months === 1 ? 'month' : 'months'}`;
        }

        return durationString.trim();
    };

    const startEndDateString =
        formatDate(startDate) + (endDate ? ` - ${formatDate(endDate)}` : ' - Present');
    const durationString = calculateDuration(startDate, endDate);

    return (
        <Accordion
            open={open === id}
            className=" border-b border-blue-gray-100 w-full"
        >
            <AccordionHeader
                onClick={() => handleOpen(id)}
                className={`border-b-0 w-full relative transition-colors ${open === id ? "text-blue-500 hover:!text-blue-700" : ""
                    }`}
            >
                <div className="absolute -top-3 right-0">
                    <Chip variant="ghost" color={tipe === "Internship" ? "green" : tipe === "Part-time" ? "red" : tipe === "self-employed" ? "yellow" : tipe === "Organization" ? "light-blue" : "green"} size="sm" value={tipe} />
                </div>
                <div className="flex flex-row justify-start items-center gap-4 w-full">
                    {
                        image !== "none" ? (
                            <ImageWithFallback
                                priority={true}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-20 h-20 rounded-lg object-contain"
                                src={image}
                                alt=""
                            />
                        ) : null
                    }
                    <div className="flex flex-col justify-start items-start gap-2">
                        <p className="font-bold sm:text-[18px] text-[16px]  md:text-[20px]">
                            {jobsPosition}
                        </p>
                        <p className="font-normal text-sm  md:text-base">
                            {company}
                        </p>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:gap-4">
                            <p className="ffont-normal text-sm  md:text-base text-gray-500">
                                {startEndDateString}
                            </p>
                            <span className="md:block hidden mx-auto h-1 w-1 rounded-full bg-gray-500 content-['']" />
                            <p className="ffont-normal text-sm  md:text-base text-gray-500">
                                {durationString}
                            </p>
                        </div>
                    </div>
                </div>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-sm md:text-base font-normal">
                {desc}
            </AccordionBody>
        </Accordion>
    );
}
