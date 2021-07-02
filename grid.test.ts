import { Grid } from "./grid";

describe("Grid", () => {
    test("init", () => {
        const grid = new Grid(1000, 1000);
        expect(grid.count()).toBe(1000000);
    })
})
