import {loadGreeting,greet} from "../../valid/typescript"

export interface Greeting { name:string,text:string }

export async function welcome( name:string ):Promise<Greeting>{
  const text=await loadGreeting( name )
  return {name,text:greet(text)}
}
