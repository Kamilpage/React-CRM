import React, { useState } from 'react';
import { useDashboard } from '../../context/DashboardContext';
import StatsCard from './StatsCard';
import StatsCardModal from './StatsCardModal';
import styles from './statsCards.module.css';

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
            <div className={styles.row}>
                {cards.map((c) => {
                    const Icon = c.icon;
                    const value = c.format ? c.format(stats[c.key]) : stats[c.key];

                    return (
                        <StatsCard
                            key={c.id}
                            title={c.title}
                            value={value}
                            icon={c.icon}
                            onClick={() => setActiveCard(c)}
                        />
                    );
                })}
            </div>
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
