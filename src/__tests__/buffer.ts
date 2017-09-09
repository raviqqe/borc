import Buffer from "../buffer";

test("Create a new buffer", () => {
    for (const length of [0, 1, 2, 7, 16, 128]) {
        const buffer = new Buffer(length);
    }
});

test("Push bytes into a buffer", () => {
    const buffer = new Buffer(0);

    for (const byte of [0, 1, 2, 3, 127, 128, 255]) {
        buffer.push(byte);
    }
});

test("Converts a buffer into Uint8Array", () => {
    const elements = [0, 1, 2, 3, 127, 128, 255];
    const buffer = new Buffer(0);

    for (const byte of elements) {
        buffer.push(byte);
    }

    const array = buffer.toArray();

    expect(array.length).toBe(7);
    expect(Array.from(array)).toEqual(elements);
});
