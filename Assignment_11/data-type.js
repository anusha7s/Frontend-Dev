
const entries = [
    { label: "Name",         value: "Sara",              type: "" },
    { label: "Age",          value: 22,                  type: "" },
    { label: "IsStudent",    value: true,                type: "" },
    { label: "Hobbies",      value: ["coding", "music"], type: "" },
    { label: "Address",      value: { city: "Delhi" },   type: "" },
    { label: "Spouse",       value: null,                type: "" },
    { label: "Temp",         value: undefined,           type: "" }
];

// Detect actual type for each value
entries.forEach(item => {
    const val = item.value;
    if (Array.isArray(val)) {
        item.type = "array";
    } else if (val === null) {
        item.type = "null";
    } else {
        item.type = typeof val;
    }
});

// Display beautiful report
console.table(entries);