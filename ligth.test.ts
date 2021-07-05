import { Light, BrightLight } from './ligth';

describe("Ligth", () => {
    test("init", () => {
        const ligth = new Light();
        expect(ligth.isOn).toBe(false);
    })

    test("turnOn should turn on", () => {
        const ligth = new Light();
        ligth.turnOn();
        expect(ligth.isOn).toBe(true);
    })

    test("turnOff should turn off", () => {
        const ligth = new Light();

        ligth.turnOn();
        ligth.turnOff();
        expect(ligth.isOn).toBe(false);
    })

    test("toggle should turn on then off", () => {
        const ligth = new Light();

        ligth.toggle();
        expect(ligth.isOn).toBe(true);

        ligth.toggle();
        expect(ligth.isOn).toBe(false);
    })
})

describe("BrightLigth", () => {
    test("init", () => {
        const ligth = new BrightLight();
        expect(ligth.brightness).toBe(0);
        expect(ligth.isOn).toBe(false);
    })

    test("turnOn should increment brightness", () => {
        const ligth = new BrightLight();
        ligth.turnOn();
        expect(ligth.brightness).toBe(1);
        expect(ligth.isOn).toBe(true);

        ligth.turnOn();
        expect(ligth.brightness).toBe(2);
        expect(ligth.isOn).toBe(true);
    })

    test("turnOff should decrement brightness with a minimum of 0", () => {
        const ligth = new BrightLight();

        ligth.turnOn();
        ligth.turnOff();
        expect(ligth.brightness).toBe(0);
        expect(ligth.isOn).toBe(false);

        ligth.turnOff();
        expect(ligth.brightness).toBe(0);
    })

    test("toggle should increase brightness by 2", () => {
        const ligth = new BrightLight();

        ligth.toggle();
        expect(ligth.brightness).toBe(2);
    })
})
