<div align="center">
<img src="./static/favicon.svg" width="80"/>

# Tiny API Tester

**API tester to be used in simple web service development**

<a href="https://opensource.org/license/mit"><img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" height="24" /></a>
<a href="https://pnpm.io/"><img src="https://img.shields.io/badge/Package-PNPM-orange?style=flat-square" height="24" /></a>
<img src="https://img.shields.io/badge/Module-ECMAScript-yellow?style=flat-square" height="24" />
</div>

![Preview](https://github.com/user-attachments/assets/19551284-9a28-4eb6-a2f3-7d27f16c20d9)

## Features
- Send HTTP request with desired method, parameters, headers, and body
- Editor/previewer for JSON body request and JSON data responses
- Lightweight, no database required

## Stack Used
- Monolithic [SvelteKit](https://svelte.dev/)
- [Tailwind](https://tailwindcss.com/) with [daisyUI](https://daisyui.com/)

## Local Preview
1. Clone this repository to your local computer
2. Copy the default environment file and ensure all variables are correctly filled
   ```sh
   cp .env.example .env
   ```
3. Install all required dependencies
   ```sh
   pnpm i
   ```
4. Run the application in development mode
   ```sh
   pnpm run dev
   ```
