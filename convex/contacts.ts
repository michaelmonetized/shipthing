import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { z } from "zod";
import { Id } from "./_generated/dataModel";

export const contactObject = {
  name: v.string(),
  phone: v.string(),
  email: v.string(),
  message: v.optional(v.string()),
  page: v.string(),
};

export const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone: z
    .string()
    .min(10, { message: "10 digit phone number is required" })
    .max(10, { message: "10 digit phone number is required" }),
  email: z.string().email({ message: "Invalid email address" }).min(1, {
    message: "Email is required",
  }),
  message: z.string().optional(),
  page: z.string(),
});

export type contactType = z.infer<typeof contactSchema>;

export const create = mutation({
  args: contactObject,

  handler: async (ctx, args) => {
    return await ctx.db.insert("contacts", args);
  },
});

export const get = query({
  args: {},

  handler: async (ctx) => {
    return await ctx.db.query("contacts").collect();
  },
});

export const search = query({
  args: {
    query: v.string(),
  },

  handler: async (ctx, args) => {
    return await ctx.db
      .query("contacts")
      .withSearchIndex("search_contacts", (q) => q.search("name", args.query))
      .collect();
  },
});

export const getBy = query({
  args: {
    field: v.union(
      v.literal("name"),
      v.literal("phone"),
      v.literal("email"),
      v.literal("created"),
      v.literal("page"),
      v.literal("id"),
      v.literal("_creationTime")
    ),
    value: v.string(),
  },

  handler: async (ctx, args) => {
    let result = null;

    switch (args.field) {
      case "name":
        result = await ctx.db
          .query("contacts")
          .withIndex("by_name", (q) => q.eq("name", args.value))
          .first();
        break;
      case "phone":
        result = await ctx.db
          .query("contacts")
          .withIndex("by_phone", (q) => q.eq("phone", args.value))
          .first();
        break;
      case "email":
        result = await ctx.db
          .query("contacts")
          .withIndex("by_email", (q) => q.eq("email", args.value))
          .first();
        break;
      case "created":
        result = await ctx.db
          .query("contacts")
          .filter((q) => q.eq(q.field("_creationTime"), parseInt(args.value)))
          .collect();
        break;
      case "page":
        result = await ctx.db
          .query("contacts")
          .withIndex("by_page", (q) => q.eq("page", args.value))
          .first();
        break;
      case "id":
        result = await ctx.db.get(args.value as Id<"contacts">);
        break;
    }

    return result;
  },
});

export const edit = mutation({
  args: { ...contactObject, id: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id as Id<"contacts">, args);
  },
});

export const del = mutation({
  args: { id: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id as Id<"contacts">);
  },
});
