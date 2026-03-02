<div align="center">

<h1>vue-haptic 📳</h1>

<p>A convenient Vue composable to trigger haptic feedback anywhere in your application</p>

<p>
      <a href="https://github.com/posaune0423/vue-haptic/actions/workflows/ci.yml">
        <img alt="CI" src="https://github.com/posaune0423/vue-haptic/actions/workflows/ci.yml/badge.svg" />
      </a>
      <a href="https://www.npmjs.com/package/vue-haptic">
        <img src="https://img.shields.io/npm/v/vue-haptic.svg" alt="npm package" />
      </a>
      <a href="https://npmjs.org/package/vue-haptic">
        <img alt="downloads" src="https://img.shields.io/npm/d18m/vue-haptic" />
      </a>
  </p>
</div>

## ✨ Overview

This package utilizes the `input[switch]` element introduced in
[Safari 18.0](https://webkit.org/blog/15865/webkit-features-in-safari-18-0/) to
trigger haptic feedback anytime, anywhere in your Vue application.

## 🚀 Features

- ✅ Trigger haptic feedback at any time in your Vue application
- ✅ Support iOS, Android
- ✅ Simple, intuitive API
- ✅ Native TypeScript support
- ✅ ESM / CJS compatible

## 📦 Installation

```bash
npm install vue-haptic
```

```bash
yarn add vue-haptic
```

```bash
pnpm add vue-haptic
```

```bash
bun add vue-haptic
```

## 🔧 Usage

```vue
<script setup lang="ts">
import { useHaptic } from "vue-haptic";

const { triggerHaptic } = useHaptic();
</script>

<template>
  <button @click="triggerHaptic">Feel Haptic</button>
</template>
```

## 🏃‍♂️ Quick Start

Clone the repository and run the sample app:

```bash
git clone https://github.com/posaune0423/vue-haptic.git
cd sample/vite-vue
npm install
npm run dev
```

You can visit the demo page by scanning the QR code displayed in the terminal.

## 🧰 Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build
```

### Publishing to npm

```bash
npm run build
npm publish
```

## 📄 License

[MIT](./LICENSE)