import { MAX_AD_YEAR, MAX_BS_YEAR, MIN_AD_YEAR, MIN_BS_YEAR } from "../data/constants";

const Errors = {
    INVALID_BS_YEAR: new RangeError(`Invalid BS year found, BS Year must be in between ${MIN_BS_YEAR}-${MAX_BS_YEAR}`),
    INVALID_AD_YEAR: new RangeError(`Invalid AD year found, AD Year must be in between ${MIN_AD_YEAR}-${MAX_AD_YEAR}`),

    INVALID_BS_DATE_RANGE: new RangeError(`Invalid BS date range found, BS Date must be from ${MIN_BS_YEAR}-09-17 to ${MAX_BS_YEAR - 1}-12-31`),
    INVALID_AD_DATE_RANGE: new RangeError(`Invalid AD date range found, AD Date must be from ${MIN_AD_YEAR}-01-01 to ${MAX_AD_YEAR}`),
}

export default Errors;
