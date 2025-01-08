import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

type PetButtonProps = {
  actionType: "add" | "edit" | "checkout";
  onClick?: () => void;
  children?: React.ReactNode;
};

export const PetButton = ({
  actionType,
  onClick,
  children,
}: PetButtonProps) => {
  if (actionType === "add") {
    return (
      <Button size={"icon"}>
        <PlusIcon width={16} height={16} strokeWidth="1px" stroke="white" />
      </Button>
    );
  }
  if (actionType === "edit") {
    return <Button variant={"secondary"}>{children}</Button>;
  }

  if (actionType === "checkout") {
    return (
      <Button variant={"secondary"} onClick={onClick}>
        {children}
      </Button>
    );
  }
};
