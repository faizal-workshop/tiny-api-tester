# Tiny API Tester
<a href="https://opensource.org/license/mit"><img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" height="24" /></a>
<a href="https://pnpm.io/"><img src="https://img.shields.io/badge/Package-PNPM-orange?style=flat-square" height="24" /></a>
<img src="https://img.shields.io/badge/Module-ECMAScript-yellow?style=flat-square" height="24" />

API tester to be used in simple web service development

![image](https://github.com/user-attachments/assets/ce819beb-f0b3-4ae4-b084-553811d83020)

## Features
- Send HTTP request with desired method, parameters, headers, and body
- Editor/previewer for JSON body request and JSON data responses
- Lightweight, no database required

## Stack Used
- [SvelteKit](https://svelte.dev/)
- [Tailwind](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)
- [CodeMirror](https://codemirror.net/)

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
