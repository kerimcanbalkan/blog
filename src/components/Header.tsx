import React from "react";

function Header() {
        return (
                <header className="mb-14 flex flex-row place-content-between">
                        <h1 className="text-2xl font-semi-bold">
                                <a href="/" className="hover:text-light-color-accent dark:hover:text-dark-color-accent">Astronaut</a>
                        </h1>
                        <span>by <a target="_blank" href="https://www.instagram.com/" className="scale-100 active:scale-100">
                                <img src="/cute-astronaut.jpg" alt="avatar" width={32} height={32} className="relative -top-1 mx-2 inline h-8 w-8 rounded-full" />
                        </a>
                        </span>
                </header>
        );
}

export default Header;
