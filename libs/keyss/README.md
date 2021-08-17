## @ht14x/keyss [![npm-publish](https://github.com/HT14X/ng-tools/actions/workflows/main.yml/badge.svg)](https://github.com/HT14X/ng-tools/actions/workflows/main.yml) [![npm version](https://badge.fury.io/js/%40ht14x%2Fkeyss.svg)](https://badge.fury.io/js/%40ht14x%2Fkeyss)

Utility for filtering pressed keyss

### Install

`npm install @ht14x/keyss`

### Documentation

-   #### `Keyss.filter`

```typescript
import { KeyssEnum, Keyss } from "@ht14x/keyss";
...
const event: KeyboardEvent = ...
const result = Keyss.filter(event, [KeyssEnum.Ctrl, KeyssEnum.Shift, "H"]);
// if event is from press Ctrl+Shift+H then result is true
console.log(result);
```

-   #### `@KeysFilter` with angular's `@HostListener`

```typescript
import { KeyssEnum, KeyssFilter } from "@ht14x/keyss";
...
@HostListener("document:keydown", ["$event"])
@KeyssFilter([KeyssEnum.Ctrl, KeyssEnum.Shift, "H"])
public keyDown(event) {
    // call `keyDown` method only on Ctrl+Shift+H combination
    console.log(event);
}
```
