"use client";

import { useState } from "react";

export default function EventCreate() {
  const [title, setTitle] = useState("");
  const [host, setHost] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add API call to create event
    const newEvent = {
      title,
      host,
      description,
      rsvpCount: 0,
    };
    
    console.log("New event:", newEvent);
    // Reset form
    setTitle("");
    setHost("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event Title"
          className="w-full p-2 rounded bg-[#3C3C3C] text-white"
          required
        />
      </div>
      <div>
        <input
          type="text"
          value={host}
          onChange={(e) => setHost(e.target.value)}
          placeholder="Host Name"
          className="w-full p-2 rounded bg-[#3C3C3C] text-white"
          required
        />
      </div>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Event Description"
          className="w-full p-2 rounded bg-[#3C3C3C] text-white"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Create Event
      </button>
    </form>
  );
}
