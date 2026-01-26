// Models (static data until backend)
import { activityChartData } from '../model/analytics.activity.chart';
import { activitySummary } from '../model/analytics.activity.model';
import { topCompanies } from '../model/analytics.topCompanies';
import { activeCompanies } from '../model/analytics.activeCompanies';
import { weeklyTarget } from '../model/analytics.weeklyTarget';

import { createContext, useContext, useReducer, useMemo } from 'react';




export const initialState = {
    tab: 'activity',
    period: 'month',

    // связь с CompaniesTable
    selectedCompanyId: null,

    // данные (имитация API)
    activityChartData,
    activitySummary,
    topCompanies,
    activeCompanies,
    weeklyTarget,
};



export function analyticsReducer(state, action) {
    switch (action.type) {
        case 'SET_TAB':
            return { ...state, tab: action.payload };

        case 'SET_PERIOD':
            return { ...state, period: action.payload };

        case 'SELECT_COMPANY':
            return { ...state, selectedCompanyId: action.payload };

        case 'CLEAR_SELECTED_COMPANY':
            return { ...state, selectedCompanyId: null };

        default:
            return state;
    }
}


// ---------------------------
// Context + Provider
// ---------------------------

const AnalyticsContext = createContext(null);

export function AnalyticsProvider({ children }) {
    const [state, dispatch] = useReducer(analyticsReducer, initialState);

    const value = useMemo(() => ({ state, dispatch }), [state]);

    return (
        <AnalyticsContext.Provider value={value}>
            {children}
        </AnalyticsContext.Provider>
    );
}


// ---------------------------
// Hook
// ---------------------------

export function useAnalytics() {
    const ctx = useContext(AnalyticsContext);
    if (!ctx) throw new Error('useAnalytics must be inside AnalyticsProvider');
    return ctx;
}
