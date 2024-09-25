"use client";
import { useState, ReactNode, FC } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/shared/ui/drawer";
import { X } from "lucide-react";

import PrimaryHeading from "../typography/primary-heading";
import Subtitle from "../typography/subtitle";

interface Props {
  trigger: ReactNode;
  form: React.ComponentType<{ onSuccessfulSubmit: () => void }>;
  header: {
    colored: string;
    neutral: string;
  };
  description: string | ReactNode;
  id: string;
}

const CustomDrawer: FC<Props> = ({
  trigger,
  form: Form,
  header,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSuccessfulSubmit = () => {
    setIsOpen(false);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col gap-xs">
          <div className="flex justify-between items-center">
            <PrimaryHeading
              colored={header.colored}
              style={{
                fontSize: "30px",
              }}
            >
              {header.neutral}
            </PrimaryHeading>
            <DrawerClose className="flex flex-row-reverse">
              <X className="text-button" />
            </DrawerClose>
          </div>
          <Subtitle>{description}</Subtitle>
        </div>
        <Form onSuccessfulSubmit={onSuccessfulSubmit} />
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
