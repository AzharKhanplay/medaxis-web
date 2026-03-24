"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-12 text-center space-y-4">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/15 text-secondary text-2xl font-bold">
          ✓
        </div>
        <h2 className="text-2xl font-bold">Thank you</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Your message has been recorded. Our team will reach out shortly at the email you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required placeholder="Your name" className="bg-input-background" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="org">Organization</Label>
          <Input id="org" name="org" required placeholder="Hospital or clinic" className="bg-input-background" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Work email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@hospital.org"
          className="bg-input-background"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Briefly describe your priorities: demo, pricing, implementation…"
          className="bg-input-background resize-none"
        />
      </div>
      <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 font-semibold px-10">
        Send message
      </Button>
    </form>
  );
}
