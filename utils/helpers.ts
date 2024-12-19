import { AD_MONTH, AD_MONTH_LEAP_YEAR, BS_MONTHS, MIN_AD_YEAR, MIN_BS_YEAR, type BS_MONTHS_KEYS } from "../data/constants.ts";
import Errors from "./Errors.ts";
import { isADLeapYear, isValidADYear, isValidBSYear } from "./validators.ts";

/**
 * @category helpers
 * This is the helper functions for the date-np package.
 * @showCategories
 * @module
 */

/**
 * @category helpers
 * Calculates the total number of days from MIN_BS_YEAR to the given BS date.
 * @param {Date} BS_date - The BS date to calculate the total days to.
 * @returns {number} - The total days from the given BS date.
 */
const calcTotalDaysFromMinBS = (BS_date: Date): number => {
    let totalDays = BS_date.getDate();

    const isValid = isValidBSYear(BS_date);
    const currentBSYear = BS_date.getFullYear();

    if (!isValid)
        throw Errors.INVALID_BS_YEAR;

    // adding this months days
    // Month also starts from 0 so we are checking till <=
    for (let i = 0; i < BS_date.getMonth(); i++) {
        totalDays += BS_MONTHS[currentBSYear as BS_MONTHS_KEYS][i]
    }

    if (currentBSYear === Number(MIN_BS_YEAR))
        return totalDays;

    // calculating each year's days
    for (let i = MIN_BS_YEAR; i < currentBSYear; i++) {
        totalDays += calcTotalDaysInBSYear(i);
    }

    // This is a temporary fix to account for the fact
    // that 1944 1 1 starts at nepali date 2000 09 17 hence
    // the day till poush and 16 are added and subtracted from the total days
    // TODO: Fix this properly
    return totalDays - (275 + 16);
}

/**
 * @category helpers
 * Calculates the total number of days in the given BS year.
 * @param {yearInput} year - The BS year to calculate the total days in.
 * @returns {number} - The total days in the given BS year.
 */
const calcTotalDaysInBSYear = (year: yearInput): number => {
    let totalDays = 0;

    let yearToCheck = extractYear(year);
    const isValid = isValidBSYear(yearToCheck);
    if (!isValid)
        throw Errors.INVALID_BS_YEAR;

    // calculating each year's days
    for (let i = 0; i < 12; i++) {
        totalDays += BS_MONTHS[year as BS_MONTHS_KEYS][i];
    }

    return totalDays;
}

const addDaysToMinBSDate = (days: number): Date => {
    let BS_year = MIN_BS_YEAR;
    let BS_month = 8;
    let BS_day = 16;

    for (let i = 0; i < days; i++) {
        BS_day += i;

        const month_end = BS_MONTHS[BS_year as BS_MONTHS_KEYS][BS_month];
        if (BS_day > month_end) {
            BS_day = 1;
            BS_month += 1;
        }

        if (BS_month > 11) {
            BS_month = 0;
            BS_year += 1;
        }
    }

    return new Date(BS_year, BS_month, BS_day);
}

const calcTotalDaysFromMinAD = (AD_date: Date): number => {
    let totalDays = AD_date.getDate();

    const isValid = isValidADYear(AD_date);
    const currentADYear = AD_date.getFullYear();

    if (!isValid)
        throw Errors.INVALID_AD_YEAR;

    const isLeapYear = isADLeapYear(AD_date);

    // adding this months days
    // Month also starts from 0 so we are checking till <=
    for (let i = 0; i < AD_date.getMonth() - 1; i++) {
        totalDays += isLeapYear ? AD_MONTH_LEAP_YEAR[i] : AD_MONTH[i]
    }

    if (currentADYear === Number(MIN_AD_YEAR))
        return totalDays;

    // calculating each year's days
    for (let i = MIN_AD_YEAR; i < currentADYear; i++) {
        totalDays += calcTotalDaysInADYear(i);
    }

    return totalDays - 31;
}

const calcTotalDaysInADYear = (year: yearInput): number => {
    let yearToCheck = extractYear(year);
    const isValid = isValidADYear(yearToCheck);
    if (!isValid)
        throw Errors.INVALID_AD_YEAR;
    const isLeapYear = isADLeapYear(yearToCheck);

    return isLeapYear ? 366 : 365;
}

export type yearInput = Date | BS_MONTHS_KEYS | number;

/**
 * @category helpers
 * Extracts the year from the given input.
 * @param {Date | BS_MONTHS_KEYS | number} input - The input to extract the year from.
 * @returns {number} - The extracted year.
 */
const extractYear = (input: Date | BS_MONTHS_KEYS | number): number => {
    if (input instanceof Date)
        return input.getFullYear();

    if (typeof input === "number" || typeof Number(input) === "number")
        return input;

    throw new TypeError("Error while extracting year, input to extractYear must be a Date, BS_MONTHS_KEYS or a number");
}

export {
    calcTotalDaysFromMinBS,
    calcTotalDaysInBSYear,
    calcTotalDaysFromMinAD,
    addDaysToMinBSDate,
    extractYear,
} 
