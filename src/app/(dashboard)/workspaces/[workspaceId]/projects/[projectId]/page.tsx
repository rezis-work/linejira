import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { ProjectIdPageClient } from "./client";

const ProjectIdPage = async () => {
  const user = getCurrent();
  if (!user) redirect("/sign-in");

  return <ProjectIdPageClient />;
};

export default ProjectIdPage;
