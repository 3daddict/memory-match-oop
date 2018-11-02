$(document).ready(initializeApplication);
let game = null;

function initializeApplication() {
    game = new MemoryMatchGame();
    game.initializeGame();
}