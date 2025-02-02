
import * as React from "react"
 
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

export default function EventCreate() {
    return (
<Card className="w-[350px] bg-[#2F2F2F]">
      <CardHeader>
        <CardTitle className="text-white border-0 rounded-md">Create Event</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 text-white border-0 rounded-md">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5 text-white border-0 rounded-md">
              <Label htmlFor="framework">Start Date</Label>
              <Input id="date" placeholder="Start Date"></Input>
            </div>
            <div className="flex flex-col space-y-1.5 text-white border-0 rounded-md">
              <Label htmlFor="starttime">Start Time</Label>
              <Input id="time" placeholder="Start Time"></Input>
            </div>
            <div className="flex flex-col space-y-1.5 text-white border-0 rounded-md">
              <Label htmlFor="host">Host</Label>
              <Input id="name" placeholder="Name"></Input>
              <Input id="Email" placeholder="Email"></Input>
            </div>
            <div className="flex flex-col space-y-1.5 text-white border-0 rounded-md">
              <Label htmlFor="description">Description</Label>
              <Input id="description" placeholder="What's your event about?"></Input>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Create</Button>
      </CardFooter>
    </Card>
  )
}
