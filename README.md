# Demo Backend Project

A simple Express.js backend project to test deployment on Vercel.

## Project Structure

```bash
demo-backend/
├── index.js
├── package.json
├── vercel.json
└── .gitignore
```

## Deploying to Vercel

1. Create a `vercel.json` file in your project root:

    ```json
    {
    "version": 2,
    "builds": [
        {
        "src": "index.js",
        "use": "@vercel/node"
        }
    ],
    "routes": [
        {
        "src": "/(.*)",
        "dest": "index.js"
        }
    ]
    }
    ```

2. Push your code to GitHub

3. Deploy using Vercel UI:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your GitHub repository
   - Keep the default settings
   - Click "Deploy"

Your API will be live at `https://your-project-name.vercel.app`

## Environment Variables

Create a `.env` file for local development:

```.env
PORT=3000
```

Add the same variables in your Vercel project settings for production.
