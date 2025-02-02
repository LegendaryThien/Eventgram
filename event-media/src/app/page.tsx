import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import EventCreate from "./_components/event-create";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <body className="bg-stone-900">
      <div className="m-10 bg-[#2F2F2F] text-white text-sm rounded-md p-5 border-[#3C3C3C] w-[98%] mx-auto">
                <h1 className="text-2xl font-bold">WEBSITE NAME</h1>
                
                <br></br>
                <hr></hr>
                <br></br>
