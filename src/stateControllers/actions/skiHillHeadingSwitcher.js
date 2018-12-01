

export const accessibilityFilters = {
    SHOW_ACCESSIBLE: "SHOW_ACCESSIBLE",
    SHOW_INACCESSIBLE:"SHOW_INACCESSIBLE"

};

export const setAccessibilityFilter = filter => ({
    type: "SET_ACCESSIBILITY_FILTER",
    filter
});


export const   ShowAllAccessibility = () =>{
  return {type:"SHOW_ACCESSIBLE"}
};