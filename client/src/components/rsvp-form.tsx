import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { insertRsvpSchema, type InsertRsvp } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { PartyPopper, Cake } from "lucide-react";

export default function RsvpForm() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [showForm, setShowForm] = useState<boolean | null>(null);

  const form = useForm<InsertRsvp>({
    resolver: zodResolver(insertRsvpSchema),
    defaultValues: {
      name: "",
      email: "",
      guestCount: 1,
      attending: true,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: InsertRsvp) => {
      await apiRequest("POST", "/api/rsvp", data);
    },
    onSuccess: () => {
      if (form.getValues("attending")) {
        navigate("/thank-you");
      }
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: String(error),
        variant: "destructive",
      });
    },
  });

  const handleDecline = () => {
    mutate({
      name: "Guest",
      email: "declined@example.com",
      guestCount: 1,
      attending: false,
    });
    toast({
      title: "Response Recorded",
      description: "Sorry you can't make it! We'll miss you! 😢",
    });
    setShowForm(false);
  };

  if (showForm === null) {
    return (
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2">
            <Cake className="h-6 w-6" />
            Will you join our celebration? 🎉
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Button 
              onClick={() => setShowForm(true)}
              className="flex-1 bg-primary"
            >
              Accept 🥳
            </Button>
            <Button 
              onClick={handleDecline}
              variant="outline" 
              className="flex-1"
            >
              Decline 😢
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!showForm) {
    return null;
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-center gap-2">
          <PartyPopper className="h-6 w-6" />
          RSVP Details 🎈
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => mutate({ ...data, attending: true }))} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="guestCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Guests</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      max={10}
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Submitting..." : "Submit RSVP 🎊"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}