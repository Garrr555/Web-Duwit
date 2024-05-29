import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

interface IButton {
  title: string;
  classname: string;
}

export default function Button2({ title, classname }: IButton) {
  return <button className={classname}>{title}</button>;
}
