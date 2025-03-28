import { cn } from "@/shared/lib/utils";

function Contacts({ className }: { className: string }) {
  return (
    <div id="contacts" className={cn("", className)}>
      I`m always open to discussing new opportunities, collaborations, or just
      chatting about interesting projects. Feel free to get in touch. Let`s work
      together to bring your vision to life!
    </div>
  );
}

export default Contacts;
