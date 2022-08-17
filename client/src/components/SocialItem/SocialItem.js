import Linkedin from "../../assets/icon/resume/socials/linkedin.svg";
import Github from "../../assets/icon/resume/socials/github.svg";
import Stackoverflow from "../../assets/icon/resume/socials/stackoverflow.svg";
import Behance from "../../assets/icon/resume/socials/behance.svg";
import Empty from "../../assets/icon/resume/socials/empty.svg";
import { useEffect, useRef, useState } from "react";
import "./SocialItem.scss";
import Subtract from "../../assets/icon/resume/subtract.svg";
import filter from "../../filter.js";

const socialIcons = {
  "https://www.linkedin.com": Linkedin,
  "https://github.com": Github,
  "https://stackoverflow.com": Stackoverflow,
  "https://www.behance.net": Behance,
};

const socialMedia = {
  "https://www.linkedin.com": "Linkedin",
  "https://github.com": "GitHub",
  "https://stackoverflow.com/": "StackOverflow",
  "https://www.behance.net/": "Behance",
};
const getIconByUrl = (url) => {
  for (let prefix in socialIcons) {
    if (url.startsWith(prefix)) {
      return socialIcons[prefix];
    }
  }
  return Empty;
};
const changeLinkToWord = (url) => {
  if (url === "") {
    return "Place your social here";
  }
  for (let word in socialMedia) {
    if (url.startsWith(word)) {
      return socialMedia[word];
    }
  }
  return url;
};

function SocialItem({ url, onChange, onSubstract, color }) {
  const [isFocused, setIsFocused] = useState(false);

  const urlInput = useRef(null);

  useEffect(() => {
    if (isFocused) {
      if (urlInput.current.textContent !== url) {
        urlInput.current.textContent = url;
      }
    } else {
      urlInput.current.textContent = changeLinkToWord(url);
    }
  }, [url, isFocused]);

  const onFieldChange = () => {
    onChange(urlInput.current.innerText);
  };

  const onFocus = (e) => {
    setIsFocused(true);
  };
  const onBlur = (e) => {
    if (
      e.relatedTarget === null ||
      !e.relatedTarget.classList.contains("social-item__substract")
    ) {
      setIsFocused(false);
    }
  };

  return (
    <div>
      <div className="social-item">
        <img
          className="social-item__icon"
          style={{ filter: filter(color) }}
          src={getIconByUrl(url)}
          alt="socials-icon"
        />
        <span
          className="social-item__link"
          contentEditable
          suppressContentEditableWarning
          onInput={onFieldChange}
          ref={urlInput}
          onFocus={onFocus}
          onBlur={onBlur}
        ></span>
        {isFocused && (
          <div
            className="social-item__social social-item__substract"
            tabIndex={1}
            onClick={onSubstract}
          >
            <img
              className="social-item__subtract-img"
              src={Subtract}
              alt="add icon"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default SocialItem;
