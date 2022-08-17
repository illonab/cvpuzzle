import "./EditorPanel.scss";
import Download from "../../assets/icon/download.svg";
import { BlockPicker } from "react-color";
import { useState } from "react";
import Font from "../../assets/icon/editor-panel/font.svg";
import Theme from "../../assets/icon/editor-panel/theme.svg";

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
  };

  const colors = [
    "#4685c6",
    "#425061",
    "#479099",
    "#c9483a",
    "#455aa3",
    "#efb252",

    "#1155cc",
    "#00a8e1",
    "#191919",
  ];
  const onChangeFont = (e) => {
    setCV({ ...cv, mainFont: e.target.value });
  };
  return (
    <section className="editor-panel">
      <div className="editor-panel__font">
        <div className="editor-panel__font-container">
          <img className="editor-panel__icon" src={Font} alt="Font icon" />
          <p className="editor-panel__font-label">Font</p>
        </div>
        <select
          className="editor-panel__select-font"
          name="font"
          id=""
          onChange={onChangeFont}
        >
          <option value="Montserrat">Montserrat</option>
          <option value="Roboto">Roboto</option>
          <option value="Krub">Krub</option>
          <option value="Ubuntu">Ubuntu</option>
          <option value="Overpass">Overpass</option>
          <option value="Merriweather">Merriweather</option>
        </select>
      </div>

      <div className="editor-panel__color">
        <img className="editor-panel__color-icon" src={Theme} alt="Font icon" />
        <button
          className="editor-panel__color-btn"
          onClick={onChangeColorClick}
        >
          Change Theme
        </button>
        {displayColorPicker && (
          <div className="editor-panel__color-popover">
            <div
              className="editor-panel__color-cover"
              onClick={onCloseColorPicker}
            />
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
        href={`${process.env.REACT_APP_SERVER_URL}/cvs/print/${cvId}`}
      >
        <img
          className="editor-panel__download-img"
          src={Download}
          alt="Download icon"
        />{" "}
        <p className="editor-panel__download__label"> Download PDF</p>
      </a>
    </section>
  );
}

export default EditorPanel;
