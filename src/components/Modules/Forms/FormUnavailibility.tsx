"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export const FormUnavailibility = () => {
  const [showJustification, setShowJustification] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Unavailability submitted");
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Register Unavailability</CardTitle>
        <CardDescription>
          Enter the details for your unavailability period
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input id="startDate" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input id="endDate" type="date" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="hours">Number of Hours</Label>
            <Input
              id="hours"
              type="number"
              min="1"
              step="1"
              placeholder="8"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="justification-toggle"
              checked={showJustification}
              onCheckedChange={setShowJustification}
            />
            <Label htmlFor="justification-toggle">Add Justification</Label>
          </div>
          {showJustification && (
            <div className="space-y-2">
              <Label htmlFor="justification">Justification</Label>
              <Textarea
                id="justification"
                placeholder="Please provide a reason for your unavailability..."
                className="min-h-[100px]"
              />
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Submit Unavailability
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
