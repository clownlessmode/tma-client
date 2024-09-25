import { useEffect } from "react";
import { useLogin } from "@/entities/auth/auth.controller";
import LoadingSpinner from "@/shared/ui/loading-spinner";
import { useLocation, useNavigate } from "react-router-dom";
import useUserStore from "@/entities/user/user.store";

const TelegramAuth = () => {
  const { login } = useLogin();
  const { setUserState } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  useEffect(() => {
    if (token) {
      login(
        { id: token },
        {
          onSuccess: (data) => {
            setUserState(data.user);
            navigate(`/admin`);
          },
          onError: (error) => {
            console.log(error);
            navigate(`/error?message=${encodeURIComponent(error.message)}`);
          },
        }
      );
    }
  }, [token, login]);

  if (!token) {
    navigate(`/error?message=400`);
  }

  return (
    <div className="flex items-center justify-center flex-grow h-screen">
      <LoadingSpinner />
    </div>
  );
};

export default TelegramAuth;
