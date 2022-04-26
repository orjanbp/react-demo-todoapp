import React, { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

export const AnimFadeOnLoad = ({ children }: PropsWithChildren<{}>) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
);
