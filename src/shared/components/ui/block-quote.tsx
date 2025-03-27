import { QuoteIcon } from "lucide-react";
const BlockQuote = ({ quote, author }: { quote: string; author: string }) => {
  return (
    <blockquote className="rounded-xl border-accent-purple/70 border-l-4 bg-accent-purple/15 px-4 py-2 text-foreground">
      <p className="inline italic text-foreground">
        <QuoteIcon
          aria-hidden="true"
          className="-translate-y-1 mr-1 inline size-3 fill-accent-yellow stroke-none"
        />
        {quote}
        <QuoteIcon
          aria-hidden="true"
          className="ml-1 inline size-3 translate-y-1 fill-accent-yellow stroke-none"
        />
      </p>
      <p className="mt-1.5 text-end font-semibold text-sm italic tracking-tighter">
        {author}
      </p>
    </blockquote>
  );
};

export default BlockQuote;
