import { Grid, BrightGrid } from "./grid";
import { BrightLight, Light } from "./ligth";
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
        expect(grid.getFirstLight()).toBeInstanceOf(Light);
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

    test("kata part 1", () => {
        const grid = new Grid(1000, 1000);

        grid.turnOnThrough({ x: 887, y: 9 }, { x: 959, y: 629 });
        grid.turnOnThrough({ x: 454, y: 398 }, { x: 844, y: 448 });
        grid.turnOffThrough({ x: 539, y: 243 }, { x: 559, y: 965 });
        grid.turnOffThrough({ x: 370, y: 819 }, { x: 676, y: 868 });
        grid.turnOffThrough({ x: 145, y: 40 }, { x: 370, y: 997 });
        grid.turnOffThrough({ x: 301, y: 3 }, { x: 808, y: 453 });
        grid.turnOnThrough({ x: 351, y: 678 }, { x: 951, y: 908 });
        grid.toggleThrough({ x: 720, y: 196 }, { x: 897, y: 994 });
        grid.toggleThrough({ x: 831, y: 394 }, { x: 904, y: 860 });

        expect(grid.countLightsOn()).toBe(230022);
    })
})

describe("BrightGrid", () => {
    test("init", () => {
        const grid = new BrightGrid(1000, 1000);
        expect(grid.count()).toBe(1000000);
        expect(grid.getFirstLight()).not.toBeUndefined();
        expect(grid.getFirstLight()).toBeInstanceOf(BrightLight);

        expect(grid.getBrightness()).toBe(0);

        grid.turnOnThrough({ x: 0, y: 0 }, { x: 999, y: 999 });
        expect(grid.getBrightness()).toBe(1000000);

        grid.turnOffThrough({ x: 0, y: 0 }, { x: 999, y: 499 });
        expect(grid.getBrightness()).toBe(500000);

        grid.toggleThrough({ x: 0, y: 0 }, { x: 999, y: 499 });
        expect(grid.getBrightness()).toBe(1500000);
    })

    test("kata part 2", () => {
        const grid = new BrightGrid(1000, 1000);

        grid.turnOnThrough({ x: 887, y: 9 }, { x: 959, y: 629 });
        grid.turnOnThrough({ x: 454, y: 398 }, { x: 844, y: 448 });
        grid.turnOffThrough({ x: 539, y: 243 }, { x: 559, y: 965 });
        grid.turnOffThrough({ x: 370, y: 819 }, { x: 676, y: 868 });
        grid.turnOffThrough({ x: 145, y: 40 }, { x: 370, y: 997 });
        grid.turnOffThrough({ x: 301, y: 3 }, { x: 808, y: 453 });
        grid.turnOnThrough({ x: 351, y: 678 }, { x: 951, y: 908 });
        grid.toggleThrough({ x: 720, y: 196 }, { x: 897, y: 994 });
        grid.toggleThrough({ x: 831, y: 394 }, { x: 904, y: 860 });

        expect(grid.getBrightness()).toBe(539560);
    })
})
