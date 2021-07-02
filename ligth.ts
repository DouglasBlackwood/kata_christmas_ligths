export class Light {
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
