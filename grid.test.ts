import { Grid } from "./grid";
import { Point } from "./point";

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

        const points_light_on = [
            new Point(499, 499),
            new Point(499, 500),
            new Point(500, 499),
            new Point(500, 500),
        ];
        for (const point of points_light_on) {
            expect(grid.isLigthOn(point)).toBe(true)
        }

        const points_light_off = [
            new Point(0, 0),
            new Point(999, 999),
            new Point(498, 499),
            new Point(500, 501),
        ];
        for (const point of points_light_off) {
            expect(grid.isLigthOn(point)).toBe(false)
        }
    })
})
