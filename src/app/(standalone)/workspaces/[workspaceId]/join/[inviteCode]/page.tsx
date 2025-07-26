import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { JoinWorkspaceIdPageClient } from "./client";

async function JoinWorkspaceIdPage() {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <JoinWorkspaceIdPageClient />;
}

export default JoinWorkspaceIdPage;
