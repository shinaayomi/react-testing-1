// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users', ({ request }) => {
    return HttpResponse.json([
      { name: 'Bruce Wayne' },
      { name: 'Clark Kent' },
      { name: 'Princess Diana' },
    ])
  }),
]
