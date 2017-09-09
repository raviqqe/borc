export default class {
    private array: Uint8Array;
    private length: number = 0;

    constructor(initialLength: number = 64) {
        this.array = new Uint8Array(initialLength);
    }

    public push(n: number): void {
        if (this.length > this.array.length) {
            throw new Error("Buffer length exceeds an array length.");
        }

        if (this.length === this.array.length) {
            const oldArray = this.array;
            this.array = new Uint8Array(Math.round(oldArray.length * 1.5) + 1);
            this.array.set(oldArray);
        }

        this.array[this.length] = n;
        this.length++;
    }

    public toArray(): Uint8Array {
        return this.array.subarray(0, this.length);
    }
}
