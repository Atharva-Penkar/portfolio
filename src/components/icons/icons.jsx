import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const icons = {
  mail: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
};

export default function Icon({ name, size = 24 }) {
  const Glyph = icons[name];
  if (!Glyph) return null;
  return <Glyph size={size} aria-hidden="true" />;
}
