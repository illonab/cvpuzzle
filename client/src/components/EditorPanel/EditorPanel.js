import "./EditorPanel.scss";
import Download from "../../assets/icon/download.svg";
import { BlockPicker } from "react-color";
import { useState } from "react";

function EditorPanel({ cvId, cv, setCV }) {
  const [displayColorPicker, setdisplayColorPicker] = useState(false);

  const onChangeColorClick = () => {
    setdisplayColorPicker(!displayColorPicker);
  };

  const onCloseColorPicker = () => {
    setdisplayColorPicker(false);
  };

  const onColorChange = (color) => {
    setCV({ ...cv, mainColor: color.hex });
    console.log(color.hex);
  };
  const popover = {
    position: "absolute",
    zIndex: "2",
  };
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  };

  const colors = ["#4685c6", "#425061", "#479099"];
  const onChangeFont = (e) => {
    setCV({ ...cv, mainFont: e.target.value });
  };
  return (
    <section className="editor-panel">
      <select name="font" id="" onChange={onChangeFont}>
        <option value="Montserrat">Montserrat</option>
        <option value="Roboto">Roboto</option>
        <option value="Krub">Krub</option>
        <option value="Ubuntu">Ubuntu</option>
        <option value="Overpass">Overpass</option>
        <option value="Merriweather">Overpass</option>
      </select>
      <div className="editor-panel__color">
        <button className="editor-panel__btn" onClick={onChangeColorClick}>
          Change color
        </button>
        {displayColorPicker && (
          <div style={popover}>
            <div style={cover} onClick={onCloseColorPicker} />
            <BlockPicker
              color={cv.mainColor}
              onChange={onColorChange}
              colors={colors}
            />
          </div>
        )}
      </div>
      <a
        className="editor-panel__download"
        download
        href={`http://localhost:8080/cvs/print/${cvId}`}
      >
        <img className="editor-panel__img" src={Download} alt="Download icon" />
        Download PDF
      </a>
    </section>
  );
}

export default EditorPanel;
