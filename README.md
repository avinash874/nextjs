This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# rafce (MOST COMMON) key 

# What is Layout File?
In Next.js App Router, the layout.js (or layout.tsx) file is a special file used to wrap pages and components with a shared structure-such as headers, footers, or navigation bars. It plays a critical role in creating consistent layouts across different routes of your app.

 # App folder ke ander agar koi folder bhi create karte hai to wo run nhi karega aur uske ander bhi koi file bhi create kiye jko tabhi run nhi karega 
 # name of the file ko proper name likho page.js,page.jsx

 # Correct route file (page.js) => File name must be exactly page.js (case-sensitive)

 # ham <Link> ka use karte hai insteast of anchor tag <a> jab pure page ko refresh nhi karna ho jab click karne par.

# What is Route Groups?
In Next.js App Router, Route Groups are a way to organize your routes without affecting the URL structure. This helps separate pages logically (like admin, user, auth, etc.) without showing these groups in the final route path.
Route Groups don't affect the final URL path.

# What is a "Subset"?
A subset in fonts refers to a specific group of characters (glyphs) based on a language or script.
For example:
• Latin - includes basic English and Western European characters.
• Cyrillic - includes characters for Russian, Bulgarian, etc.
• Arabic - includes Arabic script.
• Greek, Hebrew, etc.
Instead of downloading all possible characters in every script, you specify the subsets) you need. This:
•
•
Reduces the font file size
14 Improves performance and loading times
• Makes the font more focused on your audience's language

# On the client (first load)
1.client component ke ander kabhi bhi async function nhi bana sakte

2.Has "use client" at the top => Client Component

3.Client Components and the RSC Payload are used to pre-render HTML.

4.Client Component => Data/API keys are visible in the browser(use only public) 

# On the server
1.Server Components are rendered into a special data format called the React Server Component Payload (RSC Payload).

2.Fetch data from databases or APIs close to the source.
@.Use API keys, tokens, and other secrets without exposing them to the client.
@.Reduce the amount of JavaScript sent to the browser.
@.Improve the First Contentful Paint (FCP), and stream content progressively to the client.

3.Server Component => Data/API keys are kept secret on the server (safe for priveta keys)

# If a Client Component imports another component, that imported one become a client component too, even if it doesn't have "use client".

# how to create Dynamic Route Segments
1.When you don't know the exact route segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments that are filled in at request time or prerendered at build time.

2.You can use dynamic Route Segments in Server Components.

3.Dynamic Segments are passed as the params prop to layout, page, route, and generateMetadata functions.