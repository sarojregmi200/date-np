/**
 * converts the given date from AD to BS
 * @returns {Date}
 */

import { MIN_AD_YEAR } from "../data/constants";
import { calcTotalDaysFromMinBS } from "./helpers";

const convertFromADToBS = (date: Date) => {
    const AD_year = date.getFullYear();
    const AD_month = date.getMonth();
    const AD_day = date.getDate();

    // TODO: Checking if the date is valid.
    const isValid = true;
    if (!isValid)
        // TODO: create a custom error type.
        throw new Error("Invalid date");

    // since there is 57 years gap between AD and BS
    const BS_year = AD_year + 57;
    return date
};

const convertFromBSToAD = (BS_date: Date): Date => {
    const BS_year = BS_date.getFullYear();
    const BS_month = BS_date.getMonth();
    const BS_day = BS_date.getDate();

    const isValid = true;
    if (!isValid)
        throw new Error("Invalid date");

    const differenceDays = calcTotalDaysFromMinBS(BS_date);
    console.log(differenceDays)
    const AD_date = new Date(MIN_AD_YEAR, 1, differenceDays);

    return AD_date;
};

export {
    convertFromADToBS,
    convertFromBSToAD
}
