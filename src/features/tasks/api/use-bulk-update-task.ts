import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { toast } from "sonner";

type ResponseType = InferResponseType<
  (typeof client.api.tasks)["bulk-update"]["$post"],
  200
>;
type RequestType = InferRequestType<
  (typeof client.api.tasks)["bulk-update"]["$post"]
>;

export const useBulkUpdateTask = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.tasks["bulk-update"]["$post"]({
        json,
      });
      if (!response.ok) {
        throw new Error("Failed to bulk update tasks");
      }
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Tasks bulk updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
    onError: () => toast.error("Failed to update task"),
  });

  return mutation;
};
