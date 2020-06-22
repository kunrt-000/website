import { Icon } from "@iconify/react";

const Streaming = ({ icon, name, link }: Streaming) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    className="streaming-service"
    title={name}
  >
    <Icon icon={icon} className="icon" />
    <div className="name">{name}</div>
  </a>
);

export default Streaming;
