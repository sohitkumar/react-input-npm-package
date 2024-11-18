````markdown
# React Input Component

A reusable React input component written in TypeScript, bundled with Rollup, and published to npm.

## Installation

To install the component in your project after publishing it to npm, run the following command:

```bash
npm install your-npm-package-name
```
````

## Usage

Here's how you can use the Input component in a React application:

```tsx
import React from "react";
import Input from "your-npm-package-name";

const App = () => (
  <div>
    <h1>Test Input Component</h1>
    <Input label="Name" placeholder="Enter your name" />
  </div>
);

export default App;
```

## Development Setup

To develop and publish this package, follow the steps below:

### Step 1: Set Up the Project

1. Clone the repository and navigate to the project folder:

   ```bash
   cd react-input-component
   ```

2. Initialize the npm project:

   ```bash
   npm init -y
   ```

3. Install React, TypeScript, and tslib:

   ```bash
   npm install react typescript tslib
   ```

4. Install development dependencies for TypeScript:

   ```bash
   npm install --save-dev typescript @types/react @types/react-dom
   ```

5. Initialize the TypeScript configuration:

   ```bash
   npx tsc --init
   ```

6. Install Rollup and the required plugins for bundling:

   ```bash
   npm install --save-dev rollup @rollup/plugin-typescript rollup-plugin-peer-deps-external @rollup/plugin-node-resolve @rollup/plugin-commonjs
   ```

7. Install additional Rollup plugins for generating type declarations and minifying the bundle:
   ```bash
   npm install --save-dev rollup-plugin-dts @rollup/plugin-terser
   ```

### Step 2: Write the Component

Create the `Input.tsx` file inside the `src` folder with the following code:

```tsx
import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: FC<InputProps> = ({ label, ...props }) => (
  <div>
    {label && <label>{label}</label>}
    <input {...props} />
  </div>
);

export default Input;
```

### Step 3: Create Rollup Configuration

Create a `rollup.config.js` file with the following content:

```js
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "./src/Input.tsx",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        exports: "default",
      },
      {
        file: "dist/index.es.js",
        format: "es",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "dist/types",
      }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "./dist/types/Input.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
```

### Step 4: Build the Project

To bundle the component, run:

```bash
npm run build
```

The above command will generate the following output files in the `dist` folder:

- `index.js` (CommonJS bundle)
- `index.es.js` (ES module bundle)
- `index.d.ts` (TypeScript type declarations)

### Step 5: Publishing to npm

Before publishing to npm, make sure your `package.json` is properly configured:

```json
{
  "name": "your-npm-package-name",
  "version": "1.0.0",
  "description": "A reusable input component for React.",
  "main": "dist/index.js",
  "module": "dist/index.es.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "rollup -c"
  },
  "files": ["dist"],
  "author": "Your Name",
  "license": "MIT",
  "peerDependencies": {
    "react": "^16.8.0 || ^17.0.0 || ^18.0.0",
    "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0"
  }
}
```

1. **Login to npm** (if not already logged in):

   ```bash
   npm login
   ```

2. **Publish the package**:

   ```bash
   npm publish --access public
   ```

3. **Verify**:
   After publishing, you can search for your package on [npmjs.com](https://www.npmjs.com/) or use it in another project.

## License

MIT License

```\

```
