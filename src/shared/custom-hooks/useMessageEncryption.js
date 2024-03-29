export default function useMessageEncryption() {
    
    // var decoded = String.fromCharCode(...new Uint8Array(message));
    const decode = (message) => {
        const decoder = new TextDecoder('utf-8');
        return JSON.parse(decoder.decode(message));
    }
    const encode = (message) => {
        const encoder = new TextEncoder();
        return encoder.encode(JSON.stringify(message));
    }
    return {
        encode,
        decode
    }
}
