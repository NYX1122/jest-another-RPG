const { expect, test } = require("@jest/globals");
const Player = require("../lib/player");
const Potion = require("../lib/Potion");
jest.mock("../lib/Potion");

test ("subtracts from player's health", () => {
    const player = new Player("Dave");
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(99999);

    expect(player.health).toBe(0);
});