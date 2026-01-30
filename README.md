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

# Installation next.js
```js
npm create-next-app@latest
```
# rafce (MOST COMMON) key 

# What is Layout File?
In Next.js App Router, the layout.js (or layout.tsx) file is a special file used to wrap pages and components with a shared structure-such as headers, footers, or navigation bars. It plays a critical role in creating consistent layouts across different routes of your app.

 * App folder ke ander agar koi folder bhi create karte hai to wo run nhi karega aur uske ander bhi koi file bhi create kiye jko tabhi run nhi karega 
 * name of the file ko proper name likho page.js,page.jsx

 * Correct route file (page.js) => File name must be exactly page.js (case-sensitive)

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

# 🔥 Dynamic Route in Client Component
1.use is a react API that lets you read the value of resourse like a Promise or context.

# What are SearchParams?

11.useSearchParams is a Next.js App Router hook used to read URL query parameters like ?page=2&sort=asc

12.useSearchParams is a Next.js client hook used to read query parameters from the URL in App Router, similar to URLSearchParams but reactive.

1.In Next.js (especially in App  Router), searchParams is an  optional prop you can access in  server components or via loader  functions to read query parameters  directly from the URL. It's  extremely useful for building  features like filtering, sorting,  and pagination - all of which are  essential in e-commerce (ecom)  websites.
 It refers to the query string  parameters in the URL - like this:

2.useSearchParams is a Client Component hook and is not supported in Server Components to prevent stale values during partial rendering.

3.If you want to fetch data in a Server Component based on search params, it's often a better option to read the searchParams prop of the corresponding Page. You can then pass it down by props to any component (Server or Client) within that Page.

4.If an application includes the /pages directory, useSearchParams will return ReadonlyURLSearchParams | null. The null value is for compatibility during migration since search params cannot be known during pre-rendering of a page that doesn't use getServerSideProps

# Catch-all Segments

1.Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets [...segmentName].

2. In Next.js, catch-all segments ([...slug]) are incredibly useful when you want to handle dynamic nested routes without having to manually define each level of the path.

Example 1:
Blog with Nested Categories
Path Example: /blog/technology/javascript

Use Case:You may have blog categories and subcategories:
/blog
/blog/technology
/blog/technology/javascript

Instead of creating separate [category]/[subcategory]/page.js, you can use: app/blog/[...slug]/page.js

2. E-commerce Product Catalog
Path Example:
/shop/clothing/men/shirts

Use Case:
Users can filter or browse products through multiple nested categories.

File:
app/shop/...slugl/page.js

3. The difference between catch-all and optional catch-all segments is that with optional, the route without the parameter is also matched (/shop in the example above).
pages/shop/[[...slug]].js	   /shop/a/b/c	      { slug: ['a', 'b', 'c'] }

===============================
##### Fetching data from Api

# Server Components

You can fetch data in Server Components using any asynchronous I/O, such as:

* The fetch API
* An ORM or database
* Reading from the filesystem using Node.js APIs like fs

* With the fetch API

To fetch data with the {fetch} API, turn your component into an asynchronous function, and await the {fetch} call. For example:
* localhost link: http://localhost:3000/datafetch/servercomp?name=kiran

# api: https://api.genderize.io/?name=${userName}

# How to Fetch Data in Next.js Client Component🔥

* React's use hook
* A community library like  {SWR}or {React Query}

Streaming data with the {use} hook

You can {use} React's use hook to stream data from the server to client. Start by fetching data in your Server component, and pass the promise to your Client Component as prop:


# Next.js Auto Loading Animation with loading.jsx | Show Spinner Without Any Code!

* just by creating a loading.jsx file! No need to write extra useState or spinner logic

* The special file loading.js helps you create meaningful Loading UI with React Suspense. With this convention, you can show an instant loading state from the server while the content of a route segment streams in. The new content is automatically swapped in once complete.


# Build a Random Jokes Generator App in Next.js with API & Tailwind CSS

Link: http://localhost:3000/projects/jokes
use this Link : https://official-joke-api.appspot.com/random_joke


# Suspense in Next.js: Load Async Part Only — Rest of UI Loads Immediately!

<Suspense> lets you display a fallback until its children have finished loading.

For example:
* Show a loading spinner for just part of the page
* Fetch server-side data inside a component (server component)
* Make your Ul feel more responsive without waiting for everything

# Connect Next.js with MySQL🔥

* Install mysql2 in terminal: npm i mysql2

