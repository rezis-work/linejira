"use client";
import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useJoinWorkspace } from "../api/use-join-workspace";
import { useInviteCode } from "../hooks/use-invite-code";
import { useWorkspaceId } from "../hooks/use-workspace-id";
import { Loader } from "lucide-react";

interface JoinWorkspaceFormProps {
  initialValues: {
    name: string;
  };
}

export const JoinWorkspaceForm = ({
  initialValues,
}: JoinWorkspaceFormProps) => {
  const inviteCode = useInviteCode();
  const workspaceId = useWorkspaceId();
  const { mutate: joinWorkspace, isPending } = useJoinWorkspace();

  const onSubmit = () => {
    console.log(inviteCode, workspaceId);
    joinWorkspace({
      param: { workspaceId },
      json: { code: inviteCode },
    });
  };

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="p-7">
        <CardTitle className="text-xl font-bold">Join Workspace</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          You&apos;ve been invited to join <strong>{initialValues.name}</strong>{" "}
          workspace
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
          <Button
            variant={"secondary"}
            type="button"
            asChild
            className="w-full lg:w-fit"
            size={"lg"}
            disabled={isPending}
          >
            <Link href="/">Cancel</Link>
          </Button>
          <Button
            size={"lg"}
            className="w-full lg:w-fit"
            type="button"
            onClick={onSubmit}
            disabled={isPending}
          >
            {isPending ? (
              <Loader className="w-4 h-4 animate-spin" />
            ) : (
              "Join Workspace"
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
