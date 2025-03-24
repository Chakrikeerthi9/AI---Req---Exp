## Project Overview

# Project Name: 
AI-Powered Requirement Extraction with Credit Management

# Description:
This project is a React-based web application that provides an AI-powered data extraction tool. The application allows users to input requirements, processes the input using an API call, and extracts structured data. The extracted data is displayed in a table format.

# Tech Stack:
Frontend: React, TypeScript, Tailwind CSS, shadcn/ui

State Management: useState

Backend API Call: Axios

Component-Based Architecture

## Key Features:
# User Input Form: 
Users enter their requirements, which are sent for processing.

# Data Extraction via API: 
Sends a POST request to /api for extracting structured information.

# Dynamic Table Rendering: 
Displays extracted results in a table format.

# State Management: 
Uses useState to handle the extracted data dynamically.

# Component Structure: 
Organized with reusable components such as Header, Title, RequirementForm, ResultTable, Payment, and Footer.

# Styling: 
Uses Tailwind CSS for modern UI design and responsiveness.

# Components Overview:
Header: Displays the application header.

# Title: 
Renders the main title of the app.

# RequirementForm:  
Accepts user input and triggers the extraction process.

# ResultTable: 
Displays extracted data dynamically.

# Payment: 
Placeholder for payment-related functionality.

# Footer: 
Contains footer information.

# Workflow:
The user enters a requirement in the form.

On submission, the input is sent to an API endpoint (/api) via Axios.

The response (structured data) is stored in the state (useState).

The ResultTable dynamically renders the extracted data.


## Deploy on Vercel

Check out in Vercel : (https://ai-req-mgouub43u-chakris-projects-a2defa01.vercel.app/)



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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

