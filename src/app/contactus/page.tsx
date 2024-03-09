import { websites } from "@/utils/constants";
import Deliverycard from "./Deliverycard";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function page() {
  const words = [
    { text: "If" },
    { text: "you" },
    { text: "want" },
    { text: "to" },
    { text: "create" },
    { text: "a" },
    { text: "website" },
    { text: "suitable" },
    { text: "for" },
    { text: "your" },
    { text: "need" },
    { text: "you" },
    { text: "can" },
    { text: "click" },
    { text: "any" },
    { text: "of" },
    { text: "these" },
    { text: "cards" },
  ];

  return (
    <main>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-wrap w-full justify-around gap-3 mt-4">
        {websites.map((iteam) => (
          <Deliverycard
            key={iteam.id}
            title={iteam.title}
            desc={iteam.desc}
            image={iteam.image}
            cost={iteam.cost}
          />
        ))}
      </div>
    </main>
  );
}
