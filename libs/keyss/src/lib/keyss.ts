import { KeyssEnum } from "./keyss.enum";

export class Keyss {

    private static checkHotKeys(event: KeyboardEvent, combination: (KeyssEnum | string)[]) {
        const hotKeysPressed = [];
        const keyPressed = [];
        const keyMap: { [key: string]: boolean } = {};
        let hotKeysMatched = false;
        let keyMatched = false;
        for (const token of combination) {
            const index = Object.values(KeyssEnum).indexOf(token as KeyssEnum);
            if (index > -1) {
                hotKeysPressed.push(token);
            } else {
                keyPressed.push(token);
            }
        }
        for (const key of Object.values(KeyssEnum)) {
            keyMap[key] = hotKeysPressed.indexOf(key) > -1 ? true : false;
        }
        const notMatchedToken = Object.keys(keyMap).find((key: string) => {
            if ((event as { [key: string]: any })[key] === undefined) {
                if (keyMap[key]) {
                    return true;
                } else {
                    return false;
                }
            }
            return (event as { [key: string]: any })[key] !== keyMap[key];
        });
        if (!notMatchedToken) {
            hotKeysMatched = true;
        }
        const notMatchedKey = keyPressed.find((key: string) => {
            return key !== event.key;
        });
        if (!notMatchedKey) {
            keyMatched = true;
        }
        return hotKeysMatched && keyMatched;
    }

    public static filter(event: KeyboardEvent, ...combinations: (KeyssEnum | string)[][]): boolean {
        const result = combinations.find((combination: (KeyssEnum | string)[]) => Keyss.checkHotKeys(event, combination));
        return !!result;
    }

}
