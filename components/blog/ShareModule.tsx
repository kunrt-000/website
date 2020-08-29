/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Facebook from "@/icons/Facebook";
import Twitter from "@/icons/Twitter";
import Reddit from "@/icons/Reddit";
import Email from "@/icons/Email";
import WhatsApp from "@/icons/WhatsApp";

const breakpoints = [576, 750, 1280, 1370, 2000];
const min_media_queries = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`
);
const max_media_queries = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`
);

const ShareButton = ({ children, url, ...props }) => (
  <a
    target="_blank"
    href={url}
    className="share-button"
    {...props}
    css={css`
      background: #131313;
      color: #fff;
      fill: #fff;
      display: flex;
      border-radius: 50%;
      padding: 0.75vw;
      margin-bottom: 0.5vw;
      cursor: pointer;
      font-size: 1.25vw;

      &:hover {
        background: #2a2a2a;
      }

      ${max_media_queries[1]} {
        font-size: 1.25rem;
        padding: 0.5rem;
        margin-bottom: 0;
        margin-right: 0.75rem;
      }
    `}
  >
    {children}
  </a>
);

const ShareModule = ({ title, url, ...props }) => (
  <div
    className="share-module"
    {...props}
    css={css`
      position: sticky;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 8%;

      ${max_media_queries[1]} {
        flex-direction: row;
        margin-right: 0;
        padding: 1rem 0 0.5rem 0;
        position: relative;
      }
    `}
  >
    <div
      className="share-title"
      css={css`
        margin: 1.15vw 0 1vw 0;
        font-size: 1.05vw;
        font-weight: 700;

        ${max_media_queries[1]} {
          display: none;
        }
      `}
    >
      SHARE:
    </div>
    <ShareButton url={`https://www.facebook.com/sharer.php?u=${url}`}>
      {Facebook}
    </ShareButton>
    <ShareButton url={`https://twitter.com/share?text=${title}&url=${url}`}>
      {Twitter}
    </ShareButton>
    <ShareButton url={`https://www.reddit.com/submit?url=${url}`}>
      {Reddit}
    </ShareButton>
    <ShareButton url={`mailto:?subject=${title}&body=${url}`}>
      {Email}
    </ShareButton>
    <ShareButton
      url={`whatsapp://send?text=${title} ${url}`}
      css={css`
        ${min_media_queries[1]} {
          display: none;
        }
      `}
    >
      {WhatsApp}
    </ShareButton>
  </div>
);

export default ShareModule;
