import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  contacts: defineTable({
    id: v.id("contacts"),
    time: v.number(),
    data: v.object({
      name: v.optional(v.string()),
      phone: v.optional(v.string()),
      email: v.optional(v.string()),
      message: v.optional(v.string()),
    }),
  }),
});
