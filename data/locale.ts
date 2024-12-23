type calendarType = "AD" | "BS"

/**
 * Types of available calendar
 */
export type tcalendar = Record<calendarType, {
    months: Record<number, {
        EN: string,
        NP: string,
    }>,
    days: Record<number, {
        EN: string,
        NP: string,
    }>
}>

export const CALENDAR: tcalendar = {
    BS: {
        months: {
            0: {
                EN: "Baishakh",
                NP: "बैशाख",
            },
            1: {
                EN: "Jestha",
                NP: "जेष्ठ",
            },
            2: {
                EN: "Ashadh",
                NP: "आषाढ",
            },
            3: {
                EN: "Shrawan",
                NP: "श्रावण",
            },
            4: {
                EN: "Bhadra",
                NP: "भाद्र",
            },
            5: {
                EN: "Ashwin",
                NP: "आश्विन",
            },
            6: {
                EN: "Kartik",
                NP: "कार्तिक",
            },
            7: {
                EN: "Mangsir",
                NP: "मार्ग",
            },
            8: {
                EN: "Poush",
                NP: "पौष",
            },
            9: {
                EN: "Magh",
                NP: "माघ",
            },
            10: {
                EN: "Falgun",
                NP: "फाल्गुन",
            },
            11: {
                EN: "Chaitra",
                NP: "चैत्र",
            },
        },
        days: {
            0: {
                EN: "Aaitabar",
                NP: "आइतबार",
            },
            1: {
                EN: "Sombar",
                NP: "सोमवार",
            },
            2: {
                EN: "Manglabar",
                NP: "मंगलवार",
            },
            3: {
                EN: "Budhabar",
                NP: "बुधवार",
            },
            4: {
                EN: "Behibar",
                NP: "बुधबार",
            },
            5: {
                EN: "Sukrabar",
                NP: "शुक्रवार",
            },
            6: {
                EN: "Sanibar",
                NP: "शनिवार",
            },
        }
    },

    AD: {
        months: {
            0: {
                EN: "January",
                NP: "जनवरी",
            },
            1: {
                EN: "February",
                NP: "फ़रवरी",
            },
            2: {
                EN: "March",
                NP: "मार्च",
            },
            3: {
                EN: "April",
                NP: "अप्रैल",
            },
            4: {
                EN: "May",
                NP: "मई",
            },
            5: {
                EN: "June",
                NP: "जून",
            },
            6: {
                EN: "July",
                NP: "जुलाई",
            },
            7: {
                EN: "August",
                NP: "अगस्त",
            },
            8: {
                EN: "September",
                NP: "सितम्बर",
            },
            9: {
                EN: "October",
                NP: "अक्टूबर",
            },
            10: {
                EN: "November",
                NP: "नवम्बर",
            },
            11: {
                EN: "December",
                NP: "दिसम्बर",
            },
        },
        days: {
            0: {
                EN: "Sunday",
                NP: "सन्डे",
            },
            1: {
                EN: "Monday",
                NP: "मन्डे",
            },
            2: {
                EN: "Tuesday",
                NP: "ट्युस्डे",
            },
            3: {
                EN: "Wednesday",
                NP: "वेनस्डे",
            },
            4: {
                EN: "Thursday",
                NP: "थ्रुस्डे",
            },
            5: {
                EN: "Friday",
                NP: "फ्राइडे",
            },
            6: {
                EN: "Saturday",
                NP: "स्याटर्‍डे",
            },
        },
    },
}
