import { Icon } from "@iconify/react";
import downloadIcon from "@iconify/icons-feather/download";
import bxDotsVerticalRounded from "@iconify/icons-bx/bx-dots-vertical-rounded";
import bxlSpotify from "@iconify/icons-bx/bxl-spotify";
import bxlApple from "@iconify/icons-bx/bxl-apple";

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
          className="download icon"
          title="Download from Bandcamp"
        >
          <Icon icon={downloadIcon} />
        </a>
        <div className="options-dropdown">
          <label
            className="options-dropdown-icon icon"
            htmlFor={`options-checkbox-${number}`}
            title="Streaming Services Menu"
          >
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
                <Icon icon={bxlSpotify} />
                Spotify
              </a>
            </li>
            <li className="apple-music">
              <a
                href={links.apple}
                rel="noopener noreferrer"
                title="Listen on Apple Music"
              >
                <Icon icon={bxlApple} />
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
