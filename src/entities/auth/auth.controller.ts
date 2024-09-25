import { useMutation, useQueryClient } from "@tanstack/react-query";
import AuthService from "./auth.service";
import { LoginDto } from "./interfaces/auth.interface";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const loginMutation = useMutation({
    mutationFn: (data: LoginDto) => AuthService.login(data),
    onSuccess: () => queryClient.invalidateQueries(), //["user"],
  });

  return {
    login: loginMutation.mutate,
    isLoginLoading: loginMutation.isPending,
    isLoginError: loginMutation.isError,
    loginError: loginMutation.error,
  };
};
