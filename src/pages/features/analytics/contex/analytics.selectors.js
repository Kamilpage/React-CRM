export const selectPeriod = (state) => state.period;
export const selectTab = (state) => state.tab;

export const selectActivitySummary = (state) => state.activitySummary;

export const selectActivityChartData = (state) => {
    const period = state.period;
    return state.activityChartData[period];
};

export const selectTopCompanies = (state) => state.topCompanies;

export const selectActiveCompanies = (state) => state.activeCompanies;

export const selectWeeklyTarget = (state) => state.weeklyTarget;

export const selectSelectedCompanyId = (state) => state.selectedCompanyId;
import { useAnalytics } from './AnalyticsContext';

export function useAnalyticsSelector(selector) {
    const { state } = useAnalytics();
    return selector(state);
}