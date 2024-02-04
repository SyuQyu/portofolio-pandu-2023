// components/Layout/index.js

import clsx from "clsx";
import { motion } from "framer-motion";

const Layout = ({ children, className }: any) => (
    <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        className={clsx("mt-10", className)}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
        }}
    >
        {children}
    </motion.div>
);
export default Layout;