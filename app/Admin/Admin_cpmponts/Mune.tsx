/* eslint-disable react/jsx-key */
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { links } from "../Data/Data_links";
import { isAcetvitClass } from "../Data/Data_links";

function Mune() {
  const pathname = usePathname();
  const reisltLinkes = (link: any) => {};
  return (
    <>
      <div  className="mt-16 w-60  ">
        {links.map((e) => {
          const isActive = pathname === e.path;
          return (
            <Link 
             key={e.path}
              href={e.path}
              className={isActive ? isAcetvitClass.yes : isAcetvitClass.no}
            >
              {e.Name}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Mune;
