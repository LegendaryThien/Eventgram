"use client"

import * as React from "react"
import { createClient } from "@supabase/supabase-js"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"

const supabase = createClient(
    'https://mlduwdzcbycrascdgque.supabase.co',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export function printInput(){
    console.log(<Input id="name" placeholder="Name of your project" className="text-black border-0 rounded-md"/>)
}

export default function EventCreate() {
    const [formData, setFormData] = React.useState({
        eventname: "",
        eventhostname: "",
        eventhostemail: "",
        eventdescription: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            if (!formData.eventname || !formData.eventhostname || !formData.eventhostemail || !formData.eventdescription) {
                throw new Error('Please fill in all fields');
            }

            const eventid = crypto.randomUUID(); // Generate unique ID

            const { error } = await supabase
                .from('eventpost')
                .upsert([{
                    eventid: eventid,  // Add the generated ID
                    eventname: formData.eventname,
                    eventdescription: formData.eventdescription,
                    eventhostname: formData.eventhostname,
                    eventhostemail: formData.eventhostemail,
                }]);

            if (error) throw error;

            // Clear form
            setFormData({
                eventname: "",
                eventdescription: "",
                eventhostname: "",
                eventhostemail: "",
            });

            alert('Event created successfully!');

        } catch (error) {
            console.error('Error creating event:', error);
            alert(error instanceof Error ? error.message : 'Failed to create event');
        }
    };

    return (
        <Card className="w-full bg-[#2F2F2F]">
            <CardHeader>
                <CardTitle className="text-white border-0 rounded-md">Create Event</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5 text-white border-0 rounded-md">
                            <Label htmlFor="name">Name</Label>
                            <Input 
                                id="name"
                                value={formData.eventname}
                                onChange={(e) => setFormData({...formData, eventname: e.target.value})}
                                placeholder="Name of Event" 
                                className="text-black border-0 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5 text-white border-0 rounded-md">
                            <Label htmlFor="description">Description</Label>
                            <Input 
                                id="description"
                                value={formData.eventdescription}
                                onChange={(e) => setFormData({...formData, eventdescription: e.target.value})}
                                placeholder="What's your event about?" 
                                className="text-black border-0 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5 text-white border-0 rounded-md">
                            <Label htmlFor="host">Host</Label>
                            <Input 
                                id="name"
                                value={formData.eventhostname}
                                onChange={(e) => setFormData({...formData, eventhostname: e.target.value})}
                                placeholder="Name" 
                                className="text-black border-0 rounded-md"
                            />
                            <Input 
                                id="email"
                                value={formData.eventhostemail}
                                onChange={(e) => setFormData({...formData, eventhostemail: e.target.value})}
                                placeholder="Email" 
                                className="text-black border-0 rounded-md"
                            />
                        </div>
                    </div>
                    <CardFooter className="flex justify-between">
                        <Button type="submit">Create</Button>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    )
}
