export const beautifyDate = (date) =>
    new Date(date).toLocaleString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