* work on workbench: data should like that:
  # working schema
  ```js
  * create database hospital_db;
   * use hospital_db;

   * CREATE TABLE doctors (
    * doctor_id INT PRIMARY KEY * AUTO_INCREMENT,
    * name VARCHAR(100),
    * specialization VARCHAR(100),
    * phone VARCHAR(15),
    * experience INT
* );
```

```js
 INSERT INTO doctors (name, specialization, phone, experience) VALUES 
 ('Dr. Amit Kumar', 'Cardiologist', '9001112201', 10),
 ('Dr. Neha Jain', 'Dermatologist', '9001112202', 7),
 ('Dr. Suresh Rao', 'Orthopedic', '9001112203', 12),
 ('Dr. Rahul Mehta', 'Neurologist', '9001112204', 15),
 ('Dr. Pooja Sharma', 'Gynecologist', '9001112205', 9),
 ('Dr. Anil Verma', 'General Physician', '9001112206', 8),
 ('Dr. Kavita Singh', 'Pediatrician', '9001112207', 6),


* select * from doctors

```

* make file db.js inside config and also make file static

# db.js

```js
 import mysql from "mysql2/promise";

 <export const db = mysql.createPool({
     host: "localhost",
     user: "root",
     password: "Avinash#2004",
     database: "hospital_db",
* });

 try {
 const connection = await db.getConnection();
 console.log("Database connection * successfully.")
 connection.release();
 } catch(err){
     console.error("Database connection * failed:", err);
     process.exist(1);
 }>

```

# static/page.jsx

```js
 import React from 'react'
 import {db} from "../../../consfig/db"

 <<const StaticPage = async () => {
     const [doctors] = await db.execute* ("select * from doctors");
     console.log(doctors);

   return (
   <>
     <ul>
       {doctors.map((doctor) => (
         <li key={doctor.doctor_id}>{doctor.* name}</li>
       ))}
     </ul>
   </>
 );
 }>

 export default StaticPage

```

]


# Static Route (Default Behavior)
“Static pages are pre-rendered at build time for performance, while dynamic pages are rendered per request to serve real-time or user-specific data.”

* In Next.js, all routes are static by default.
For example:
*Page is generated once during npm run build.
* Doesn't change based on user or request data.
* Loads super fast and can be cached by CDNs.

# Dynamic Route
A route becomes dynamic when it depends on data that can change between requests, like:
For example:
• searchParams (e.g. ?user=thapa)
• headers function
• cookies function
• useSearchParams() or usePathname()
• fetch0 with cache: 'no-store' or next: {revalidate: 0 }
• Or when you manually mark a page as dynamic:
export const dynamic = force-dynamic';

```js
* ○  (Static)   prerendered as static content
* ƒ  (Dynamic)  server-rendered on demand
```

* for produvtion
 ```js
npm run build
 npm run start
 ```

# ISR ka need tab aaya jab data delete karne pr dynamic me delete ho jata tha but in static not delete

# How to implement Incremental Static Regeneration (ISR)

# export const revalidate = 30; // Revalidate every 60 seconds

Incremental Static Regeneration (ISR) enables you to:

* Update static content without rebuilding the entire site
* Reduce server load by serving prerendered, static pages for most requests
* Ensure proper cache-control headers are automatically added to pages
* Handle large amounts of content pages without long next build times

# ISR
Let's say your page was built at 12:00 PM with 10 database entries:
Timeline:

* 12:00 PM: Build complete, page has 10 entries
* 12:30 PM: You delete 2 entries (now 8 in DB)
* 1:00 PM: User visits page (60+ seconds after build)

What the user sees:

* Immediately: The cached version with 10 entries (stale data)
* Background: Next.js triggers regeneration with current DB state (8 entries)
* Next visitor: Gets the fresh version with 8 entries

* $$$== key point
* No automatic background updates - ISR only regenerates when someone requests the page after the revalidate period
* Stale data is served first - Users never wait for regeneration
* Zero downtime - Page is always available, even during regeneration failures

* 🔁 ISR kaise kaam karta hai? (Flow)

* Build time pe page generate hota hai (static)
* User ko cached static page milta hai (fast)
* Jab revalidate time cross hota hai:
   * * Next.js background me new page generate karta hai
* Next user ko updated page milta hai
* ⚠️ Pehla user ko purana page mil sakta hai
* ⚠️ Next user ko updated page milta hai

# Ract Cache in Next.js very important

