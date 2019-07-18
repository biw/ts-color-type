# `ts-color-type`

This is probably a bad idea, you shouldn't use this as it will crash your TypeScript server... but if you do:

first install:

```sh
yarn add -D ts-color-type
```

then in your code:

```ts
import { HexColorType } from 'ts-color-type'

const displayColor = (color: HexColorType) => {
    return `${color} is a valid hex color :)`
}
```

## License

MIT © [Ben Williams](https://biwills.com)
