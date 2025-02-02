"use client"

import * as React from "react"
import { useState } from "react"
 
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
  
// Update the Comment type
type Comment = {
    id: number;
    author: string;
    text: string;
    date: Date;  // Changed from string to Date
}

export default function Comments() {
    const [comments, setComments] = useState<Comment[]>([
        { id: 1, author: "John Doe", text: "Looking forward to it!", date: new Date("2024-03-20") },
        { id: 2, author: "Jane Smith", text: "Can't wait!", date: new Date("2024-03-21") },
    ]);
    const [newComment, setNewComment] = useState<string>("");
    
    const handleAddComment = () => {
        if (!newComment.trim()) return;
        
        const comment: Comment = {
            id: comments.length + 1,
            author: "Guest User", // You can modify this later to use actual user data
            text: newComment,
            date: new Date(),  // Use Date object directly
        };
        
        setComments([...comments, comment]);
        setNewComment(""); // Clear the input after adding
    };

    return (
        <Card className="w-1/5 bg-[#2F2F2F]">
        <div className="mt-8 bg-[#2F2F2F]">
            <h2 className="text-2xl font-bold mb-4 text-white border-0 rounded-md">Comments</h2>
            
            {/* Add comment form */}
            <Card className="mb-4 bg-[#2F2F2F]">
                <CardContent className="pt-6">
                    <div className="flex flex-col space-y-1.5 text-white border-0 rounded-md">
                        <Label htmlFor="newComment">Add a comment</Label>
                        <div className="flex gap-2 ">
                            <Input
                                id="newComment"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Write your comment..."
                                className="w-1/3 text-black"
                            />
                            <Button onClick={handleAddComment}>Post</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Existing comments list */}
            <div className="space-y-4 ">
                {comments.map((comment) => (
                    <Card key={comment.id} className="bg-[#2F2F2F]">
                        <CardHeader>
                            <CardTitle className="text-sm font-medium w-1/3 text-white border-0 rounded-md">{comment.author}</CardTitle>
                            <CardDescription className="text-white border-0 rounded-md">{comment.date.toLocaleDateString()}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-white border-0 rounded-md">{comment.text}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
        </Card>
    );
}