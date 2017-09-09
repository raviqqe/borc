import Buffer from "./buffer";

export default class {
    private buffer: Buffer = new Buffer();

    public encode(x: any): Uint8Array {
        return this.buffer.toArray();
    }

    private encodeAny(x: any): void {
        switch (typeof x) {
            case "number":
                throw new Error(`Encoder for ${x} is not implemented yet.`);
            default:
                throw new Error(`Encoder for ${x} is not implemented yet.`);
        }
    }
}