* cache() is a function introduced in React 18+ that allows you to memoize (store the result of) a function based on its arguments so it doesn't run again if called with the same arguments.

* This is particularly useful on the server to avoid repeated data fetching for the same input, especially during SSR or RSC rendering.

* cache() works only in server components or in server environments like Next.js
app router.

# 🔹 What problem does React Cache solve?

* When multiple components request the same data (e.g., a DB query), React Cache ensures:

* The function runs once
* The result is reused
* Performance improves
* No redundant API/DB calls

# 🔹 How it works (simple idea)
React Cache:
* Caches function results by arguments
* Works on the server
* Automatically deduplicates calls during rendering

# React's cache() fetches data on first call and reuses it from memory for the same arguments on subsequent server calls.

# 🔹 React Cache + Database Example (Real use case)

```js
 import { cache } from "react";
 import db from "@/lib/db"; export const getUserById = cache(async (id: string) => {
   return db.user.findUnique({ where: { id } });
 });
```

# Custom Errors
# Fix 404 Route Errors with notFound() in Next.js

* In Next.js App Router, the correct way to show a 404 page for missing data or invalid routes is using notFound() from next/navigation.

* “In Next.js App Router, notFound() throws a special error that renders the nearest not-found.jsx and returns a 404 HTTP status.”

# 🔥 Best practices

* Always validate params
* Always check DB results
* Use route-level not-found.jsx
* Never use notFound() in client components


# generateStaticParams in Next.js

* The generateStaticParams function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.

* You can use the dynamicParams segment config option to control what happens when a dynamic segment is visited that was not generated with generateStaticParams.
* You must return an empty array from generateStaticParams or utilize export const dynamic = 'force-static' in order to revalidate (ISR) paths at runtime.
* During next dev, generateStaticParams will be called when you navigate to a route.
During next build, generateStaticParams runs before the corresponding Layouts or Pages are generated.
* During revalidation (ISR), generateStaticParams will not be called again.
* generateStaticParams replaces the getStaticPaths function in the Pages Router.

# Next.js Server Actions🔥Insert Contact Form Data into MySQL

* fromEntries(formData.entries()) => nested array ko plane javascript pe convert kar deta hai

* Prepared statements are very useful against SQL injections.(?,?,?)

* 'use server' is for use with using React Server Components.

* 'use server' marks server-side functions that can be called from client-side code.

# Reference
'use server'
* Security considerations
* Serializable arguments and return values

* Add 'use server' at the top of an async function body to mark the function as callable by the client. We call these functions Server Functions.

```js
async function addToCart(data) {
  'use server';
  // ...
} 
```

 Usage
* Server Functions in forms
* Calling a Server Function outside of <form>


# 34 Form Actions in next.js
“Form Actions in Next.js let forms submit directly to Server Actions without APIs, providing built-in loading state, validation, and progressive enhancement.”

* client component me meta data ko nhi likh sakte

 
 const contactAction = (formData) => {
     const {fullName, email, message} = Object. fromEntries(formData.entries());
     console.log(fullName, email, message);
};  


# useActionState🔥Show Loading + Handle Form Response Easily in Next.js

useActionState is a Hook that allows you to update state based on the result of a form action.

```const [state,formAction, isPending] = useActionState(fn,initialState, permalink?);```

* In earlier React Canary versions, this API was part of React DOM and called useFormState.

* Reference 
```useActionState(action, initialState, permalink?)```

# React DOM useFormStatus Hook🔥Show Loading State on Submit Button 
* useFormStatus hook from React DOM, built specifically for forms using Server Actions in Next.js 14. You’ll learn how to control form buttons during submission, show real-time loading states, and improve your form UX instantly.

* useFormStatus is a Hook that gives you status information of the last form submission.
 * const { pending, data, method, action } = useFormStatus();

 * useFormStatus does not take any parameters.

 A status object with the following properties:

* pending: A boolean. If true, this means the parent <form> is pending submission. Otherwise, false.

* data: An object implementing the FormData interface that contains the data the parent <form> is submitting. If there is no active submission or no parent <form>, it will be null.

* method: A string value of either 'get' or 'post'. This represents whether the parent <form> is submitting with either a GET or POST HTTP method. By default, a <form> will use the GET method and can be specified by the method property.

* * action: A reference to the function passed to the action prop on the parent <form>. If there is no parent <form>, the property is null. If there is a URI value provided to the action prop, or no action prop specified, status.action will be null.


# Next.js redirect() Explained🔥(App Router)

