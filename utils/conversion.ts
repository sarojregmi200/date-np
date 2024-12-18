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
};

const convertFromBSToAD = (date: Date) => {
    const today = new Date().getFullYear() - 57;

    const BS_year = date.getFullYear();
    const BS_month = date.getMonth();
    const BS_day = date.getDate();

    const todayBS_year = today - 57;


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

    const AD_year = BS_year - (57 + (BS_month < 9 ? 1 : 0));
};

export {
    convertFromADToBS,
    convertFromBSToAD
}
