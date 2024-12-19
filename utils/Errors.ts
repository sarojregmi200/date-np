import { MAX_AD_YEAR, MAX_BS_YEAR, MIN_AD_YEAR, MIN_BS_YEAR } from "../data/constants";

const Errors = {
    INVALID_BS_YEAR: new RangeError(`Invalid BS year found, BS Year must be in between ${MIN_BS_YEAR}-${MAX_BS_YEAR}`),
    INVALID_AD_YEAR: new RangeError(`Invalid AD year found, AD Year must be in between ${MIN_AD_YEAR}-${MAX_AD_YEAR}`),
}

export default Errors;
