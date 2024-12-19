import { MIN_BS_YEAR, MIN_AD_YEAR, type BS_MONTHS_KEYS } from "../data/constants";
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

export {
    isValidBSYear,
    isValidADYear,
    isADLeapYear
}
