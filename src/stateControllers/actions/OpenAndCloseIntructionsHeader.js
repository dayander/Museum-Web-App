
export const instructionsFilters = {
    INSTRUCTIONS_OPEN: "INSTRUCTIONS_OPEN",
    INSTRUCTIONS_CLOSED:"INSTRUCTIONS_CLOSED"

};

export const setInstructionsFilter = filter => ({
    type: "SET_INSTRUCTIONS_FILTER",
    filter
});

