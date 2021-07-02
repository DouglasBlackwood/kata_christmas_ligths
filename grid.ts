import { Light } from './ligth';
import { Point } from './point';

export class Grid {
    private data: Map<Point, Light>;

    constructor(nbX: number, nbY: number) {
        this.data = new Map();

        for (let x = 0; x < nbX; x++) {
            for (let y = 0; y < nbY; y++) {
                const point = new Point(x, y);
                const ligth = new Light();
                this.data.set(point, ligth);
            }
        }
    }

    count(): number {
        return this.data.size;
    }
}
