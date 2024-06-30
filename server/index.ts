import { publicProcedure, router } from './trpc'
import {z} from 'zod'
import { createHTTPServer } from '@trpc/server/adapters/standalone';



const todoInputType = z.object({
    title: z.string(),
    description: z.string()
})

const appRouter = router({
    createTodo: publicProcedure
        .input(todoInputType)
        .mutation(async (opts) => {
            const title = opts.input.title;
            const description = opts.input.description;
            const username = opts.ctx.username;

            console.log(username)

            return ({
                id: "1",
                title
            })
        })
})


export type AppRouter = typeof appRouter


const server = createHTTPServer({
    router: appRouter,
    createContext(opts) {
        let authHeader = opts.req.headers["authorization"];

        // Do jwt verification

        console.log(authHeader);

        return {
            username: "Nithish"
        }
    }
  });
   
server.listen(3000);