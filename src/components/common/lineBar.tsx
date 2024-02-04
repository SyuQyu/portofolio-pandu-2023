// components/LineBar.js
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const lineBarVariants = {
    visible: { width: "100%", transition: { duration: 1, ease: 'easeInOut' } },
    hidden: { width: "0%" }
};

const LineBar = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={lineBarVariants}
            className="h-[2px] bg-[#002c3e]/30 rounded-full"
        ></motion.div>
    );
};

export default LineBar;
