import React from "react";
import {
  AiFillGithub,
  AiFillBehanceCircle,
  AiFillDribbbleCircle,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Pragya Pal</h2>
        <p>Design Develop Code.</p>
      </div>

      <aside>
        <h2>Check my work</h2>

        <article>
          <a href="https://www.behance.net/pragyapal2" target={"blank"}>
            <AiFillBehanceCircle />
          </a>
          <a href="https://dribbble.com/PRAGYAAAA" target={"blank"}>
            <AiFillDribbbleCircle />
          </a>
          <a href="https://github.com/pragya1976" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
