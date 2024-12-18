import { expect, test } from "vitest";
import { convertFromADToBS } from "../utils/conversion";

const BSToADCASES = [
    {
        inputDate: new Date(2080, 1, 2),
        outputDate: new Date(2023, 4, 17),
    },
    {
        inputDate: new Date(2080, 2, 2),
        outputDate: new Date(2023, 5, 18),
    },
    {
        inputDate: new Date(2080, 3, 2),
        outputDate: new Date(2023, 6, 19),
    },
    {
        inputDate: new Date(2080, 4, 2),
        outputDate: new Date(2023, 7, 20),
    },
    {
        inputDate: new Date(2080, 5, 2),
        outputDate: new Date(2023, 8, 21),
    },
    {
        inputDate: new Date(2080, 6, 2),
        outputDate: new Date(2023, 9, 21),
    },
    {
        inputDate: new Date(2080, 7, 2),
        outputDate: new Date(2023, 10, 21),
    },
    {
        inputDate: new Date(2080, 8, 2),
        outputDate: new Date(2023, 11, 20),
    },
    {
        inputDate: new Date(2080, 9, 2),
        outputDate: new Date(2023, 12, 20),
    },
    {
        inputDate: new Date(2080, 10, 2),
        outputDate: new Date(2024, 1, 18),
    },
    {
        inputDate: new Date(2080, 11, 2),
        outputDate: new Date(2024, 2, 16),
    },
    {
        inputDate: new Date(2080, 12, 2),
        outputDate: new Date(2024, 3, 17),
    },
]

for (const { inputDate, outputDate } of BSToADCASES) {
    test(`BS to AD ${inputDate.toLocaleDateString()}`, () => {
        const output = convertFromADToBS(inputDate);
        expect(output).toEqual(outputDate);
    });
}

