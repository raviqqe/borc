import Decoder from "./decoder";

export default function(array: Uint8Array): any {
    return (new Decoder()).decode(array);
}
