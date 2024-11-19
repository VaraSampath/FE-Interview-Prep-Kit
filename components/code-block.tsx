import Image from "next/image";

type CodeBlockPageProps = {
  title: string;
  imgUrl: string;
};
const CodeBlock: React.FC<CodeBlockPageProps> = (props) => {
  return (
    <div className="w-full max-w-xl">
      <p>{props.title}</p>
      <div className="relative w-full aspect-video overflow-hidden rounded-md">
        <Image
          src={props.imgUrl}
          alt={props.title}
          fill
        />
      </div>
    </div>
  );
};

export default CodeBlock;
