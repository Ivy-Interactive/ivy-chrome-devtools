# Ivy Chrome DevTools

A Chrome DevTools extension built with Vite, React, shadcn/ui, and Tailwind CSS.

## Features

- Chrome DevTools panel integration
- Modern UI with Tailwind CSS and shadcn/ui components
- Performance analysis visualization (placeholder)
- Dark/light mode support

## Development

### Prerequisites

- Node.js (latest LTS version recommended)
- npm

### Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Loading the extension in Chrome

1. Build the extension
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the `dist` folder
5. Open Chrome DevTools (F12 or right-click > Inspect) and navigate to the "Ivy" panel

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Chrome Extensions API
