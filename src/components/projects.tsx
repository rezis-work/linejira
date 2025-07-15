"use client";
import { useGetProjects } from "@/features/projects/api/use-get-projects";
import { RiAddCircleFill } from "react-icons/ri";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";
import { useCreateProjectModal } from "@/features/projects/hooks/use-create-project-modal";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";

export const Projects = () => {
  // const projectId = null; // TODO: get project id from url
  const workspaceId = useWorkspaceId();
  const pathname = usePathname();
  const { open } = useCreateProjectModal();
  const { data, isLoading } = useGetProjects({ workspaceId });

  if (isLoading) {
    return (
      <>
        <div className="flex items-center justify-center">
          <p className="text-xs uppercase text-neutral-500 mr-2">Projects</p>
          <RiAddCircleFill
            onClick={open}
            className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-xs uppercase text-neutral-500 mr-2">Projects</p>
        <RiAddCircleFill
          onClick={open}
          className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition"
        />
      </div>
    );
  }

  if (data.documents.length === 0) {
    return (
      <>
        <div className="flex items-center justify-center">
          <p className="text-xs uppercase text-neutral-500 mr-2">Projects</p>
          <RiAddCircleFill
            onClick={open}
            className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-sm text-neutral-500">No projects found</p>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        <p className="text-xs uppercase text-neutral-500 mr-2">Projects</p>
        <RiAddCircleFill
          onClick={open}
          className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition"
        />
      </div>
      {data?.documents.map((project) => {
        const href = `/workspaces/${workspaceId}/projects/${project.$id}`;
        const isActive = pathname === href;

        return (
          <Link href={href} key={project.$id}>
            <div
              className={cn(
                "flex items-center gap-2.5 p-2.5 rounded-md hover:opacity-75 transition cursor-pointer text-neutral-500",
                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
              )}
            >
              <ProjectAvatar image={project.imageUrl} name={project.name} />
              <span className="truncate">{project.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
