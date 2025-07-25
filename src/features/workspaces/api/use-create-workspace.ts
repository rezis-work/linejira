import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type ResponseType = InferResponseType<(typeof client.api.workspaces)["$post"]>;
type RequestType = InferRequestType<(typeof client.api.workspaces)["$post"]>;

export const useCreateWorkspace = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ form }) => {
      const response = await client.api.workspaces["$post"]({ form });
      if (!response.ok) {
        throw new Error("Failed to create workspace");
      }
      return await response.json();
    },
    onSuccess: ({ data: workspace }) => {
      toast.success("Workspace created successfully");
      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
      router.push(`/workspaces/${workspace.$id}`);
    },
    onError: (error) => toast.error(error.message),
  });

  return mutation;
};
