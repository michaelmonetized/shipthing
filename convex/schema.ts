import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  contacts: defineTable({
    name: v.string(),
    phone: v.string(),
    email: v.string(),
    message: v.optional(v.string()),
    page: v.string(),
  })
    .searchIndex("search_contacts", {
      searchField: "name",
      filterFields: ["email", "page"],
    })
    .index("by_name", ["name"])
    .index("by_phone", ["phone"])
    .index("by_email", ["email"])
    .index("by_page", ["page"]),
});
