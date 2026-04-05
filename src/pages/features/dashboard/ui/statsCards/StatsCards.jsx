import React, { useState } from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { motion } from "framer-motion";
import StatsCard from './StatsCard';
import StatsCardModal from './StatsCardModal';
import styles from './statsCards.module.css';

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.35 }
    }
};

const StatsCards = () => {
    const { cards, stats } = useDashboard();
    const [activeCard, setActiveCard] = useState(null);

    const selectedValue = activeCard
        ? activeCard.format
            ? activeCard.format(stats[activeCard.key])
            : stats[activeCard.key]
        : null;

    return (
        <>
            <motion.div
                className={styles.row}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {cards.map((c) => {
                    const value = c.format ? c.format(stats[c.key]) : stats[c.key];

                    return (
                        <motion.div key={c.id} variants={item}>
                            <StatsCard
                                title={c.title}
                                value={value}
                                icon={c.icon}
                                onClick={() => setActiveCard(c)}
                            />
                        </motion.div>
                    );
                })}
            </motion.div>

            {activeCard && (
                <StatsCardModal
                    open
                    card={activeCard}
                    value={selectedValue}
                    onClose={() => setActiveCard(null)}
                />
            )}
        </>
    );
};

export default StatsCards;