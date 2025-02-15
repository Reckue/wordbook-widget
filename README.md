# Wordbook Widget

[![NPM Version](https://img.shields.io/npm/v/reckue-wordbook-widget)](https://www.npmjs.com/package/reckue-wordbook-widget)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/Reckue/wordbook-widget)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## 📌 About
**Wordbook Widget** is a React component library for managing vocabulary words interactively. Designed for seamless integration into learning applications, it provides tools to visualize, track, and modify word difficulty levels.

## 🚀 Installation
To install the package, use npm or yarn:
```sh
npm install reckue-wordbook-widget
# or
yarn add reckue-wordbook-widget
```

## 📦 Available Components
The library exports multiple components that can be used in your application:

### `LevelComponent`
Renders an interactive level selector for words, allowing users to update their familiarity with a word.

**Props:**
| Prop            | Type                                      | Description |
|----------------|----------------------------------------|-------------|
| `levelFromServer` | `number` | Initial level of the word (1-4). |
| `addToUpdate` | `(level: number) => void` (optional) | Callback function triggered when the level is updated. |
| `isClicked` | `React.MutableRefObject<boolean>` (optional) | Reference for tracking user interaction. |
| `updateLevels` | `() => Promise<void>` (optional) | Callback for updating levels externally. |

**Usage:**
```tsx
import { LevelComponent } from "reckue-wordbook-widget";

const MyComponent = () => {
  return <LevelComponent levelFromServer={2} />;
};
```

### `LevelWidget`
A higher-level widget that combines the `LevelComponent` with additional functionalities.

**Usage:**
```tsx
import { LevelWidget } from "reckue-wordbook-widget";

const MyApp = () => {
  return <LevelWidget />;
};
```

## 📖 Documentation
For more details, visit the [GitHub Repository](https://github.com/Reckue/wordbook-widget).

## 🛠 Development
To set up a local development environment:
```sh
git clone https://github.com/Reckue/wordbook-widget.git
cd wordbook-widget
npm install
npm run dev
```

## 📜 License
This project is licensed under the [MIT License](LICENSE).

