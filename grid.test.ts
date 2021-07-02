import { Grid } from "./grid";

describe("Grid", () => {
    test("init", () => {
        const grid = new Grid(1000, 1000);
        expect(grid.count()).toBe(1000000);
        expect(grid.getFirstLight()).not.toBeUndefined();
    })

    test("turn on the middle 4's should turn on the middle four lights", () => {
        const grid = new Grid(1000, 1000);
        grid.turnOnThrough({ x: 499, y: 499 }, { x: 500, y: 500 });
        expect(grid.countLightsOn()).toBe(4);
    })
})