* In Next.js App Router, redirect() is the official way to send users to another route from the server. It immediately stops rendering and returns an HTTP redirect response.

* redirect() is a server-only helper from next/navigation that:
    * Ends the current request
    * Sends a 307/308 redirect response
    * Navigates the user to another URL

* import { redirect } from "next/navigation";

<!-- ////////////////// -->
 * redirect() function from next/navigation in the Next.js App Router. We’ll cover when and how to use it inside Server Actions, what common errors you might face, and how to fix them effectively—especially when using try-catch blocks.


* ⚠️ Stop misusing client-side redirection like router.push()—use the powerful server-side redirect() instead for secure, fast, and cleaner navigation.
* Whether you're working with form submissions, page loaders, or server logic — this is a must-know feature for all Next.js 14+ developers.
* BONUS: Learn why redirect() must not be used inside try-catch, and what’s the correct approach.

# Behavior
* In Server Actions and Route Handlers, redirect should be called outside the <try> block when using <try/catch> statements.

* If you prefer to retur a 308 (Permanent) HTTP redirect instead of 307 (Temporary), you can use the <permanentRedirect function> instead.
* redirect throws an error so it should be called outside the try block when using try/catch statements.
* redirect can be called in Client Components during the rendering process but not in event handlers. You can use the useRouter hook instead.
* redirect also accepts absolute URLs and can be used to redirect to external links.

* If you'd like to redirect before the render process, use (next.config.js) or Middleware.

# useRouter Hook in Next.js

useRouter hook for client-side redirects
How server components handle redirection in Next.js
* Difference between next/router and next/navigation

* The useRouter hook allows you to programmatically change routes in side <Client Components.> 

If you want to access the router object inside any function component in your app, you can use the useRouter hook.

 we can use two route in this?
 * next/Router
 * next/navigation

 * Use next/outer if you're using Page Router,
 * Otherwise next/navigation if you're using App Router.

 * useRouter is a React Hook, meaning it cannot be used with classes. You can either use withRouter or wrap your class in a function component.

 import { useRouter } from 'next/router'
 const router = useRouter()
 router.push("/contact");

 # 🔙 Go Back Button in Next.js using useRouter

  * Import useRouter for navigation 
 * ```import { useRouter } from "next/navigation"; ```
*  Initialize the router*
 * c```onst router = useRouter(); ```
 * Navigate back to the previous page
* ```onClick={() => router.back()}  ```

# 40.Handling Server Actions in Next.js with useTransition

* useTransition is a React Hook that lets you render a part of the UI in the background.
```js
* import { useTransition } from 'react';
* const [isPending, startTransition] = useTransition()
```

* "The code inside here is not urgent-do it in the background if needed,so the UI stay responsive."
* useTransition does not take any parameters.
* useTransition returns an array with exactly two items:

* 1.The isPending flag that tells you whether there is a pending Transition.
* 2.The startTransition function that lets you mark updates as a Transition.

* Functions called in startTransition are called “Actions”. 
* The function passed to startTransition is called an “Action”. By convention, any callback called inside startTransition (such as a callback prop) should be named action or include the “Action” suffix:

* if we get the dada from form then use: Obeject.formentries(formData);

* * Want	               Use
* Server redirect	   redirect() in Server Action
* Client redirect	  router.push()
* Form with loader	  useFormState()
* Client submit	      useTransition()

# 41.revalidatePath in Next.js (App Router)

* <revalidatePath> can be called in Server Functions and Route Handlers.

* <revalidatePath> cannot be called in Client Components or Proxy, as it only works in server environments.

* revalidatePath() is a cache invalidation helper that lets you refresh static/ISR pages on demand after a mutation (create/update/delete).

Think: “I changed data — now refresh this page.”

# What problem does it solve?

When you use:
* SSG / ISR
* fetch caching
* React cache

Next.js serves cached HTML.

* After a mutation (e.g., creating a doctor), the page won’t update until the next revalidation window — unless you call revalidatePath().

Where can you use it?
   * Server Actions
   * Route Handlers
   * Server Components
   * ❌ Not in Client Components

* import { revalidatePath } from "next/cache";
  

# Good to know:
* Server Functions: Updates the UI immediately (if viewing the affected path). Currently, it also causes all previously visited pages to refresh when navigated to again. This behavior is temporary and will be updated in the future to apply only to the specific path.

