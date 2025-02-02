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
  

export default function RSVP() {
    return (
        <div className="mt-8 flex flex-col">
            <Card className="w-1/2 bg-[#2F2F2F]">
                <CardHeader>
                    <CardTitle className="text-white border-0 rounded-md">RSVP</CardTitle>
                    <CardDescription>Please let us know if you can make it!</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full gap-4">
                            <div className="flex flex-col space-y-1.5 text-white border-0 rounded-md">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Your Name"  className="text-black"/>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="Your Email"  className="text-black"/>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Decline</Button>
                    <Button>Accept</Button>
                </CardFooter>
            </Card>
        </div>
    )
}