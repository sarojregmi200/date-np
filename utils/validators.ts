import { MIN_BS_YEAR, MIN_AD_YEAR, type BS_MONTHS_KEYS, AD_MONTH, AD_MONTH_LEAP_YEAR, BS_MONTHS, MAX_BS_YEAR } from "../data/constants";
import { extractYear, type yearInput } from "./helpers";

/**
 * @categoryDescription validators
 * These are the validators for the date-np package.
 * @showCategories
 * @module
 */

/**
 * @category validators
 * Checks if the given date is a valid BS date.
 * @param {Date} yearInput - The date to be checked.
 * @returns {boolean} - True if the date is a valid BS date, false otherwise.
 *
 */
const isValidBSYear = (yearInput: yearInput): boolean => {
    const year = extractYear(yearInput);
    return year >= Number(MIN_BS_YEAR);
}

const isValidADYear = (yearInput: yearInput): boolean => {
    const year = extractYear(yearInput);
    return year >= Number(MIN_AD_YEAR);
}

const isADLeapYear = (yearInput: yearInput): boolean => {
    const year = extractYear(yearInput)

    let isLeapYear = year % 4 === 0;
    const isCenturialYear = year % 100 === 0;
    if (isCenturialYear)
        isLeapYear = year % 400 === 0;

    return isLeapYear
}

/**
 * @category validators
 * Checks if the given date is a valid AD date.
 * @param {Date} AD_date - The date to be checked.
 * @returns {boolean} - True if the date is a valid AD date, false otherwise.
 */
const isValidADRange = (AD_date: Date): boolean => {
    const year = AD_date.getFullYear();
    const month = AD_date.getMonth();
    const day = AD_date.getDate();

    if (month < 0 || month > 11)
        return false;

    if (day < 1 || day > AD_MONTH[month])
        return false;

    const isLeapYear = isADLeapYear(AD_date);
    if (isLeapYear && day > AD_MONTH_LEAP_YEAR[month])
        return false;

    if (year < MIN_AD_YEAR || year > MAX_BS_YEAR)
        return false;

    return true;
}


/**
 * @category validators
 * Checks if the given date is a valid BS date.
 * The date before 2000 poush 17 is not valid as of now.
 * Will try to fix this later on. TODO: Fix this.
 *
 * @param {Date} yearInput - The date to be checked.
 * @returns {boolean} - True if the date is a valid BS date, false otherwise.
 */
const isValidBSRange = (BS_date: Date): boolean => {
    const year = BS_date.getFullYear();
    const month = BS_date.getMonth();
    const day = BS_date.getDate();

    if (month < 0 || month > 11)
        return false;

    if (day < 1 || day > BS_MONTHS[year as BS_MONTHS_KEYS][month])
        return false;

    if (year < MIN_BS_YEAR || year > MAX_BS_YEAR)
        return false;

    if (year === MIN_BS_YEAR && month === 8 && day < 17)
        return false;

    return true;
}

export {
    isValidBSYear,
    isValidADYear,
    isADLeapYear,
    isValidADRange,
    isValidBSRange
}
