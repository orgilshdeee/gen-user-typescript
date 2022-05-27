import { User, selectType } from "../types/type";
interface Props {
  data: User | undefined;
  names: string | undefined;
}

export function HomePageContent(props: Props): any {
  const testArr = [1, 2, 3, 4];
  return (
    <div>
      {testArr.map(() => {
        return <></>;
      })}
    </div>
  );
}
