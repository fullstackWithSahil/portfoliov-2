import { cn } from "@/utils/cn";

type inputType ={
    type: 'text'|'password',
    name:string;
    className?: string;
    value?:string
    onChange:(key:string, value:string)=>void;
}

export default function Input(props:inputType) {
    //style this a bit better way
  return (
    <>
    <label 
        htmlFor={props.name}
        className="text-xl capitalize pt-3"
    >
        {props.name}
    </label>
    <input 
        type={props.type}
        name={props.name}
        className={cn('text-black rounded-lg px-2 border-2 outline-none border-black dark:border-white',props.className)
    }
    onChange={(e)=>props.onChange(props.name,e.target.value)}
    value={props.value?props.value:''} 
    />
    </>
  )
}
