import React from 'react';
import TopbarLayout from "../../../app/layout/TopbarLayout/TopbarLayout.jsx";

const DashboardTopbar = () => {
    return (
        <div>
            <TopbarLayout
                left={
                    <h1>Dashboard</h1>
                }
                right={
                    <>
                        <div ></div>

                    </>
                }
            />
        </div>
    );
};

export default DashboardTopbar;