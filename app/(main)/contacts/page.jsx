"use client";
import { api } from "@/convex/_generated/api";
import { useConvexQuery } from "@/hooks/use-convex-query";
import React from "react";

function ContactPage() {
  const { data, isLoading } = useConvexQuery(api.contacts.getAllContacts);
  console.log(data);
  return <div>ContactPage</div>;
}

export default ContactPage;
