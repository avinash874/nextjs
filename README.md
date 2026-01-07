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
  <!-- working schema -->
  create database hospital_db;
   use hospital_db;

   CREATE TABLE doctors (
    doctor_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    specialization VARCHAR(100),
    phone VARCHAR(15),
    experience INT
);

INSERT INTO doctors (name, specialization, phone, experience) VALUES 
('Dr. Amit Kumar', 'Cardiologist', '9001112201', 10),
('Dr. Neha Jain', 'Dermatologist', '9001112202', 7),
('Dr. Suresh Rao', 'Orthopedic', '9001112203', 12),
('Dr. Rahul Mehta', 'Neurologist', '9001112204', 15),
('Dr. Pooja Sharma', 'Gynecologist', '9001112205', 9),
('Dr. Anil Verma', 'General Physician', '9001112206', 8),
('Dr. Kavita Singh', 'Pediatrician', '9001112207', 6),
('Dr. Ramesh Patel', 'Cardiologist', '9001112208', 14),
('Dr. Sunita Iyer', 'ENT Specialist', '9001112209', 11),
('Dr. Mohit Agarwal', 'Urologist', '9001112210', 13),

('Dr. Nisha Kapoor', 'Psychiatrist', '9001112211', 10),
('Dr. Arjun Malhotra', 'Orthopedic', '9001112212', 7),
('Dr. Seema Joshi', 'Dermatologist', '9001112213', 9),
('Dr. Vikram Singh', 'General Surgeon', '9001112214', 16),
('Dr. Alok Mishra', 'Neurologist', '9001112215', 12),
('Dr. Priya Nair', 'Gynecologist', '9001112216', 8),
('Dr. Deepak Chauhan', 'Pulmonologist', '9001112217', 14),
('Dr. Sneha Kulkarni', 'Pediatrician', '9001112218', 6),
('Dr. Karan Shah', 'Oncologist', '9001112219', 18),
('Dr. Meenal Deshpande', 'Radiologist', '9001112220', 11),

('Dr. Harish Gupta', 'Nephrologist', '9001112221', 13),
('Dr. Ritu Saxena', 'Endocrinologist', '9001112222', 9),
('Dr. Ajay Yadav', 'General Physician', '9001112223', 7),
('Dr. Ananya Roy', 'Psychiatrist', '9001112224', 10),
('Dr. Sanjay Khanna', 'Orthopedic', '9001112225', 15),
('Dr. Pallavi Ghosh', 'ENT Specialist', '9001112226', 8),
('Dr. Nitin Bansal', 'Cardiologist', '9001112227', 17),
('Dr. Shweta Arora', 'Dermatologist', '9001112228', 6),
('Dr. Manish Tiwari', 'Urologist', '9001112229', 12),
('Dr. Radhika Menon', 'Gynecologist', '9001112230', 14),

('Dr. Ashok Rawat', 'General Surgeon', '9001112231', 20),
('Dr. Pankaj Soni', 'Pulmonologist', '9001112232', 9),
('Dr. Isha Banerja', 'Pediatrician', '9001112233', 5),
('Dr. Lokesh Mathur', 'Radiologist', '9001112234', 11),
('Dr. Farhan Ali', 'Neurologist', '9001112235', 16),
('Dr. Reema Chatterjee', 'Endocrinologist', '9001112236', 10),
('Dr. Prakash Kulkarni', 'Nephrologist', '9001112237', 14),
('Dr. Aditi Verma', 'Psychiatrist', '9001112238', 7),
('Dr. Sameer Khan', 'Oncologist', '9001112239', 19),
('Dr. Juhi Bhatia', 'ENT Specialist', '9001112240', 8),

('Dr. Vinod Pillai', 'General Physician', '9001112241', 12),
('Dr. Tanya Oberoi', 'Dermatologist', '9001112242', 9),
('Dr. Rohan Sen', 'Orthopedic', '9001112243', 11),
('Dr. Bhavesh Joshi', 'Cardiologist', '9001112244', 18),
('Dr. Namita Kulkarni', 'Gynecologist', '9001112245', 13),
('Dr. Saurabh Dubey', 'Pulmonologist', '9001112246', 10),
('Dr. Kirti Malhotra', 'Radiologist', '9001112247', 8),
('Dr. Aditya Saxena', 'Urologist', '9001112248', 14),
('Dr. Megha Reddy', 'Pediatrician', '9001112249', 6),
('Dr. Rajiv Mallick', 'General Surgeon', '9001112250', 17);

select * from doctors

* make file db.js inside config and also make file static

<!-- db.js -->
import mysql from "mysql2/promise";

export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Avinash#2004",
    database: "hospital_db",
});

try {
const connection = await db.getConnection();
console.log("Database connection successfully.")
connection.release();
} catch(err){
    console.error("Database connection failed:", err);
    process.exist(1);
}

<!-- static/page.jsx -->

import React from 'react'
import {db} from "../../../consfig/db"

const StaticPage = async () => {
    const [doctors] = await db.execute("select * from doctors");
    console.log(doctors);

  return (
  <>
    <ul>
      {doctors.map((doctor) => (
        <li key={doctor.doctor_id}>{doctor.name}</li>
      ))}
    </ul>
  </>
);
}

export default StaticPage


