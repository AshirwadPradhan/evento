import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <Image
      src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
      alt="Evento logo"
      width={53}
      height={12}
    />
  );
}

export default Logo;
