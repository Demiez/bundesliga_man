export const convertSimpleDate = string => string.split("-").reverse().join("-");
export const convertUtcDate = string => string.split("T")[0].split("-").reverse().join("-");