* Route Handlers: Marks the path for revalidation. The revalidation is done on the next visit to the specified path. This means calling revalidatePath with a dynamic route segment will not immediately trigger many revalidations at once. The invalidation only happens when the path is next visited.
 
 //////////////////////
 ```js
 await db.execute(
  `INSERT INTO hospital (name, city, state, department, established_year)
   VALUES (?, ?, ?, ?, ?)`,
  [name, city, state, department, established_year]
);
```
```js
* [name, city, state, department, established_year]
```
 * Above line statement we use (?,?,?,?) means
 
 * “We use ? placeholders to prevent SQL injection and safely pass user data into queries.”

 * ✅ What problem does this solve?
     1️⃣ Prevents SQL Injection (Security)
     2️⃣ Automatically escapes data
     3️⃣ Improves performance

# Client Side Revalidate in Nextjs.

useRouter() is the client-side navigation hook used to navigate between pages programmatically in Next.js App Router.

Think: navigate without page reload

* “useRouter() enables client-side navigation in Next.js App Router.”

* redirect() for server redirects
* seRouter() for client navigation

for client side
```js
  * import { useRouter } from "next/navigation";
    * const router = useRouter();
    * router.refresh();
```
for client side
```js
  * import { revalidatePath } from "next/cache";
   * revalidatePath("/hospitals");    
```
```js
"use client";
import { useRouter } from "next/navigation";
```

#  On-Demand Revalidation

* On client side use this and whwn we use server side then use revalidatePath()

On-demand revalidation in Next.js 15 is a powerful caching feature that allows you to manually clear and refresh cached data or pages in response to specific events, rather than waiting for automatic time-based revalidation. This gives you precise control over when your application's cache is updated, ensuring users see fresh content immediately when changes occur.

```js
export async function createPost(){
  //post route cache
  revalidatePath('/posts')
}
```

# Framer Motion: Get started with Motion for React

* Framer Motion is a powerful animation library for React that makes it easy to create smooth, modern UI animations.

* Motion for React is a React animation library for building smooth, production-grade UI animations. You can start with simple prop-based animations before growing to layout, gesture and scroll animations.

Used by:
    * Startups
    * SaaS dashboards
    * Landing pages
    * Portfolio websites
    
```js
 npm install motion   
 ```
Features can now be imported via "motion/react":
```js
import { motion } from "motion/react"
```

# 🔥 GSAP Animations in Next.js & ReactJS 🚀

* GSAP works only in client components, so in Next.js make sure to add "use client" at the very top of your file.

* GSAP ek powerful JavaScript animation library hai jo web pages par super smooth animations banane ke kaam aati hai.

* GSAP is a high-performance JavaScript animation library used for creating smooth, complex web animations.”

Use hoti hai:
   * Landing pages
   * Scroll animations
   * Hero section effects
   * Text animations
   * SVG animations

Big companies use karti hain:
👉 Google, Apple, Nike, Adobe

# ⚛️ GSAP in React

```js
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Box() {
  const boxRef = useRef();

  useEffect(() => {
    gsap.from(boxRef.current, {
      opacity: 0,
      y: 100,
      duration: 1
    });
  }, []);

  return <div ref={boxRef} className="box"></div>;
}
```
# useRef
useRef React ka ek special hook hai jo mostly 3 kaamon ke liye use hota hai:

* 👉 DOM element ko directly access karne ke liye
* 👉 Value store karne ke liye bina re-render ke
* 👉 Previous value ya timer store karne ke liye

* useRef ek box jaisa hota hai jisme hum koi bhi value rakh sakte hain —
* aur jab value change hoti hai, component re-render nahi hota.

```js
const myRef = useRef(initialValue);
```

# 1️⃣ DOM Element ko access karne ke liye
Jaise agar hume input pe focus karna ho:
```js
import { useRef } from "react";

function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();   // direct DOM access
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}

```
# 2️⃣ Value store karna bina re-render ke

```js
const countRef = useRef(0);

function increment() {
  countRef.current++;
  console.log(countRef.current); // update but no re-render
}

```

# 3️⃣ Previous value store karne ke liye

```js
const prevCount = useRef();

useEffect(() => {
  prevCount.current = count;
}, [count]);

```

# SHADCN UI in Next.js 
* shadcn/ui ek modern UI component system hai jo Tailwind CSS ke upar bana hai.
* Isme ready-made, fully customizable components milte hain — bina heavy UI library install kiye.

* It’s not a component library. It’s copy-paste components into your project.


“shadcn/ui is a customizable component system built on Tailwind and Radix for Next.js apps.”

