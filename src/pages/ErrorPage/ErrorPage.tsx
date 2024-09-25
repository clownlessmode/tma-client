import Screen from "@/shared/ui/containers/Screen";
import PrimaryHeading from "@/shared/ui/typography/primary-heading";
import Subtitle from "@/shared/ui/typography/subtitle";
import { Link } from "../../components/Link/Link";
import { CircleAlert } from "lucide-react";
import Lottie from "react-lottie";
import animation from "@/../public/animations/ErrorAnimation.json";
import { Button } from "@/shared/ui/button";
import { useLocation } from "react-router-dom";
const ErrorPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const errorCode = queryParams.get("message");
  const statusCode =
    errorCode && typeof errorCode === "string"
      ? errorCode.match(/\d{3}/)?.[0] || "418"
      : "418";
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Screen className="items-center justify-between max-h-screen h-screen">
      <Subtitle className="text-center opacity-40">
        Код ошибки: {statusCode}
      </Subtitle>
      <div className="flex flex-col items-center">
        <Lottie
          options={defaultOptions}
          height={250}
          width={250}
          isStopped={false}
          isPaused={false}
        />
        <div className="flex flex-col gap-sm max-w-[370px]">
          <PrimaryHeading className="text-center">
            Техническая ошибка
          </PrimaryHeading>
          <Subtitle className="text-center">
            Попробуйте позже или свяжитесь с поддержкой для дополнительной
            информации.
          </Subtitle>
        </div>
      </div>
      <div className="flex flex-col gap-sm w-full items-center ">
        <Link to={"https://t.me/purpletooth"} className="w-full">
          <Button className="w-full gap-xs">
            <CircleAlert />
            Связаться с поддержкой
          </Button>
        </Link>
      </div>
    </Screen>
  );
};

export default ErrorPage;
