import { BS_MONTHS, MIN_BS_YEAR, type BS_MONTHS_KEYS } from "../data/constants.ts";
import Errors from "./Errors.ts";
import { isValidBSYear } from "./validators.ts";

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
    let totalDays = BS_date.getDate() - 1;

    const isValid = isValidBSYear(BS_date);
    const currentYear = BS_date.getFullYear();

    if (!isValid)
        throw Errors.INVALID_BS_YEAR;

    // adding this months days
    // Month also starts from 0 so we are checking till <=
    for (let i = 0; i <= BS_date.getMonth(); i++) {
        totalDays += BS_MONTHS[currentYear as BS_MONTHS_KEYS][i]
    }

    const yearsDiff = currentYear - Number(MIN_BS_YEAR);
    if (yearsDiff <= 0)
        return totalDays;

    // calculating each year's days
    for (let i = MIN_BS_YEAR; i < currentYear; i++) {
        totalDays += calcTotalDaysInBSYear(i);
    }

    return totalDays;
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
    extractYear
} 
