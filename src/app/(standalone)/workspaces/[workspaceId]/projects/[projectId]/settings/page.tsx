import { getCurrent } from "@/features/auth/queries";
import { getProject } from "@/features/projects/queries";
import { EditProjectForm } from "@/features/projects/components/edit-project-form";
import { redirect } from "next/navigation";

interface ProjectSettingsPageProps {
  params: {
    projectId: string;
  };
}

export default async function ProjectSettingsPage({
  params,
}: ProjectSettingsPageProps) {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }

  const initialValues = await getProject({ projectId: params.projectId });

  if (!initialValues) {
    throw new Error("Project not found");
  }

  return (
    <div className="w-full lg:max-w-xl">
      <EditProjectForm initialValues={initialValues} />
    </div>
  );
}
