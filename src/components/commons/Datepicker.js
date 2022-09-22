
import DatePicker  from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Datepicker = ({ ...rest }) => {
  return <DatePicker {...rest} className="outline-none w-full placeholder-[#31363A]" />;
};

export default Datepicker;
