# Prompt Mastery

Prompt Mastery is a premium, encyclopedia-style gallery of high-quality AI prompts. It serves as a curated museum of "battle-tested" prompts designed for developers, writers, marketers, and creators who want to unlock the full potential of Large Language Models (LLMs).

## Features

-   **Premium Glassmorphism UI**: A modern, clean aesthetic with glass-effect surfaces, soft shadows, and smooth micro-interactions.
-   **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
-   **Dark/Light Mode**: Seamless theme switching with persistent user preference.
-   **Advanced Filtering**: Filter prompts by category, AI agent (ChatGPT, Claude, Gemini, etc.), and tags.
-   **Real-time Search**: Instant search functionality to find prompts by title, description, or keywords.
-   **One-Click Copy**: Easy-to-use copy button with toast notifications.
-   **Detailed Modal View**: A focused view for each prompt with syntax highlighting, usage tips, and metadata.
-   **Local Data Source**: Fast and scalable JSON-based data management.

## Tech Stack

-   **Framework**: React 18
-   **Build Tool**: Vite
-   **Styling**: Tailwind CSS v4
-   **Animations**: Framer Motion (motion/react)
-   **Icons**: Lucide React
-   **Language**: TypeScript

## Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/prompt-mastery.git
    cd prompt-mastery
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components (Header, Hero, PromptCard, etc.)
│   ├── data/            # JSON data files (prompts.json)
│   ├── types.ts         # TypeScript interfaces and types
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles and Tailwind configuration
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
└── vite.config.ts       # Vite configuration
```

## Customization

### Adding New Prompts

To add new prompts, simply edit the `src/data/prompts.json` file. Follow the existing structure:

```json
{
  "id": "unique-id",
  "title": "Prompt Title",
  "description": "Short description",
  "category": "Category Name",
  "prompt": "The full prompt text...",
  "agents": ["ChatGPT", "Claude"],
  "tags": ["tag1", "tag2"],
  "tips": "Optional usage tips"
}
```

### Modifying Categories

Update the `Category` type in `src/types.ts` and the `categories` array in `src/App.tsx` to add or remove categories.

## License

This project is licensed under the Apache-2.0 License.
