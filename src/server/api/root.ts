import { createTRPCRouter } from "~/server/api/trpc";
import { getCurrentUser } from "./routers/getCurrentUser";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  getCurrentUser: getCurrentUser,
});

// export type definition of API
export type AppRouter = typeof appRouter;
