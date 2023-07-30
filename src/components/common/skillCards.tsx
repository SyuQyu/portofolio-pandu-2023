// components/Layout/index.js

import { motion } from "framer-motion";
import clsx from 'clsx';

const SkillCards = ({ children, direction = 'y', transitionData, className, ...props }: any) => (
    <>
        <motion.div
            {...props}
            whileHover={{ scale: 1.1 }}
            className={className}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                ...transitionData
            }}
        >
            {children}
        </motion.div>
    </>
);
export default SkillCards;