* Shaden Ul is not a traditional installable library or framework like Material Ul or Bootstrap. Instead, it is a unique approach to Ul development that provides a collection of beautifully designed, accessible React components-and a code distribution platform-that lets you copy the source code for individual components directly into your own project, rather than importing from an npm package.

You can create a components.json file in your project by running the following command:

# 1️⃣ Setup in Next.js
Step 1 — Install Tailwind (if not installed)
```js
npx create-next-app@latest my-app --tailwind
cd my-app
```
Step 2 — Initialize shadcn
```js
npx shadcn@latest init
```
Step 3 — Add components
```js
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog

```
# 2️⃣ Using shadcn Components
* Button
```js
import { Button } from "@/components/ui/button";

<Button>Click Me</Button>

```

# this is the quary of sql on mysql workbench
```js

create database hospital_db;
use hospital_db;


CREATE TABLE doctors (
    doctor_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender ENUM('Male', 'Female', 'Other') NOT NULL,
    specialization VARCHAR(100) NOT NULL,
    experience_years INT CHECK (experience_years >= 0),
    license_number VARCHAR(50) UNIQUE NOT NULL,
    joining_date DATE NOT NULL,
    date_of_birth DATE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15) NOT NULL,
    address TEXT,
    city VARCHAR(50),
    state VARCHAR(50),
    postal_code VARCHAR(10),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


INSERT INTO doctors (
    doctor_id, first_name, last_name, gender, specialization, experience_years,
    license_number, joining_date, date_of_birth,
    email, phone, address, city, state, postal_code
) VALUES
(1,'Rahul','Sharma','Male','Cardiologist',10,'LIC1001','2018-06-15','1985-03-22','rahul.sharma1@gmail.com','9000000001','Street 1','Delhi','Delhi','110001'),
(2,'Anita','Verma','Female','Dermatologist',7,'LIC1002','2020-01-10','1990-07-12','anita.verma@gmail.com','9000000002','Street 2','Mumbai','Maharashtra','400001'),
(3,'Amit','Kumar','Male','Neurologist',12,'LIC1003','2016-03-20','1983-01-10','amit.kumar@gmail.com','9000000003','Street 3','Patna','Bihar','800001'),
(4,'Priya','Singh','Female','Gynecologist',9,'LIC1004','2019-09-05','1988-11-25','priya.singh@gmail.com','9000000004','Street 4','Lucknow','UP','226001'),
(5,'Suresh','Mehta','Male','Orthopedic',15,'LIC1005','2014-02-18','1979-05-30','suresh.mehta@gmail.com','9000000005','Street 5','Ahmedabad','Gujarat','380001'),
(6,'Neha','Gupta','Female','Pediatrician',6,'LIC1006','2021-04-01','1992-08-14','neha.gupta@gmail.com','9000000006','Street 6','Jaipur','Rajasthan','302001'),
(7,'Vikas','Yadav','Male','ENT',8,'LIC1007','2019-01-12','1989-12-09','vikas.yadav@gmail.com','9000000007','Street 7','Gurgaon','Haryana','122001'),
(8,'Pooja','Malhotra','Female','Psychiatrist',11,'LIC1008','2017-07-21','1986-04-03','pooja.malhotra@gmail.com','9000000008','Street 8','Chandigarh','Chandigarh','160001'),
(9,'Rohit','Bansal','Male','General Physician',5,'LIC1009','2022-06-10','1994-02-18','rohit.bansal@gmail.com','9000000009','Street 9','Indore','MP','452001'),
(10,'Sneha','Iyer','Female','Endocrinologist',13,'LIC1010','2015-08-19','1982-06-06','sneha.iyer@gmail.com','9000000010','Street 10','Chennai','Tamil Nadu','600001'),

(11,'Arjun','Patel','Male','Urologist',14,'LIC1011','2014-11-03','1981-09-12','arjun.patel@gmail.com','9000000011','Street 11','Surat','Gujarat','395003'),
(12,'Kavita','Joshi','Female','Radiologist',9,'LIC1012','2018-02-26','1989-10-15','kavita.joshi@gmail.com','9000000012','Street 12','Pune','Maharashtra','411001'),
(13,'Manish','Agarwal','Male','Oncologist',16,'LIC1013','2013-05-14','1978-12-02','manish.agarwal@gmail.com','9000000013','Street 13','Noida','UP','201301'),
(14,'Ritu','Kapoor','Female','Pathologist',7,'LIC1014','2020-03-08','1991-01-29','ritu.kapoor@gmail.com','9000000014','Street 14','Amritsar','Punjab','143001'),
(15,'Deepak','Chauhan','Male','Nephrologist',11,'LIC1015','2017-09-30','1986-07-17','deepak.chauhan@gmail.com','9000000015','Street 15','Dehradun','Uttarakhand','248001'),

(16,'Sunita','Rao','Female','Anesthesiologist',18,'LIC1016','2012-01-05','1976-05-21','sunita.rao@gmail.com','9000000016','Street 16','Bangalore','Karnataka','560001'),
(17,'Kunal','Malik','Male','Pulmonologist',10,'LIC1017','2018-04-18','1985-11-11','kunal.malik@gmail.com','9000000017','Street 17','Faridabad','Haryana','121001'),
(18,'Ayesha','Khan','Female','Ophthalmologist',8,'LIC1018','2019-10-01','1990-03-09','ayesha.khan@gmail.com','9000000018','Street 18','Bhopal','MP','462001'),
(19,'Nitin','Saxena','Male','Gastroenterologist',14,'LIC1019','2015-06-06','1981-08-27','nitin.saxena@gmail.com','9000000019','Street 19','Kanpur','UP','208001'),
(20,'Meenal','Arora','Female','Nutritionist',6,'LIC1020','2021-07-14','1993-02-04','meenal.arora@gmail.com','9000000020','Street 20','Panipat','Haryana','132103'),

(21,'Harsh','Jain','Male','Dentist',4,'LIC1021','2023-01-10','1996-06-19','harsh.jain@gmail.com','9000000021','Street 21','Udaipur','Rajasthan','313001'),
(22,'Shalini','Mishra','Female','Physiotherapist',7,'LIC1022','2020-09-09','1991-12-12','shalini.mishra@gmail.com','9000000022','Street 22','Gwalior','MP','474001'),
(23,'Akash','Roy','Male','Neurosurgeon',17,'LIC1023','2012-12-20','1977-04-28','akash.roy@gmail.com','9000000023','Street 23','Kolkata','WB','700001'),
(24,'Divya','Nair','Female','Ayurvedic',9,'LIC1024','2018-05-16','1988-10-08','divya.nair@gmail.com','9000000024','Street 24','Kochi','Kerala','682001'),
(25,'Pranav','Kulkarni','Male','Homeopathy',5,'LIC1025','2022-03-03','1994-09-23','pranav.k@gmail.com','9000000025','Street 25','Nashik','Maharashtra','422001'),

(26,'Ishita','Sen','Female','Psychologist',8,'LIC1026','2019-08-22','1990-01-14','ishita.sen@gmail.com','9000000026','Street 26','Siliguri','WB','734001'),
(27,'Varun','Khanna','Male','Orthopedic',12,'LIC1027','2016-10-11','1983-03-05','varun.khanna@gmail.com','9000000027','Street 27','Ludhiana','Punjab','141001'),
(28,'Rina','Paul','Female','General Physician',10,'LIC1028','2017-04-07','1986-07-30','rina.paul@gmail.com','9000000028','Street 28','Howrah','WB','711101'),
(29,'Sanjay','Tripathi','Male','Cardiologist',18,'LIC1029','2011-02-02','1975-11-09','sanjay.tripathi@gmail.com','9000000029','Street 29','Prayagraj','UP','211001'),
(30,'Nandita','Bose','Female','Oncologist',13,'LIC1030','2015-12-12','1982-02-17','nandita.bose@gmail.com','9000000030','Street 30','Durgapur','WB','713201');



DROP TABLE IF EXISTS doctors;
TRUNCATE TABLE doctors;
DELETE FROM doctors;
DROP DATABASE hospital_db;

SELECT * FROM doctors;
SHOW TABLES;

-- create a contact_form table for storing contact form submission.

CREATE TABLE contact_form (
id INT AUTO_INCREMENT PRIMARY KEY, 
full_name VARCHAR(100) NOT NULL, 
email VARCHAR(150) NOT NULL, 
message TEXT NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

select * from contact_form;

CREATE TABLE hospital(
   hospital_id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(100) NOT NULL,
   city VARCHAR(50) NOT NULL,
   state VARCHAR(50) NOT NULL,
   department VARCHAR(50) NOT NULL,
   established_year YEAR  NOT NULL
);

INSERT INTO hospital (name, city, state, department, established_year) 
VALUES
('apollo hospitals','Chennai','Tamil Nadu','Cardiology',1983);
INSERT INTO hospital (name, city, state, department, established_year) 
VALUES
('Rajendra hospital','Chennai','Tamil Nadu','Cardiology',1983);
INSERT INTO hospital (name, city, state, department, established_year) 
VALUES
('Sharma hospitals','Chennai','Tamil Nadu','Cardiology',1983);
INSERT INTO hospital (name, city, state, department, established_year) 
VALUES
('Muskan hospitals','varansi','Uttar Pradesh','Physiology',1983);


select * from hospital;
table hospital;
```

