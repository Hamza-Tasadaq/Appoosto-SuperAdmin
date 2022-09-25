import { TrashIcon } from "../../icons";

const Trash = ({ classes }) => {
  return (
    <div className={`bg-[#F0E3E7] rounded-lg p-1.5 cursor-pointer ${classes}`}>
      <TrashIcon />
    </div>
  );
};

export default Trash;
