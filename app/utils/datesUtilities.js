import { language } from './simple/locales/language';
import { locale } from 'user-settings';

export let week_month_standard = {
    week_day: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
    months: [
        'JANUARY',
        'FEBRUARY',
        'MARCH',
        'APRIL',
        'MAY',
        'JUNE',
        'JULY',
        'AUGUST',
        'SEPTEMBER',
        'OCTOBER',
        'NOVEMBER',
        'DECEMBER',
    ],
    monthsShort: [
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'dec',
    ]
};
export const activities = ["steps", "distance", "calories", "elevationGain", "activeZoneMinutes"]

export const goalSettings = {
    steps: {
        name: 'steps',
        path: 'icons/stat_steps_solid_32px.png',
    },
    distance: {
        name: 'distance',
        path: 'icons/stat_dist_solid_32px.png',
    },
    calories: {
        name: 'calories',
        path: 'icons/stat_cals_solid_32px.png',
    },
    elevationGain: {
        name: 'Elevation gain',
        path: 'icons/stat_elevation_32px_p.png',
    },
    activeZoneMinutes: {
        name: 'Active zone minutes',
        path: 'icons/stat_azm_solid_32px.png',
    },
};