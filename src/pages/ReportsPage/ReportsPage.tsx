import Screen from "@/shared/ui/containers/Screen";
import ScreenHeading from "../../shared/ui/typography/screen-heading";
import Navigation from "@/widgets/Navigation/Navigation";
import { Button } from "@/shared/ui/button";
import Lottie from "react-lottie";
import animation from "@/../public/animations/NotFoundReportsAnimation.json";
import PrimaryHeading from "@/shared/ui/typography/primary-heading";
import Subtitle from "@/shared/ui/typography/subtitle";
import SectionHeading from "@/shared/ui/typography/section-heading";
import Block from "@/shared/ui/containers/Block";
import Project from "@/entities/project/ui/Project";
import { TestForm } from "../TestPage";
import CustomDrawer from "@/shared/ui/FormGenerator/DrawerForm";

const ReportsPage = () => {
  const reports = [];
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Screen>
        <ScreenHeading>Отчёты</ScreenHeading>
        {reports.length <= 0 && (
          <div className="flex flex-col items-center flex-grow h-full justify-center">
            <Lottie
              options={defaultOptions}
              height={250}
              width={250}
              isStopped={false}
              isPaused={false}
            />
            <div className="flex flex-col gap-sm max-w-[370px]">
              <PrimaryHeading className="text-center">
                Отчёты не найдены
              </PrimaryHeading>
              <Subtitle className="text-center">
                Добавьте свой первый отчёт
              </Subtitle>
            </div>
          </div>
        )}
        {reports.length > 0 && (
          <div className="flex flex-col flex-grow h-full">
            <section>
              <SectionHeading>Последний отчёт</SectionHeading>
              <Block>
                <div className="flex flex-row justify-between items-center w-full">
                  <Project
                    name="Bored Ape Yacht Club Discord"
                    image="https://i.ibb.co/WfcmM6x/9c15d9647b9643dfbc5e522299d13593.png"
                  />
                  <p className="text-subtitletext text-[12px] whitespace-nowrap ml-2 flex-shrink-0">
                    На рассмотрении
                  </p>
                </div>
              </Block>
            </section>
          </div>
        )}
        <div className="flex flex-col gap-sm">
          {reports.length > 0 && (
            <Button variant={"link"} size={"sm"}>
              Отчёт о вайтлисте
            </Button>
          )}
          <CustomDrawer
            form={TestForm}
            trigger={<Button>Добавить отчёт</Button>}
            header={{
              neutral: "Отправьте",
              colored: "отчёт",
            }}
            description="Предоставьте ежедневный отчёт"
            id="unique-id"
          />
        </div>
      </Screen>
      <Navigation />
    </>
  );
};

export default ReportsPage;
