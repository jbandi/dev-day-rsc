import { fetchData } from "@/app/api/fetchData";

export function HelloWorld() {
  return (
    <div>
      <div className="flex w-screen flex-col items-center p-5 text-4xl">
        <p>Hello World!</p>
        {/*<p>{data}</p>*/}
      </div>
    </div>
  );
}
