# Next.js Starter Template

A modern, production-ready Next.js starter template with authentication, database integration, and a beautiful UI out of the box. Perfect for quickly launching your next SaaS, web app, or MVP.

## ✨ Features

- ⚡ **Next.js 15** - Latest version with App Router
- 🔐 **Better Auth** - Modern authentication with Google OAuth
- 🗄️ **Prisma + PostgreSQL** - Type-safe database with powerful ORM
- 🎨 **Shadcn/UI + Tailwind CSS** - Beautiful, accessible components
- 🔄 **TanStack Query** - Powerful data fetching and caching
- 🔥 **React Hot Toast** - Elegant notifications
- 📘 **TypeScript** - Full type safety across the stack

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- Google OAuth credentials (for authentication)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yashrajvrma/nextjs-starter-template.git
   cd nextjs-starter-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

   Fill in your environment variables:

   ```env
   NEXT_PUBLIC_DEVELOPMENT_BASE_URL=http://localhost:3000
   NEXT_PUBLIC_PRODUCTION_BASE_URL=https://your-domain.com

   DATABASE_URL=postgresql://user:password@localhost:5432/dbname

   BETTER_AUTH_SECRET=your_random_secret_here
   BETTER_AUTH_URL=http://localhost:3000

   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. **Set up the database**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Database Setup

This template uses PostgreSQL. You can use:

- Local PostgreSQL installation
- [Neon](https://neon.tech/) (Recommended - Free tier available)
- [Supabase](https://supabase.com/)
- [Railway](https://railway.app/)
- Any PostgreSQL provider

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to Credentials → Create Credentials → OAuth 2.0 Client ID
5. Add authorized redirect URIs:
   - Development: `http://localhost:3000/api/auth/callback/google`
   - Production: `https://your-domain.com/api/auth/callback/google`
6. Copy your Client ID and Client Secret to `.env`

### Prisma Schema

The Prisma schema is located at `prisma/schema.prisma`. After making changes:

```bash
npx prisma generate        # Generate Prisma Client
npx prisma db push         # Push changes to database
npx prisma studio          # Open Prisma Studio (DB GUI)
```

## 📦 Tech Stack

| Technology | Purpose |
| --- | --- |
| [Next.js](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Better Auth](https://www.better-auth.com/) | Authentication & authorization |
| [Prisma](https://www.prisma.io/) | Database ORM |
| [PostgreSQL](https://www.postgresql.org/) | Database |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [Shadcn/UI](https://ui.shadcn.com/) | UI components |
| [TanStack Query](https://tanstack.com/query) | Data fetching & state management |
| [React Hot Toast](https://react-hot-toast.com/) | Toast notifications |

## 📁 Project Structure

```
nextjs-starter-template/
├── app/                  # Next.js app directory
│   ├── (auth)/          # Authentication pages
│   ├── api/             # API routes
│   ├── error/           # Error pages
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── providers.tsx    # App providers (TanStack Query, etc.)
├── components/          # React components
│   ├── button/          # Button components
│   └── ui/              # Shadcn UI components
├── db/                  # Database configuration
│   └── index.ts         # Prisma client singleton
├── lib/                 # Utility functions
│   ├── auth/            # Auth configuration
│   └── utils.ts         # Helper functions
├── prisma/              # Prisma schema and migrations
│   └── schema.prisma    # Database schema
├── public/              # Static files
├── .env.example         # Environment variables template
├── components.json      # Shadcn UI configuration
├── next-env.d.ts        # Next.js TypeScript declarations
├── package.json         # Dependencies
├── postcss.config.mjs   # PostCSS configuration
└── eslint.config.mjs    # ESLint configuration
```

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding New Dependencies

```bash
npm install package-name
```

### Database Migrations

```bash
npx prisma migrate dev --name migration_name
```

---

💖 Support

If this starter template helped you, please give it a ⭐ on GitHub!

**Happy coding!**
