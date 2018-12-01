
export const modalFilters = {
    MODAL_OPENED: "MODAL_OPENED",
    MODAL_CLOSED:"MODAL_CLOSED"

};

export const setModalFilter = (filter, skiHill) => ({
    type: "SET_MODAL_FILTER",
    filter,
    skiHill
});
