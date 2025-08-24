// xp-system.js
// Placeholder XP system implementation
let xp = 0;
let level = 1;
function updateXPUI() {
    const statusEl = document.getElementById('xp-status');
    if (statusEl) {
        statusEl.textContent = `XP: ${xp}, Level: ${level}`;
    }
}
function gainXP(amount) {
    xp += amount;
    // simple leveling logic
    if (xp >= level * 100) {
        level++;
    }
    updateXPUI();
}
function feed() {
    gainXP(10);
}
function sleep() {
    gainXP(5);
}
function train() {
    gainXP(15);
}
