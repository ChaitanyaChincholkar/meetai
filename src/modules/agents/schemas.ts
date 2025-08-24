import {z} from "zod";

export const AgentInsertSchema = z.object({
    name: z.string().min(1, {message: "Name is required"}),
    instructions: z.string().min(1, {message: "Instructions are required"}),
    // Add more fields as needed
});
