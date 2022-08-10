import "./Responsibilities.scss";
import ResponsibilityItem from "../ResponsibilityItem/ResponsibilityItem";
import Add from "../../../assets/icon/resume/add.svg";

function Responsibilities({ responsibilities, onChange }) {
  const onChangeResponsibilities = (index, responsibility) => {
    const changedResponsibilities = [...responsibilities];
    changedResponsibilities[index] = responsibility;
    onChange(changedResponsibilities);
  };
  const addNewResponsibilities = () => {
    const changedResponsibilities = [...responsibilities];
    changedResponsibilities.push("Your responsibility");
    onChange(changedResponsibilities);
  };

  const subtractResponsibilities = (index) => {
    const changedResponsibilities = [...responsibilities];
    changedResponsibilities.splice(index, 1);
    onChange(changedResponsibilities);
  };
  return (
    <div className="responsibilities">
      <p className="responsibilities__title">Responsibilities:</p>
      <ul className="responsibilities__list">
        {responsibilities.map((responsibility, index) => {
          return (
            <ResponsibilityItem
              key={index}
              responsibility={responsibility}
              onSubstract={() => {
                subtractResponsibilities(index);
              }}
              onChange={(responsibility) => {
                onChangeResponsibilities(index, responsibility);
              }}
            />
          );
        })}
      </ul>
      <div className="responsibilities__add">
        <img
          className="responsibilities__add-img"
          src={Add}
          alt="add icon"
          onClick={addNewResponsibilities}
        />
      </div>
    </div>
  );
}

export default Responsibilities;
