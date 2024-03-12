import { websites } from "@/utils/constants";
import Image from "next/image";
import Purchase from "./Purchase";

export default function Page({ params }: { params: { id: string } }) {
    const id =+params.id;
    const website = websites.find(s =>s.id === id)||websites[0];
    return (
        <main className="text-white px-2">
            <div className="flex justify-center mt-5">
                <Image src={website.image} alt={website.title}/>
            </div>
            <p>
                {website.longdesc}
            </p>
            <br />
            <h1 className="text-2xl">Features</h1>
            <ul className="text-lg list-inside list-disc mx-4">
                {website.list.map((iteam) =><li key={iteam}>{iteam}</li>)}
            </ul>
            <Purchase id={id} website={website}/>
        </main>
    )
}