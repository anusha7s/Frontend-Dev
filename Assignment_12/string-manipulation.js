let productName = " wireless headphones PRO ";

// Step 1: Trim extra spaces
let trimmed = productName.trim();

// Step 2: Convert to lowercase
let lower = trimmed.toLowerCase();

// Step 3: Split into words, capitalize each, join back
let capitalized = lower
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

// Step 4: Replace "pro" with "Pro Edition"
let finalTitle = capitalized.replace("Pro", "Pro Edition");

console.log("Original :", productName);
console.log("Cleaned  :", finalTitle);
console.log("Length   :", finalTitle.length);