# Modal in Next.js & React🔥Create a Dialog Component with Shadcn UI

 # GSAP animations in Next.js with React hooks! 🚀 

 
* GSAP works only in client components, so in Next.js, make sure to add "usr client" at the very top of your file.




# Modal in Next.js & React🔥Create a Dialog Component with Shadcn UI

* Shadcn UI is a modern UI component system for Next.js + React + Tailwind CSS that gives you copy-paste, fully customizable components instead of a locked component library.

# It’s built on top of:

* ⚙️ Radix UI → accessibility & behavior
* 🎨 Tailwind CSS → styling
* 🧩 Class Variance Authority (CVA) → variants
* 🧠 React + TypeScript → logic

# 🔹 What makes Shadcn UI different?

Unlike MUI or AntD, Shadcn UI:
* ✅ You own the code
* ✅ No heavy package bundle
* ✅ Fully customizable
* ✅ Accessible by default
* ✅ Perfect for Next.js (App Router)
* ✅ Tailwind-first design

* 🔹 Components Shadcn Provides

Button,Dialog,Sheet,Alert Dialog,Dropdown Menu,Tooltip,Popover,Tabs,Accordion,Toast (Sonner),Form,Table,Input,Select,Calendar,Card

# 🎯 Dialog

A Dialog is a centered modal window that overlays the entire screen and requires the user’s immediate attention before they can continue interacting with the main interface.

