import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
interface Props {
  name: string;
  image: string;
}
const Project = ({ name, image }: Props) => {
  return (
    <div className="flex flex-row gap-xs min-w-0 flex-1">
      <Avatar className="h-[24px] w-[24px] flex-shrink-0">
        <AvatarImage src={image} />
        <AvatarFallback className="bg-secondarybg text-[10px]">
          {name.slice(0, 2)}
        </AvatarFallback>
      </Avatar>
      <p className="text-[orange] font-bold uppercase truncate">{name}</p>
    </div>
  );
};

export default Project;
