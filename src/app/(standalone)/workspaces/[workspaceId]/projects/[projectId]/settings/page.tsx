import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { ProjectSettingsPageClient } from "./client";

export default async function ProjectSettingsPage() {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="w-full lg:max-w-xl">
      <ProjectSettingsPageClient />
    </div>
  );
}
