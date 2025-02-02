import Link from "next/link";
import { createClient } from '@supabase/supabase-js';

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import EventCreate from "./_components/event-create";
import Image from 'next/image';
import Counter from "./_components/counter";


type Event = {
  title: string;
  rsvpCount: number;
  host: string;
  description: string;
}

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data: events = [], error } = await supabase
    .from('eventpost')
    .select()
    .then(({ data, error }) => ({
      data: data?.map(event => ({
        title: event.eventname,
        rsvpCount: event.rsvpCount,
        host: event.eventhostname,
        description: event.eventdescription
      })) ?? [],
      error
    }));

  if (error) {
    console.error('Error fetching events:', error);
    return <div>Error loading events</div>;
  }

  return (
    <HydrateClient>
      <body className="bg-stone-900">
        <div className="m-10 bg-[#2F2F2F] text-white text-sm rounded-md p-5 border-[#3C3C3C] w-[98%] mx-auto">
          <h1 className="text-2xl font-bold">Event Planner</h1>
          
          <br></br>
          <hr className="border-2 rounded-full"></hr>
          <br></br>

          <p className="text-xl font-bold text-[#B7B7B7]">Upcoming Events ({events.length})</p>

          <br></br>
          <hr className="w-25 max-w-xs border-gray-400 border-2 rounded-full"></hr>
          <br></br>

          {events.map((event, index) => (
            <div key={index} className="mt-5 ml-10 mr-4 rounded-md bg-[#3C3C3C] p-3 text-xs mb-6">
              <div className="flex justify-between items-center mb-2">
                <p className="text-lg font-bold text-[#B7B7B7]">{event.title}</p>
                <Counter></Counter>
              </div>
              <p className="mb-3 text-base font-bold text-[#B7B7B7]">{event.host}</p>
              <div className="w-1/2">
                <p className="text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </body>
      <EventCreate />
    </HydrateClient>
  );
}

