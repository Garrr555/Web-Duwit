import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

interface IButton {
  title: string;
  classname: string;
}

export default function Button({ title, classname}: IButton) {
  return (
    <button className={classname}>
        <FontAwesomeIcon icon={faBagShopping} className="w-[30px] mr-3"/>
      {title}
    </button>
  );
}
