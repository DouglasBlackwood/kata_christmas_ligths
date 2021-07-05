import { Light } from './ligth';
import { Point } from './point';

export class Grid {
    private data: Map<string, Light>;

    constructor(nbX: number, nbY: number) {
        this.data = new Map();

        for (let x = 0; x < nbX; x++) {
            for (let y = 0; y < nbY; y++) {
                const point = new Point(x, y);
                const ligth = new Light();
                this.data.set(point.toString(), ligth);
            }
        }
    }

    count(): number {
        return this.data.size;
    }

    turnOnThrough(from: Point, to: Point): void {
        for (let x = from.x; x <= to.x; x++) {
            for (let y = from.y; y <= to.y; y++) {
                const point = new Point(x, y);
                this.data.get(point.toString())?.turnOn();
            }
        }
    }

    turnOffThrough(from: Point, to: Point): void {
        for (let x = from.x; x <= to.x; x++) {
            for (let y = from.y; y <= to.y; y++) {
                const point = new Point(x, y);
                this.data.get(point.toString())?.turnOff();
            }
        }
    }

    toggleThrough(from: Point, to: Point): void {
        for (let x = from.x; x <= to.x; x++) {
            for (let y = from.y; y <= to.y; y++) {
                const point = new Point(x, y);
                this.data.get(point.toString())?.toggle();
            }
        }
    }

    getFirstLight(): Light | undefined {
        const point = new Point(0, 0);
        return this.data.get(point.toString());
    }

    countLightsOn(): number {
        let nbLightsOn = 0;

        for (const light of this.data.values()) {
            if (light.isOn) {
                nbLightsOn++;
            }
        }

        return nbLightsOn;
    }

    isLigthOn(point: Point): boolean | undefined {
        return this.data.get(point.toString())?.isOn;
    }
}
