import Screen from "@/shared/ui/containers/Screen";
import ScreenHeading from "../../shared/ui/typography/screen-heading";
import Block from "@/shared/ui/containers/Block";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import useUserStore from "@/entities/user/user.store";
import SectionHeading from "@/shared/ui/typography/section-heading";
import Navigation from "@/widgets/Navigation/Navigation";

const ProfilePage = () => {
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
    <>
      <Screen>
        <ScreenHeading>Профиль</ScreenHeading>
        <Block className="items-center">
          <Avatar className="aspect-square h-auto w-[50%]">
            <AvatarImage src={avatar} />
            <AvatarFallback className="bg-secondarybg">
              {fallback}
            </AvatarFallback>
          </Avatar>
          <div className="gap-xs flex flex-col items-center">
            <SectionHeading>{userState?.telegram.username}</SectionHeading>
            <div className="flex flex-row gap-sm">
              <p className="text-accenttext">{team} ©</p>
              <p className="text-subtitletext">{role}</p>
            </div>
          </div>
        </Block>
        <Block className="gap-[0px] bg-button bg-[url('/button-shapes.png')] bg-cover bg-blend-overlay   bg-center text-buttontext">
          <a href="#" className="flex flex-col">
            <p className="font-bold text-[17px] w-full">
              Поделитесь своим мнением
            </p>
            <p className="font-medium text-[15px] opacity-80">
              Ваши отзывы: ключ к улучшению нашего сервиса
            </p>
          </a>
        </Block>
      </Screen>
      <Navigation />
    </>
  );
};

export default ProfilePage;
