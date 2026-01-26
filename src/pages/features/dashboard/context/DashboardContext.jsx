import React, { createContext, useContext, useReducer, useMemo } from 'react';
import { DASHBOARD_STATS } from '../model/dashboard.model';
import { DASHBOARD_CARDS } from '../model/dashboard.cards';
import { EMAIL_OPEN_RATE } from '../model/dashboard.emailChart';
import { EMAIL_OPEN_RATE_YEAR } from '../model/dashboard.emailChartYear';
import {DASHBOARD_PEOPLE} from "../model/dashboard.people.js";
import {DASHBOARD_COMPANIES} from "../model/dashboard.companies.js";

const DashboardContext = createContext(null);

const initialState = {
    stats: DASHBOARD_STATS,
    companies: DASHBOARD_COMPANIES,
    companiesSearch: '',
    companiesSort: { field: null, direction: null },
    cards: DASHBOARD_CARDS,
    people: DASHBOARD_PEOPLE,
    peopleSearch: '',
    peopleSort: { field: null, direction: null },
    emailMonth: EMAIL_OPEN_RATE,
    emailYear: EMAIL_OPEN_RATE_YEAR,
    companiesCategory: null,

    periodType: 'month', // 'month' | 'year'
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_PERIOD_TYPE':
            return {
                ...state,
                periodType: action.payload,
            };
        case 'SET_PEOPLE_SEARCH':
            return { ...state, peopleSearch: action.payload };

        case 'SET_PEOPLE_SORT':
            return { ...state, peopleSort: action.payload };
        case 'SET_COMPANIES_SEARCH':
            return { ...state, companiesSearch: action.payload };

        case 'SET_COMPANIES_SORT':
            return { ...state, companiesSort: action.payload };
        case 'SET_COMPANIES_CATEGORY':
            return {
                ...state,
                companiesCategory: action.payload,
            };
        default:
            return state;
    }
}

export const DashboardProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = useMemo(
        () => ({
            ...state,

            // === Actions ===
            setPeriodType: (type) =>
                dispatch({ type: 'SET_PERIOD_TYPE', payload: type }),

            setPeopleSearch: (text) =>
                dispatch({ type: 'SET_PEOPLE_SEARCH', payload: text }),

            setPeopleSort: (sortObj) =>
                dispatch({ type: 'SET_PEOPLE_SORT', payload: sortObj }),
            setCompaniesSearch: (v) =>
                dispatch({ type: 'SET_COMPANIES_SEARCH', payload: v }),

            setCompaniesSort: (v) =>
                dispatch({ type: 'SET_COMPANIES_SORT', payload: v }),
            setCompaniesCategory: (category) =>
                dispatch({
                    type: 'SET_COMPANIES_CATEGORY',
                    payload: category,
                }),
        }),

        [state]
    );

    return (
        <DashboardContext.Provider value={value}>
            {children}
        </DashboardContext.Provider>
    );
};

export const useDashboard = () => {
    const ctx = useContext(DashboardContext);
    if (!ctx) throw new Error('useDashboard must be inside provider');
    return ctx;
};
