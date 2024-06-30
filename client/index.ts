import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';
//     👆 **type-only** import
 
// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
      async headers() {
        return {
          Authorization: "Bearer 123123"
        }
      }
    }),
  ],
});


const main = async () => {
  let response = await trpc.createTodo.mutate({
    title: "learn ai",
    description: "learning ai"
  })

  console.log(response)
}

main();

