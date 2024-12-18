/**
 * converts the given date from AD to BS
 * @returns {Date}
 */

import { BS_TO_AD_MONTH } from "../data/Base";

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
};

const convertFromBSToAD = (date: Date): Date => {
    const BS_year = date.getFullYear();
    const BS_month = date.getMonth();
    const BS_day = date.getDate();


    // TODO: Checking if the date is valid.
    const isValid = true;
    if (!isValid)
        // TODO: create a custom error type.
        throw new Error("Invalid date");

    // Procedure:
    // bs year - 57
    // if month is before april which is 9 then sub 1 from year.
    // Checking if that year is a leap year or not.
    // looking for the number of days in that month.
    // Accounting for it.

    const AD_year = BS_year - (57);
    const AD_month = BS_TO_AD_MONTH[BS_month as keyof typeof BS_TO_AD_MONTH];
    const AD_day = 15 + BS_day;

    const AD_date = new Date(AD_year, AD_month, AD_day);

    return AD_date;
};

export {
    convertFromADToBS,
    convertFromBSToAD
}
