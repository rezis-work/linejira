import { z } from "zod";
import { TaskStatus } from "./types";

export const createTaskSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }),
  status: z.nativeEnum(TaskStatus, { required_error: "Required" }),
  workspaceId: z.string().trim().min(1, { message: "Required" }),
  projectId: z.string().trim().min(1, { message: "Required" }),
  dueDate: z.coerce.date(),
  assigneeId: z.string().trim().min(1, { message: "Required" }),
  description: z.string().trim().optional(),
});
