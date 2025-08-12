# BuyFelicia 🚀

A modern memecoin website built with Next.js 15, showcasing the power of decentralized finance and community-driven crypto projects.

## 🎯 About BuyFelicia

BuyFelicia is a cutting-edge memecoin platform designed to bring fun and innovation to the cryptocurrency space. Built with modern web technologies, this platform provides users with an engaging experience for exploring and interacting with the BuyFelicia ecosystem.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) for modern, responsive design
- **Fonts**: [Fredoka](https://fonts.google.com/specimen/Fredoka) for modern, responsive design
- **UI Components**: [shadcn/ui](https://ui.shadcn.com) with New York style and Radix UI primitives
- **Storage**: [Vercel Blob](https://vercel.com/docs/storage/vercel-blob) for file storage and management
- **Deployment**: Optimized for [Vercel](https://vercel.com)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd buy-falicia
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
buy-falicia/
├── app/                    # Next.js App Router directory
│   ├── api/               # API routes
│   │   └── upload/        # File upload endpoint
│   ├── globals.css        # Global styles with Tailwind CSS
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx          # Home page component
│   └── favicon.ico       # Site favicon
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   │   ├── button.tsx    # Button component
│   │   ├── card.tsx      # Card component
│   │   ├── input.tsx     # Input component
│   │   ├── form.tsx      # Form component
│   │   ├── dialog.tsx    # Dialog component
│   │   ├── table.tsx     # Table component
│   │   ├── calendar.tsx  # Calendar component
│   │   └── ...           # 30+ more UI components
│   └── BlobUpload.tsx    # File upload component
├── lib/                   # Utility libraries
│   ├── utils.ts          # shadcn/ui utility functions
│   └── blob.ts           # Vercel Blob service utilities
├── public/               # Static assets
├── package.json         # Project dependencies and scripts
├── components.json      # shadcn/ui configuration
├── tsconfig.json       # TypeScript configuration
├── next.config.ts      # Next.js configuration
├── vercel.json         # Vercel deployment configuration
└── postcss.config.mjs  # PostCSS configuration for Tailwind
```

## 🎨 Styling & UI Components

This project uses Tailwind CSS v4 with shadcn/ui components:

### Tailwind CSS v4
- Custom CSS variables for theming
- Dark mode support via `prefers-color-scheme`
- Fredoka font family integration
- Responsive design utilities

### shadcn/ui Components
- **30+ pre-built components** with Radix UI primitives
- **New York style** design system
- **Type-safe** with full TypeScript support
- **Accessible** components following WCAG guidelines
- **Customizable** with CSS variables and Tailwind classes

#### Available Components
- **Layout**: Card, Separator, Scroll Area, Collapsible
- **Forms**: Input, Label, Form, Textarea, Select, Checkbox, Radio, Switch, Slider
- **Navigation**: Tabs, Accordion, Navigation Menu, Breadcrumb, Pagination
- **Feedback**: Alert, Alert Dialog, Progress, Skeleton, Toast (Sonner)
- **Data Display**: Table, Calendar, Badge, Avatar
- **Overlay**: Dialog, Sheet, Popover, Tooltip, Hover Card
- **Interactive**: Button, Toggle, Toggle Group, Context Menu, Dropdown Menu

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy BuyFelicia is to use the [Vercel Platform](https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app):

1. Push your code to a Git repository
2. Import your project to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your app will be deployed with automatic SSL and global CDN

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/buy-falicia)

### Other Deployment Options

BuyFelicia can also be deployed to:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- Any platform that supports Node.js

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory for environment-specific variables:

```env
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Vercel Blob Storage (Required for file uploads)
# Get this token from your Vercel dashboard under Storage > Blob
BLOB_READ_WRITE_TOKEN=your_blob_token_here
```

**To get your Blob token:**
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to Storage → Blob
3. Create a new Blob store or select existing one
4. Copy the `BLOB_READ_WRITE_TOKEN` from the store settings

### Next.js Configuration

The project uses `next.config.ts` for configuration. Customize it based on your needs:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add your custom configuration here
  images: {
    domains: ['example.com'], // Add external image domains
  },
  // Enable experimental features as needed
};

export default nextConfig;
```

### shadcn/ui Configuration

The project uses `components.json` for shadcn/ui configuration:

```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "baseColor": "zinc",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about utility-first CSS
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - learn about TypeScript
- [Vercel Platform](https://vercel.com/) - learn about deployment and hosting
- [Vercel Blob Documentation](https://vercel.com/docs/storage/vercel-blob) - learn about file storage and management

## 📁 File Storage with Vercel Blob

BuyFelicia includes a complete file storage solution using Vercel Blob:

### Features
- **File Upload API**: RESTful endpoint for handling file uploads
- **Smart Content Detection**: Automatic MIME type detection for images and documents
- **Access Control**: Public and private file access options
- **Type Safety**: Full TypeScript support with proper interfaces
- **Error Handling**: Comprehensive error handling and user feedback

### Usage Examples

#### Basic File Upload
```typescript
import { uploadFile } from '@/lib/blob';

const result = await uploadFile('documents/report.pdf', fileBuffer, {
  access: 'public',
  contentType: 'application/pdf'
});
```

#### Image Upload with Auto-detection
```typescript
import { uploadImage } from '@/lib/blob';

const result = await uploadImage('images/logo.png', imageBuffer, {
  access: 'public'
});
```

#### Document Upload
```typescript
import { uploadDocument } from '@/lib/blob';

const result = await uploadDocument('docs/manual.docx', docBuffer, {
  access: 'private'
});
```

### API Endpoints

- `POST /api/upload` - Upload files with type detection and access control
- `GET /api/upload` - Get upload endpoint information

### Component Usage

#### Using shadcn/ui Components
```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function WelcomePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to BuyFelicia</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter your name" />
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

#### Using the Upload Component
```tsx
import BlobUpload from '@/components/BlobUpload';

export default function UploadPage() {
  return (
    <div>
      <h1>Upload Files</h1>
      <BlobUpload />
    </div>
  );
}
```

---

**Happy coding! 🎉**
