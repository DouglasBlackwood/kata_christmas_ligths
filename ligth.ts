class Light {
    private _isOn: boolean;

    constructor() {
        this._isOn = false;
    }

    public get isOn(): boolean {
        return this._isOn;
    }

    turnOn(): void {
        this._isOn = true;
    }

    turnOff(): void {
        this._isOn = false;
    }

    toggle(): void {
        this._isOn = !this._isOn;
    }
}

class BrightLight extends Light {
    private _brightness: number;

    constructor() {
        super();

        this._brightness = 0;
    }

    public get isOn(): boolean {
        return this._brightness > 0;
    }

    public get brightness(): number {
        return this._brightness;
    }

    turnOn(): void {
        this._brightness++;
    }

    turnOff(): void {
        this._brightness--;
        if (this._brightness < 0) {
            this._brightness = 0;
        }
    }

    toggle(): void {
        this._brightness += 2;
    }
}

export { Light, BrightLight };
