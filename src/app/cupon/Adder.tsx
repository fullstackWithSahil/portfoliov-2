import { Button } from "@/components/ui/button";

export default function Adder({
  increseUserDiscount,
  userDiscount,
  hisCut,
  decreaseUserDiscount,
}: {
  hisCut: number;
  decreaseUserDiscount: () => void;
  increseUserDiscount: () => void;
  userDiscount: number;
}) {
  return (
    <div className="flex justify-around mt-4">
      <div>
        <Button className="font-bold text-lg" onClick={increseUserDiscount}>
          +
        </Button>
        <span className="mx-4">{userDiscount}</span>
        <Button className="font-bold text-lg" onClick={decreaseUserDiscount}>
          -
        </Button>
      </div>
      <div>
        <Button className="font-bold text-lg" onClick={decreaseUserDiscount}>
          +
        </Button>
        <span className="mx-4">{hisCut}</span>
        <Button className="font-bold text-lg" onClick={increseUserDiscount}>
          -
        </Button>
      </div>
    </div>
  );
}
