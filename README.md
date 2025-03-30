# Göteborg & Co API Example

This is an example project showcasing how to use the Göteborg & Co API with Next.js. The project demonstrates how to fetch and display guides and events using server-side rendering for optimal performance and security.

## Features

- Server-side rendering with Next.js
- TypeScript for type safety
- Tailwind CSS for styling
- Responsive design
- Modern UI components with shadcn/ui
- Secure API handling with environment variables

## Prerequisites

Before you begin, ensure you have:
- Node.js 18.x or later
- A Göteborg & Co API subscription key
- The API URL endpoint

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/goteborgco/open-api-next-example.git
cd open-api-next-example
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
# Copy the example environment file
cp .env.example .env
```

4. Open the `.env` file and add your API credentials:
```
GBGCO_API_URL=your-api-url-here
GBGCO_API_KEY=your-subscription-key-here
```

5. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/components` - React components including GuideCard and EventCard
- `/src/lib` - Utility functions and API configuration
- `/src/app` - Next.js app router pages and layouts
- `/public` - Static assets

## API Integration

The project uses the `@goteborgco/open-api-js-client` package to interact with the Göteborg & Co API. The API calls are made server-side to ensure API credentials are never exposed to the client.