* Definition: A centered modal window that overlays the entire screen and demands the user's attention.

# 💡 Common Use Cases

* ✅ Confirmation prompts — “Are you sure?”
* 📝 Forms — login, signup, feedback
* ⚠️ Important alerts — errors, warnings, critical info
* 🖼️ Content previews — images, videos, details
* 🧭 Onboarding steps — guided user flows


# 🎯 UX Characteristics

* 🔒 Interruptive — forces the user to focus on the dialog
* 🚫 Blocks background interaction
* 🎯 Designed for important, focused tasks
* ⌨️ Supports keyboard actions (ESC to close, tab navigation)
* 🧠 Encourages a clear decision (Confirm / Cancel)

# installation

```fs
npx shadcn@latest add dialog
```

# Drawer in Next.js 🔥 Shadcn UI Drawer 
“A Drawer is a non-blocking overlay panel that slides in from the edge of the screen, typically used for navigation, filters, or contextual content, especially on mobile devices.”

* Perfect for mobile menus, filters, carts, or side forms.

* Shadcn’s Drawer is powered by Vaul (like a bottom sheet / slide panel).

# Installation
```fs
npx shadcn@latest add drawer
```

# 🔥 Common Use Cases

* ✅ Mobile navigation
* ✅ Filter sidebar
* ✅ Cart panel
* ✅ Settings panel
* ✅ Profile menu
* ✅ Bottom sheets

# ⚠️ Common mistakes

* ❌ Forget "use client"
* ❌ Using Dialog instead of Drawer
* ❌ Putting Drawer in Server Component
* ❌ Not using DrawerTrigger asChild

# Carousel in Next.js 🔥 Build Responsive Image Slider with Shadcn UI

Shadcn’s Carousel is built on Embla Carousel, so it’s smooth, touch-friendly, and works great with Tailwind.

```fs
npx shadcn-ui@latest add carousel
```
* (Installs embla-carousel-react and creates components/ui/carousel.tsx)

* Optional for autoplay:
```fs
npm install embla-carousel-autoplay
```
```fs
plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}

 ```
 You can pass options to the carousel using the opts prop. See the Embla Carousel docs for more information.

 ```fs
        opts={{              // Carousel options
           align: "start",
          loop: true,
          }}
 ```

# Create Side Navbar in Next.js using shadcn Sheet 🚀

 Extends the Dialog component to display content that complements the main content of the screen.

 ```fs
 npx shadcn@latest add sheet
 ```