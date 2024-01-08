# Installation {#introduction}

## Download this package {#Download}

The package is available on the npm registry

```bash
yarn install active-designsystem  
# or with npm
npm install active-designsystem
# or with pnpm
pnpm install active-designsystem

```

## Import {#Import }

```ts:line-numbers
//main.ts
import 'active-designsystem/style.css' // [!code ++]
import { config } from 'active-designsystem' // [!code ++]

const app = createApp(...) 
...
app.use(config) // [!code ++]
```
