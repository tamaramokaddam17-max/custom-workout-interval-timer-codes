let timer = null;
let currentRound = 0;
let isWork = true;
let timeLeft = 0;
let totalRounds = 0;
let workDuration = 0;
let restDuration = 0;

const statusEl = document.getElementById("status");
const timeEl = document.getElementById("time");
const roundEl = document.getElementById("round");
const startBtn = document.getElementById("startBtn");

startBtn.onclick = function() {
    workDuration = parseInt(document.getElementById("work").value, 10);
    restDuration = parseInt(document.getElementById("rest").value, 10);
    totalRounds = parseInt(document.getElementById("rounds").value, 10);
    currentRound = 1;
    isWork = true;
    timeLeft = workDuration;
    roundEl.textContent = `Round: ${currentRound}/${totalRounds}`;
    statusEl.textContent = "Work!";
    timeEl.textContent = timeLeft;
    clearInterval(timer);
    timer = setInterval(runTimer, 1000);
};

function runTimer() {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft <= 0) {
        if (isWork) {
            statusEl.textContent = "Rest!";
            isWork = false;
            timeLeft = restDuration;
        } else {
            currentRound++;
            if (currentRound > totalRounds) {
                statusEl.textContent = "Finished!";
                roundEl.textContent = `Round: ${totalRounds}/${totalRounds}`;
                timeEl.textContent = "00";
                clearInterval(timer);
                return;
            }
            statusEl.textContent = "Work!";
            isWork = true;
            timeLeft = workDuration;
        }
        roundEl.textContent = `Round: ${currentRound}/${totalRounds}`;
    }
}
