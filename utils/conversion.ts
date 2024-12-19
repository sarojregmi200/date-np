/**
 * converts the given date from AD to BS
 * @returns {Date}
 */

import { MIN_AD_YEAR } from "../data/constants";
import Errors from "./Errors";
import { calcTotalDaysFromMinBS } from "./helpers";
import { isValidADRange, isValidBSRange } from "./validators";

const convertFromADToBS = (date: Date) => {
    const isValid = isValidADRange(date);
    if (!isValid)
        throw Errors.INVALID_AD_DATE_RANGE;

    return date
};

const convertFromBSToAD = (BS_date: Date): Date => {
    const isValid = isValidBSRange(BS_date);
    if (!isValid)
        throw Errors.INVALID_BS_DATE_RANGE;

    const differenceDays = calcTotalDaysFromMinBS(BS_date);
    console.log(differenceDays)
    const AD_date = new Date(MIN_AD_YEAR, 1, differenceDays);

    return AD_date;
};

export {
    convertFromADToBS,
    convertFromBSToAD
}
