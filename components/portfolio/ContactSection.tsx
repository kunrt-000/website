/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Section from "./Section";

const breakpoints = [576, 1024, 1280, 1370];
const min_media_queries = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`
);
const max_media_queries = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`
);

const FormField = ({ label, htmlFor, children, ...props }) => (
  <fieldset
    css={css`
      border: 0;
      padding: 0;
      margin: 0 0 1vw 0;
      font-size: 1.5vw;
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 0.5vw;
        font-weight: 300;
      }

      input,
      textarea {
        font-family: Manrope, sans-serif !important;
        font-size: 1.25vw;
        padding: 0.5vw;
        width: 100%;
        box-sizing: border-box;
        border: 0.1vw solid rgba(0, 0, 0, 0.5);
      }

      textarea {
        min-height: 17vw;
      }

      ${max_media_queries[1]} {
        font-size: 1.25rem;
        margin-bottom: 1rem !important;

        label {
          margin-bottom: 0.5rem;
        }

        input,
        textarea {
          font-size: 1.25rem;
          padding: 0.5rem;
        }

        textarea {
          min-height: 10rem;
        }
      }

      ${min_media_queries[3]} {
        font-size: 2vw;

        textarea {
          min-height: 20vw;
        }
      }
    `}
  >
    <label htmlFor={htmlFor}>{label}</label>
    {children}
  </fieldset>
);

const ContactSection = () => (
  <Section id="contact">
    <h1>Contact</h1>
    <form name="contact" action="/success" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <div className="info">
        <FormField label="Name:" htmlFor="name">
          <input type="text" name="name" id="name" />
        </FormField>
        <FormField label="E-mail:" htmlFor="email">
          <input type="text" name="email" id="email" />
        </FormField>
      </div>
      <FormField label="Message:" htmlFor="message">
        <textarea name="message" id="message"></textarea>
      </FormField>
      <button
        type="submit"
        css={css`
          background: #080b0d;
          color: #fff;
          border: 1px solid transparent;
          font-family: Manrope, sans-serif;
          padding: 0.75vw 1.75vw;
          font-size: 1.75vw;
          cursor: pointer;
          transition: background 0.15s;
          margin-top: 0.5vw;

          &:hover {
            background: #1a1a1a;
            color: #fff;
          }

          ${max_media_queries[1]} {
            padding: 0.75rem 1.5rem;
            font-size: 1.25rem;
          }

          ${min_media_queries[3]} {
            padding: 0.85vw 2.25vw;
            font-size: 2.25vw;
          }
        `}
      >
        Send
      </button>
    </form>
  </Section>
);

export default ContactSection;
