import { cn, pressable } from '@coinbase/onchainkit/theme';
import { useCallback, useState } from 'react';
import {
  GITHUB_LINK,
  ONCHAINKIT_LINK,
  TEMPLATE_LINK,
  TWITTER_LINK,
} from 'src/links';
import { ExternalLinkSvg } from 'src/svg/ExternalLinkSvg';
import { MenuSvg } from 'src/svg/MenuSvg';
import OnchainKitShopSvg from 'src/svg/OnchainKitShopSvg';
import type { NavbarLinkReact } from 'src/types';

function NavbarLink({ link, label }: NavbarLinkReact) {
  return (
    <li
      className={cn(
        'flex cursor-pointer items-center justify-center gap-2 rounded p-1',
        pressable.default,
      )}
    >
      <a
        href={link}
        className="ock-text-foreground flex items-center text-xs"
        target="_blank"
        rel="noreferrer"
      >
        {label}
        <span className="pl-1">
          <ExternalLinkSvg />
        </span>
      </a>
    </li>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="-mx-[50vw] fixed top-10 right-1/2 left-1/2 xs:h-11 w-screen border-gray-200 border-b bg-[white]">
      <div className="mx-auto flex h-full max-w-5xl items-center px-4 py-2 lg:px-6">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-3">
            <OnchainKitShopSvg />
            <span className="ock-bg-alternate ock-text-foreground rounded-sm px-2 py-0.5 font-regular text-xs">
              Template
            </span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <NavbarLink link={TEMPLATE_LINK} label="FORK THIS TEMPLATE" />
              <NavbarLink link={ONCHAINKIT_LINK} label="ONCHAINKIT" />
              <NavbarLink link={TWITTER_LINK} label="X" />
            </ul>
          </nav>
          <button
            type="button"
            className={cn('md:hidden', pressable.default)}
            onClick={toggleMenu}
          >
            <MenuSvg />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-[white] md:hidden">
          <ul className="flex flex-col items-start space-y-2 px-4 py-2">
            <NavbarLink link={TEMPLATE_LINK} label="FORK THIS TEMPLATE" />
            <NavbarLink link={ONCHAINKIT_LINK} label="ONCHAINKIT" />
            <NavbarLink link={GITHUB_LINK} label="GITHUB" />
            <NavbarLink link={TWITTER_LINK} label="X" />
          </ul>
        </div>
      )}
    </header>
  );
}
