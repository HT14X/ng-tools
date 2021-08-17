import { Keyss } from "./keyss";
import { KeyssEnum } from "./keyss.enum";

export function KeyssFilter(...combinations: (KeyssEnum | string)[][]) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: KeyboardEvent[]) {
            if (Keyss.filter(args[0], ...combinations)) {
                return originalMethod.apply(this, args);;
            }
        };
    };
}
