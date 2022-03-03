
# GraphQL Pokedex

Project to implemnet a pokedex with Next.js and GraphQL.

## Tools

- Next.js
- Apollo Server
- SWR
- ChakraUI
- Jest
- graphql-request

## UI Project

- [Figma](https://www.figma.com/file/8CyVossJ6Peqf3SMSiJWB8/Pokedex?node-id=0%3A1)

## Next up!

- (DONE)Fetch data from api route with graphQL
- Mock server request to test components
- Paginate pokemon list
- Create pokemon details screen

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[GraphQL playground](https://www.apollographql.com/docs/apollo-server/v2/testing/graphql-playground/) can be accessed on [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages. We have only one api route in this project. Apollo server is responsible for handling the requests with the resolvers in `graphql/resolvers` folder.




## Learn More

### Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Apollo Server

- [Apollo Server Documentation](https://www.apollographql.com/docs/) - learn about Apollo Server features.

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
