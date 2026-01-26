import React from 'react';
import {AnalyticsProvider} from "../../contex/AnalyticsContext.jsx";
import AnalyticsTopbar from "../AnalyticsTopbar/AnalyticsTopbar.jsx";
import {Outlet} from "react-router-dom";

const AnalyticsLayout = () => {
    return (
        <>
            <AnalyticsProvider>
                <AnalyticsTopbar/>
                <Outlet/>
            </AnalyticsProvider>
        </>
    );
};

export default AnalyticsLayout;