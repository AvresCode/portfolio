import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

export const SocialLinks = () => {
  return (
    <>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/servasa/"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineLinkedin />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/AvresCode"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineGithub />
      </a>
    </>
  );
};
