import { getCurrent } from "@/features/auth/queries";
import { JoinWorkspaceForm } from "@/features/workspaces/components/join-workspace-form";
import { getWorkspaceInfo } from "@/features/workspaces/queries";
import { redirect } from "next/navigation";

interface JoinWorkspaceIdPageProps {
  params: {
    workspaceId: string;
  };
}

async function JoinWorkspaceIdPage({ params }: JoinWorkspaceIdPageProps) {
  const { workspaceId } = params;
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const initialValues = await getWorkspaceInfo({ workspaceId });

  if (!initialValues) redirect("/");

  return (
    <div className="w-full lg:max-w-xl mx-auto">
      <JoinWorkspaceForm initialValues={initialValues} />
    </div>
  );
}

export default JoinWorkspaceIdPage;
