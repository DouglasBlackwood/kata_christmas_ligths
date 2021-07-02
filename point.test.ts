import { Point } from "./point";

describe("Point", () => {
    test("point equality", () => {
        const pointA = new Point(3, 4);
        const pointB = new Point(3, 4);
        expect(pointA).toStrictEqual(pointB);
    })

    test("point as string", () => {
        const point = new Point(7, 2);
        expect(point.toString()).toBe("Point(7, 2)");
    })
})
