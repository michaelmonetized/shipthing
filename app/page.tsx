"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  TableRow,
  TableCell,
  TableHeader,
  TableHead,
  TableBody,
} from "@/components/ui/table";

import { Table } from "@/components/ui/table";
import { useState } from "react";
import { contactSchema, contactType } from "@/convex/contacts";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [newContact, setNewContact] = useState<contactType>({
    name: "",
    phone: "",
    email: "",
    message: "",
    page: "Home",
  });

  const [alertParams, setAlertParams] = useState<{
    title: string;
    description: string | React.ReactNode;
    props: React.ComponentProps<typeof Alert>;
  }>({
    title: "",
    description: <></>,
    props: {},
  });

  const getContacts = useQuery(api.contacts.get);
  const contacts = getContacts?.sort(
    (a, b) => b._creationTime - a._creationTime
  );

  const contactList = () => {
    return contacts?.map(
      (contact) =>
        typeof contact._id === "string" && (
          <TableRow key={contact._id}>
            <TableCell>{contact.name}</TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.message}</TableCell>
            <TableCell>{contact._creationTime}</TableCell>
            <TableCell>{contact.page}</TableCell>
            <TableCell>
              <Button
                variant="destructive"
                onClick={() => onDeleteContact(contact._id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        )
    );
  };

  const form = useForm<contactType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      page: "Home",
    },
  });

  const createContact = useMutation(api.contacts.create);
  function onSubmit(contact: contactType) {
    createContact(contact);

    fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(contact),
    });

    setNewContact(contact);

    setAlertParams({
      title: "Success",
      description: `Contact ${newContact.name} added successfully`,
      props: {
        variant: "default",
      },
    });

    // display a shadcn alert with a success message
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);

    form.reset();
  }

  const deleteContact = useMutation(api.contacts.del);

  async function onDeleteContact(id: string) {
    const name = contacts?.find((contact) => contact._id === id)?.name;

    setAlertParams({
      title: "Are you sure?",
      description: (
        <>
          Are you sure you want to delete contact <b>{name}</b>?{" "}
          <Button
            variant="destructive"
            onClick={() => {
              deleteContact({ id });

              setOpen(false);
            }}
          >
            Delete
          </Button>
        </>
      ),
      props: {
        variant: "destructive",
      },
    });
    setOpen(true);
  }

  return (
    <div className="flex flex-col gap-4 items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 items-center">
        {open && (
          <Alert {...alertParams.props}>
            <AlertTitle>{alertParams.title}</AlertTitle>
            <AlertDescription>{alertParams.description}</AlertDescription>
          </Alert>
        )}
        {(contacts?.length || 0) > 0 ? (
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-2xl font-bold">Contacts</h1>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Page</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>{contactList()}</TableBody>
            </Table>
          </div>
        ) : (
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-2xl font-bold">Be the first to contact us!</h1>
          </div>
        )}
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-2xl font-bold">Send Message</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <div className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} placeholder="John Doe" />
                      </FormControl>
                      <FormDescription>
                        Your first and last name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} placeholder="1234567890" />
                      </FormControl>
                      <FormDescription>Your phone number.</FormDescription>
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
                        <Input
                          type="email"
                          {...field}
                          placeholder="john.doe@example.com"
                        />
                      </FormControl>
                      <FormDescription>Your email address.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Hello, I'm interested in your services."
                          rows={2}
                        />
                      </FormControl>
                      <FormDescription>Your message to us.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-end p-4">
                <Button type="submit" className="text-3xl">
                  Send
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <SignedOut>
            <SignIn routing="hash" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button>
            <Link href="/login">Login</Link>
          </Button>
          <Button>
            <Link href="/sentry-example-page">Sentry Example Page</Link>
          </Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
