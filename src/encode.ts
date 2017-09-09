import Encoder from "./encoder";

export default function(x: any): Uint8Array {
    return (new Encoder()).encode(x);
}
