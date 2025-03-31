"use client";
import { ReactNode } from "react";
import { Emoji, EmojiProvider } from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json";

function Greeting({ children }: { children?: ReactNode }) {
  return (
    <div className="flex text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold gap-4 items-center mb-2 md:mb-4">
      <div className="">{`Hello`}</div>
      <EmojiProvider data={emojiData}>
        <Emoji
          // name="raised-hand"
          name="waving-hand"
          // name="laptop"
          // name="raising-hands"
          // name="hand-with-fingers-splayed"
          className="size-8 sm:size-13 -scale-x-100"
        />
      </EmojiProvider>
      {children}
    </div>
  );
}

export default Greeting;
