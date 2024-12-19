import { assert, expect, test } from "vitest";
import { convertFromADToBS, convertFromBSToAD } from "../utils/conversion";

const BSToADCASES = [
    {
        inputDate: new Date(2080, 0, 2),
        outputDate: new Date(2023, 3, 17),
    },
    {
        inputDate: new Date(2080, 1, 2),
        outputDate: new Date(2023, 4, 18),
    },
    {
        inputDate: new Date(2080, 2, 2),
        outputDate: new Date(2023, 5, 19),
    },
    {
        inputDate: new Date(2080, 3, 2),
        outputDate: new Date(2023, 6, 20),
    },
    {
        inputDate: new Date(2080, 4, 2),
        outputDate: new Date(2023, 7, 21),
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
        outputDate: new Date(2023, 10, 20),
    },
    {
        inputDate: new Date(2080, 8, 2),
        outputDate: new Date(2023, 11, 20),
    },
    {
        inputDate: new Date(2080, 9, 2),
        outputDate: new Date(2024, 0, 18),
    },
    {
        inputDate: new Date(2080, 10, 2),
        outputDate: new Date(2024, 1, 16),
    },
    {
        inputDate: new Date(2080, 11, 2),
        outputDate: new Date(2024, 2, 17),
    },
]

for (const { inputDate, outputDate } of BSToADCASES) {
    test(`AD to BS ${inputDate.toLocaleString().split(',')[0]}`, () => {
        const output = convertFromBSToAD(inputDate);
        expect(output).toEqual(outputDate);
    });
}
