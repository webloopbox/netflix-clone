import { ReactComponent as Number1 } from "../../assets/number1.svg";
import { ReactComponent as Number2 } from "../../assets/number2.svg";
import { ReactComponent as Number3 } from "../../assets/number3.svg";
import { ReactComponent as Number4 } from "../../assets/number4.svg";
import { ReactComponent as Number5 } from "../../assets/number5.svg";
import { ReactComponent as Number6 } from "../../assets/number6.svg";
import { ReactComponent as Number7 } from "../../assets/number7.svg";
import { ReactComponent as Number8 } from "../../assets/number8.svg";
import { ReactComponent as Number9 } from "../../assets/number9.svg";
import { ReactComponent as Number10 } from "../../assets/number10.svg";

interface Props {
  number: number;
}

export const RankingNumber = ({ number }: Props) => {
  switch (number) {
    case 1:
      return <Number1 />;
    case 2:
      return <Number2 />;
    case 3:
      return <Number3 />;
    case 4:
      return <Number4 />;
    case 5:
      return <Number5 />;
    case 6:
      return <Number6 />;
    case 7:
      return <Number7 />;
    case 8:
      return <Number8 />;
    case 9:
      return <Number9 />;
    case 10:
      return <Number10 />;
    default:
      return null;
  }
};
