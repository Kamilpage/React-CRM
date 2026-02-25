// src/pages/features/tasks/model/taskStatus.js

export const TASK_STATUS = [
    {
        id: "planned",
        label: "Planned",
        color: "#B1AB1D",
        order: 1
    },
    {
        id: "upcoming",
        label: "Upcoming",
        color: "#6884FD",
        order: 2
    },
    {
        id: "completed",
        label: "Completed",
        color: "#39C682",
        order: 3
    }
];

/**
 * Быстрый доступ: STATUS_MAP["planned"] → { label, color, order }
 */
export const STATUS_MAP = TASK_STATUS.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
}, {});


/**
 * Универсальные функции (опционально)
 */

export const getStatusLabel = statusId => STATUS_MAP[statusId]?.label || "";
export const getStatusColor = statusId => STATUS_MAP[statusId]?.color || "#ccc";
export const getStatusOrder = statusId => STATUS_MAP[statusId]?.order ?? 999;

export const STATUS_LIST = TASK_STATUS; // удобный alias