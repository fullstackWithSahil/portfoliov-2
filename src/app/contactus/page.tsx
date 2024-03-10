import { websites } from "@/utils/constants";
import Deliverycard from "./Deliverycard";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Money from "@/assets/monej.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Enquiry from "./Enquiry";
import Feedback from "./Feedback";

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
      <Image src={Money} alt="money" className="w-full md:hidden" />
      <div className=" my-2 p-2 flex items-center flex-col border-2 border-white">
        <p className="text-white font-serif">
          if you are intrested in affilate marketing you can get your own coupne code and provide 
          discount to those who use it .you can also earn up to 20% of the the amout they order.for more 
          details contact us on our {' '}
          <a 
            className="underline cursor-pointer" 
            href="http://" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            instagram
          </a>
          {' '}
          or email us at fullstackwithsahil@gmail.com
        </p>
        <Button>
          create your cupon code
        </Button>
      </div>
      <Enquiry/>
      <Feedback/>
    </main>
  );
}
