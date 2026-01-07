import React from 'react';

const AnalyticsIcon = ({isActive}) => {
    return (
        <>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 16.25H2.5V3.75" stroke={isActive ? '#000' : '#727272'} strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"></path>
                <path d="M16.25 5L10 11.25L7.5 8.75L2.5 13.75" stroke="#727272" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M16.25 8.125V5H13.125" stroke={isActive ? '#000' : '#727272'} strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"></path>
            </svg>
        </>
    );
};

export default AnalyticsIcon;