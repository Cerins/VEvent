# VEvent

Event system written in typescript.

## Getting Started

### Installing dependencies

```
npm install
```

### Building

```
npm run build
```

### Development server

```
npm run start:dev
```

### Run tests

```
npm run test
```

### Generate documentation

```
npm run doc
```

## Usage example

```typescript

import { VEventTarget, VEvent } from "./vanillaEvent";

class Cat extends VEventTarget {
    hunger = 1;

    name: string;

    constructor(name: string) {
        super();
        this.name = name;
        this.declareEvent('update');
    }

    feed() {
        if (this.hunger > 0) this.hunger--;
        this.dispatchEvent(new VEvent('update'));
    }
}
const hungerLevels: {[name: string]: number;} = {};
const cat = new Cat('Kitty');
cat.addEventListener('update', function temp(this: Cat) {
    hungerLevels[this.name] = this.hunger;
});
cat.feed();

```