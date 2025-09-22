# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.

## TESTING

test(name, fn, timeout)

- the first argument is the name of the test used to identify the test
- The second argument is a function that contains the expextations to test / code for the test
- The third argument is timeout which is an optional argument for specifying how long to wait before aborting the test. The default timeout value is 5000ms(5 seconds).
  TO FILTER
- test.only(name, fn, timeout)
- test.skip(name, fn, timeout)

describe(name, fn)

- The first argument is the group name
- The second argument is a function that contains the expectations to test

  TO FILTER

- describe.only(name, fn)
- describe.skip(name, fn)
  it(name, fn, timeout)
  fit(name, fn, timeout): To filter only the tests
  xit(name, fn, timeout): To filter exclude the tests

- Filename Conventions are:
- Files with _.test.js, _.test.tsx, _.spec.js,_.spec.tsx suffix
- Files with .js or .tsx suffix in **tests**(double underscore tests) folders.
  Recommendation is to always put your tests next to the code they are testing so that reative imports are shorter.

When Element is not present in the DOM, we use queryBy queryAllBy

MANUAL QUERIES
RQL Queries

- getBy & getAllBy
- queryBy & queryAllBy
- findBy & findAllBy

Manual queries - you can use the regular querySelector DOM API to find elements

const {contianer} = render(<MyComponent/>)

const foo = container.querySelector('[data-foo="bar"]')

### fireEvent vs user-event

fireEvent is a method from RTL (React Testing Library) which is used to dispatch DOM events

user-event simulates full interactions, which may fire multiple events and do additional checks along the way

For example, we can dispatch the change event on an input field using fireEvent.
When a user type into a text box, the element has to be focused, and then keyboard and input events are fired and the selection and value on the element are manipulated as they type

user-event allows you to describe a user/full interaction instead of a concrete event. it adds visibility and intractability checks along the way and manipulates the DOM just like a user interaction in the browser would. It factors in that the browser e.g. wouldn't let a click a hidden element or type in a disabled text box

npx husky-init && npm i

<!-- Husky to run test using pre-push and push to remote -->

npx husky add .husky/pre-push "npm test -- --watchAll=false"
