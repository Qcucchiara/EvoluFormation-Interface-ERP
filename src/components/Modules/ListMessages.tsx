"use client";
import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Calendar, Tag, User } from "lucide-react";

type Message = {
  id: number;
  author: string;
  content: string;
  date: string;
  label: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    author: "Alice",
    content:
      "Hello team! Hope everyone is doing well. Just wanted to check in and see how the project is progressing.",
    date: "2023-05-01",
    label: "General",
  },
  {
    id: 2,
    author: "Bob",
    content:
      "Project update needed. Can everyone please send me their status reports by end of day?",
    date: "2023-05-02",
    label: "Work",
  },
  {
    id: 3,
    author: "Charlie",
    content:
      "Lunch at 1 PM? I'm thinking we could try that new Italian place down the street.",
    date: "2023-05-03",
    label: "Social",
  },
  {
    id: 4,
    author: "David",
    content:
      "New feature deployed. Please test and let me know if you find any issues.",
    date: "2023-05-04",
    label: "Work",
  },
  {
    id: 5,
    author: "Eve",
    content: "Weekend plans? Anyone up for a hike on Saturday morning?",
    date: "2023-05-05",
    label: "Social",
  },
];

export const ListMessages = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  return (
    <div className="flex gap-4">
      {messages.map((message) => (
        <Card key={message.id} className="flex flex-col">
          <CardContent className="flex-grow p-4">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span className="font-semibold">{message.author}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{message.date}</span>
              </div>
            </div>
            <p className="text-sm mb-4">{message.content}</p>
            <div className="flex items-center mt-auto">
              <Tag className="h-4 w-4 mr-1" />
              <span className="text-sm text-muted-foreground">
                {message.label}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
