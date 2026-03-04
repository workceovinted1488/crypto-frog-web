// Простейшая логика кликов и "фарма" ЖАБКОИНОВ.
// Здесь всё максимально просто, чтобы ты мог легко дописать свою игру.

const state = {
    coins: 0,
    perTap: 1,
    combo: 1,
    energy: 100,
    maxEnergy: 100,
};

const coinsEl = document.getElementById("coins");
const totalCoinsEl = document.getElementById("totalCoins");
const perTapEl = document.getElementById("perTap");
const comboEl = document.getElementById("combo");
const energyEl = document.getElementById("energy");
const frogEl = document.getElementById("frog");
const tapButton = document.getElementById("tapButton");

function updateUI() {
    coinsEl.textContent = state.coins;
    totalCoinsEl.textContent = state.coins;
    perTapEl.textContent = state.perTap;
    comboEl.textContent = `x${state.combo}`;
    energyEl.textContent = state.energy;
}

function tap() {
    if (state.energy <= 0) {
        // Можно показать тост/уведомление
        return;
    }

    const gain = state.perTap * state.combo;
    state.coins += gain;
    state.energy = Math.max(0, state.energy - 1);

    // Простая "анимация" масштаба
    frogEl.classList.add("tapped");
    setTimeout(() => frogEl.classList.remove("tapped"), 90);

    updateUI();
}

tapButton.addEventListener("click", tap);
frogEl.addEventListener("click", tap);

// Простейшая регенерация энергии
setInterval(() => {
    if (state.energy < state.maxEnergy) {
        state.energy += 1;
        updateUI();
    }
}, 1500);

updateUI();

