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
        <div className="mt-8 flex flex-col items-center max-w-2xl mx-auto">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>RSVP</CardTitle>
                    <CardDescription>Please let us know if you can make it!</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Your Name" />
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="Your Email" />
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