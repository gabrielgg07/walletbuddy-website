import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getMarkdown } from "@/lib/markdown";

type Props = {
  /** File name in /content without the .md extension, e.g. "privacy". */
  slug: string;
};

/**
 * Renders a Markdown file from /content.
 * Raw HTML inside the Markdown is NOT rendered: react-markdown escapes it by
 * default and no rehype-raw plugin is used.
 */
export default function MarkdownPage({ slug }: Props) {
  const markdown = getMarkdown(slug);

  return (
    <article className="prose prose-wallet max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Let wide tables scroll horizontally on small screens.
          table: ({ node: _node, ...props }) => (
            <div className="overflow-x-auto">
              <table {...props} />
            </div>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
