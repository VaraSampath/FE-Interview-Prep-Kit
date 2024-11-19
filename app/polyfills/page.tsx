import CodeBlock from "@/components/code-block";
import { polyfills } from "@/lib/constants";

const Polyfills = () => {
  return (
    <>
      <h1 className="mb-10 font-bold">Polyfills</h1>
      <div className="flex flex-col gap-10 ">
        {polyfills.map((val) => {
          return (
            <CodeBlock
              title={val.title}
              imgUrl={val.imgUrl}
              key={val.title}
            />
          );
        })}
      </div>
    </>
  );
};

export default Polyfills;
