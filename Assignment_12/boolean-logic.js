// Q5: Boolean Logic – Smart Home Security System

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

console.log("Smart Home Security Check");
console.log("Door Locked    :", isDoorLocked);
console.log("Window Closed  :", isWindowClosed);
console.log("Alarm On       :", isAlarmOn);
console.log("Owner Inside   :", isOwnerInside);

const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

if (isSecure) {
    console.log("Status: SECURE - All conditions met");
} else {
    console.log("Status: UNSAFE - Security breach risk!");
}

// Test different scenarios by changing values above and re-running