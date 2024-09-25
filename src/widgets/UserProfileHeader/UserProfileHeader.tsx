import { Link } from "@/components/Link/Link";
import useUserStore from "@/entities/user/user.store";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";

const UserProfileHeader = () => {
  const { userState } = useUserStore();

  const fallback = userState?.telegram?.username?.slice(0, 2) ?? "";
  const team = userState?.meta.team.name ?? "Не присоединен к команде";
  const avatar = userState?.meta.avatar ?? "";

  const role = (() => {
    switch (userState?.meta.role) {
      case "ADMIN":
        return "Администратор";
      case "MEMBER":
        return "Участник";
      case "LEADER":
        return "Лидер";
      default:
        return "";
    }
  })();

  return (
    <Link to={"/profile"} className="flex flex-row gap-sm">
      <Avatar className="h-[50px] w-[50px]">
        <AvatarImage src={avatar} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className="text-accenttext font-medium">{team} ©</p>
        <div className="flex flex-row gap-xs">
          <h3 className="text-text font-bold">
            {userState?.telegram.username}
          </h3>
          <p className="text-hint font-medium">{role}</p>
        </div>
      </div>
    </Link>
  );
};

export default UserProfileHeader;
