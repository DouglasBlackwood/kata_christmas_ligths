import { Grid } from "./grid";
import { Point } from "./point";

const FOUR_MIDDLE_POINTS = [
    new Point(499, 499),
    new Point(499, 500),
    new Point(500, 499),
    new Point(500, 500),
];

const GRID_CORNERS = [
    new Point(0, 0),
    new Point(0, 999),
    new Point(999, 0),
    new Point(999, 999),
];

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

        for (const point of FOUR_MIDDLE_POINTS) {
            expect(grid.isLigthOn(point)).toBe(true)
        }
    })

    test("turn off the middle 4's should turn off the middle four lights", () => {
        const grid = new Grid(1000, 1000);

        grid.turnOnThrough({ x: 0, y: 0 }, { x: 999, y: 999 });
        grid.turnOffThrough({ x: 499, y: 499 }, { x: 500, y: 500 });

        expect(grid.countLightsOn()).toBe(999996);

        for (const point of GRID_CORNERS) {
            expect(grid.isLigthOn(point)).toBe(true)
        }

        for (const point of FOUR_MIDDLE_POINTS) {
            expect(grid.isLigthOn(point)).toBe(false)
        }
    })

    test("toggle the middle 4's should turn on, then turn off, the middle four lights", () => {
        const grid = new Grid(1000, 1000);

        grid.toggleThrough({ x: 499, y: 499 }, { x: 500, y: 500 });
        expect(grid.countLightsOn()).toBe(4);

        for (const point of FOUR_MIDDLE_POINTS) {
            expect(grid.isLigthOn(point)).toBe(true)
        }

        grid.toggleThrough({ x: 499, y: 499 }, { x: 500, y: 500 });
        expect(grid.countLightsOn()).toBe(0);

        for (const point of FOUR_MIDDLE_POINTS) {
            expect(grid.isLigthOn(point)).toBe(false)
        }
    })
})
