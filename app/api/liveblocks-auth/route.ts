import { auth, currentUser } from "@clerk/nextjs";

import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";

import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const liveblocks = new Liveblocks({
  secret:
    "sk_dev_PQ8e6SCF9QV9R0t6SFSibZe_gx5ZOMwiudiyLl0yZB1Ws248kNrRWnS0Nh8_RcUY",
});

export async function POST(request: Request) {
  const authorization = await auth();
  const user = await currentUser();

  if (!authorization || !user)
    return new Response("Unauthorized", { status: 403 });

        
}
