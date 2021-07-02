class Light {
    public isOn: boolean;

    constructor() {
        this.isOn = false;
    }

    turnOn(): void {
        this.isOn = true;
    }

    turnOff(): void {
        this.isOn = false;
    }

    toggle(): void {
        this.isOn = !this.isOn;
    }
}

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
