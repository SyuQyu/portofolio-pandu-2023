// components/Layout/index.js

import { motion } from "framer-motion";
import clsx from 'clsx';

const Layout = ({ children, direction = 'y', transitionData, className }: any) => (
    <>
        {direction === 'y' ? (
            <motion.div
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 300, opacity: 0 }}
                className={clsx(className)}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    ...transitionData
                }}
            >
                {children}
            </motion.div>
        ) : (
            <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                className={clsx(className)}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    ...transitionData
                }}
            >
                {children}
            </motion.div>
        )}
    </>
);
export default Layout;