# Medium Blog

This project is a blog website similar to Medium, built with React for the frontend and Cloudflare Workers for the backend, using TypeScript, Prisma, PostgreSQL, and JWT for authentication.

## Table of Contents

- [Technologies Used](##technologies-used)
- [Features](##features)
- [Getting Started](##getting-started)
  - [Prerequisites](###prerequisites)
  - [Installation](###installation)
  - [Setting Up Environment Variables](###setting-up-environment-variables)
- [Running Locally](###running-locally)
## Technologies Used

- **Frontend**:
  - React
  - Zod (validation library)
  - TypeScript
  - Tailwind (for styling)
  - React Icons
  - React Toastify

- **Backend**:
  - Cloudflare Workers
  - TypeScript
  - Prisma (ORM with connection pooling)
  - PostgreSQL (as the database)
  - JWT (for authentication)

## Features

- User authentication using JWT
- CRUD operations for blog posts
- Real-time updates using Cloudflare Workers
- Validation of Backend types using Zod

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database

### Installation

1. Clone the repository:
```
   git clone https://github.com/Piyush5784/Medium=blog.git
```
2. Navigate to the project directory:
  ```
  cd Frontend
  ```
3.Install dependencies:
   ```
   npm i
   ```
or
   ```
  yarn install
   ```
4.Set up environment variables: <br />
Create a .env file in the root directory with the following environment variables: 
  ```
  DATABASE_URL=your_postgres_database_url
  JWT_SECRET=your_jwt_secret
  ```

### Running Locally

Start the development server:
  ```
  npm run dev
  ```
