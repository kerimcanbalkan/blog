import type { CollectionEntry } from "astro:content";
import { slugifyStr } from "../utils/slugify";
import Datetime from "./DateTime";

export interface Props {
        href: string;
        frontmatter: CollectionEntry<"blog">["data"];
}

function Card({ href, frontmatter }: Props) {
        const { title, pubDatetime, description } = frontmatter;

        const headerProps = {
                style: { viewTransitionName: slugifyStr(title) },
                className: "text-2xl text-light-color-accent dark:text-dark-color-accent font-medium hover:underline",
        }

        return (
                <li className="my-6">
                        <a href={href} className="inline-block text-lg font-medium">
                                <h3{...headerProps}>{title}</h3>
                        </a>
                        <Datetime pubDatetime={pubDatetime} />
                        <p>{description}</p>
                </li>
        )

}

export default Card;
