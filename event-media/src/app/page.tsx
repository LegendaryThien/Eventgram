import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import EventCreate from "./_components/event-create";
import RSVP from "./_components/rsvp";
import Comments from "./_components/comment";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <body className="bg-stone-900">
      <div className="m-10 bg-[#2F2F2F] text-white text-sm rounded-md p-5 border-[#3C3C3C] w-[98%] mx-auto">
                <h1 className="text-2xl font-bold">Event Planner</h1>
                
                <br></br>
                <hr className="border-2 rounded-full"></hr>
                <br></br>

                <p className="text-xl font-bold text-[#B7B7B7]">Upcoming Events (3)</p>

                <br></br>
                <hr className="w-25 max-w-xs border-gray-400 border-2 rounded-full"></hr>
                <br></br>

                <div className="mt-5 ml-10 mr-4 rounded-md bg-[#3C3C3C] p-3 text-xs mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-lg font-bold text-[#B7B7B7]">Squid Game</p>
                    <p className="text-sm font-bold text-[#B7B7B7]">RSVP: 0</p>
                  </div>
                  <p className="mb-3 text-base font-bold text-[#B7B7B7]">Hwang In-ho</p>
                  <div className="w-1/2">
                    <p className="text-sm">Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly.</p>
                  </div>
                </div>

                <div className="mt-5 ml-10 mr-4 rounded-md bg-[#3C3C3C] p-3 text-xs mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-lg font-bold text-[#B7B7B7]">Squid Game</p>
                    <p className="text-sm font-bold text-[#B7B7B7]">RSVP: 0</p>
                  </div>
                  <p className="mb-3 text-base font-bold text-[#B7B7B7]">Hwang In-ho</p>
                  <div className="w-1/2">
                    <p className="text-sm">Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly.</p>
                  </div>
                </div>

                <div className="mt-5 ml-10 mr-4 rounded-md bg-[#3C3C3C] p-3 text-xs mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-lg font-bold text-[#B7B7B7]">Squid Game</p>
                    <p className="text-sm font-bold text-[#B7B7B7]">RSVP: 0</p>
                  </div>
                  <p className="mb-3 text-base font-bold text-[#B7B7B7]">Hwang In-ho</p>
                  <div className="w-1/2">
                    <p className="text-sm">Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly.</p>
                  </div>
                </div>
                
      </div>
      <EventCreate></EventCreate>
      <RSVP></RSVP>
      <Comments></Comments>
      </body>
    </HydrateClient>
  );
}
