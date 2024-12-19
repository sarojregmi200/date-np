/**
 * converts the given date from AD to BS
 * @returns {Date}
 */

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

const convertFromBSToAD = (date: Date): Date => {
    const BS_year = date.getFullYear();
    const BS_month = date.getMonth();
    const BS_day = date.getDate();

    // TODO: Checking if the date is valid.
    const isValid = true;
    if (!isValid)
        // TODO: create a custom error type.
        throw new Error("Invalid date");

    return date;
};

export {
    convertFromADToBS,
    convertFromBSToAD
}
