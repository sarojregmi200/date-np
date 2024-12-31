type calendarType = "AD" | "BS"

/**
 * Types of available calendar
 */
export type tcalendar = Record<calendarType, {
    months: string[],
    days: string[],
}>

export const CALENDAR: tcalendar = {
    BS: {
        months: ["Baishak", "Jestha", "Aashar", "Sharawan", "Bhadau", "Ashoj", "Kartik", "Mangshir", "Poush", "Magh", "Falgun", "Chaitra",],
        days: ["Aaitabar", "Sombar", "Manglabar", "Budhabar", "Behibar", "Sukrabar", "Sanibar"],
    },
    AD: {
        months: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December",],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"],
    },
}
