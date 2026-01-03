# Mainline Automations Landing Page

AI-powered customer messaging automation for lawn care businesses.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file with your Resend API key:

```
RESEND_API_KEY=your_resend_api_key_here
```

To get a Resend API key:
1. Go to https://resend.com
2. Sign up for a free account
3. Go to API Keys and create a new key
4. Copy the key and paste it in your `.env.local` file

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app` - Next.js app directory with pages and API routes
- `/components` - Reusable React components
- `/public` - Static assets (images, logos, etc.)

## Adding Your Logo

1. Place your logo files in `/public/assets/`
2. Update the Navbar component to use your logo image

## Customization

### Colors

Edit `tailwind.config.ts` to customize your brand colors.

### Content

All content can be edited directly in the component files:
- Hero text: `/components/Hero.tsx`
- Services: `/components/Services.tsx`
- Contact form: `/components/ContactForm.tsx`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Import your repository
4. Add your `RESEND_API_KEY` environment variable
5. Deploy!

### Connect Your Domain

After deploying:
1. Go to Vercel dashboard → Settings → Domains
2. Add your GoDaddy domain
3. Follow Vercel's instructions to update DNS in GoDaddy
4. Wait for DNS propagation (5-60 minutes)

## Built With

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Resend (email service)
- React Hook Form
- Lucide React (icons)
