import React from "react";

function Header() {
  return (
    <header className="font-logo mb-14 flex flex-row place-content-between">
      <h1 className="text-3xl font-bold">
        <a href="#">Askim Blog</a>
      </h1>
      <span>by <a target="_blank" href="https://www.instagram.com/buseyigg/" className="scale-100 active:scale-100">
        <img src="../../public/avatar.jpg" alt="avatar" width={32} height={32} className="relative -top-1 mx-2 inline h-8 w-8 rounded-full" />
      </a>
      </span>
    </header>
  );
}

export default Header;
