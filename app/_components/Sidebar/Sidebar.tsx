"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Listbox, ListboxItem } from "@heroui/react";
import { twMerge } from "tailwind-merge";

export type LinkItem = {
  id: string;
  label: string;
  title?: string;
  limited?: string;
  showDivider?: boolean;
  isDevMode?: boolean;
};

export function Sidebar({
  suffix,
  links,
}: {
  suffix: string;
  links: LinkItem[];
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-1">
      <Listbox
        aria-label="Sidebar"
        color="primary"
        variant="flat"
        selectionMode="single"
        shouldHighlightOnFocus
        selectedKeys={links
          .filter((link) => pathname.includes(link.id))
          .map((item) => item.id)}
        classNames={{
          base: "m-0",
          list: "gap-0",
        }}
      >
        {links.map((link) => (
          <ListboxItem
            key={link.id}
            classNames={{
              title: "!text-base text-neutral-500",
            }}
            className={twMerge(
              pathname.includes(link.id) &&
                "bg-primary-400/20 !text-primary-400",
            )}
            textValue={link.label}
          >
            <Link href={`/${suffix}/${link.id}`}>{link.label}</Link>
          </ListboxItem>
        ))}
      </Listbox>
    </div>
  );
}
