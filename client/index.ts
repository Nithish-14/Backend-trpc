import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
      async headers() {
        return {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjgyODVhN2U5NzIwMGU2ODU2YTdlNDIiLCJpYXQiOjE3MTk4Mjk5MzcsImV4cCI6MTcxOTgzMzUzN30.k3M3V1nWBSpeBQUw-3bS5QQDejzXdLgjLNnGh9lr2tQ"
        }
      },
    }),
  ],
});

async function main() {
    // const user = await trpc.user.signup.mutate({
    //     username: "nithish@gmail.com",
    //     password: "!23456"
    // });
    // console.log(user.token);
    
    const todo = await trpc.todo.todoCreate.mutate({description: "adsa", title: "asd"});
    console.log(todo);
}

main();