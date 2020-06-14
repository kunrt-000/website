import { Icon } from "@iconify/react";
import downloadIcon from "@iconify/icons-feather/download";
import bxDotsVerticalRounded from "@iconify/icons-bx/bx-dots-vertical-rounded";

const Track = ({ number, title, links }: Track) => {
  return (
    <div className="track">
      <div className="left">
        <div className="number">{number}.</div>
        <div className="title">{title}</div>
      </div>
      <div className="right">
        <a
          href={links.download}
          rel="noopener noreferrer"
          className="download"
          title="Download from Bandcamp"
        >
          <Icon icon={downloadIcon} />
        </a>
        <div className="options-dropdown">
          <label htmlFor={`options-checkbox-${number}`} title="Track Menu">
            <Icon icon={bxDotsVerticalRounded} />
          </label>
          <input
            type="checkbox"
            id={`options-checkbox-${number}`}
            className="options-checkbox"
          />
          <ul className="options">
            <li className="spotify">
              <a
                href={links.spotify}
                rel="noopener noreferrer"
                title="Listen on Spotify"
              >
                Spotify
              </a>
            </li>
            <li className="apple-music">
              <a
                href={links.apple}
                rel="noopener noreferrer"
                title="Listen on Apple Music"
              >
                Apple Music
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Track;
