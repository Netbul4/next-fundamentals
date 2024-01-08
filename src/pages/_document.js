import { Html, Head, Main, NextScript } from "next/document";
import Comp from "@/components/Comp";
import Props from "@/components/Props";
import State from "@/components/State";
import ConditionalRender from "@/components/ConditionalRender";
import ElementsRender from "@/components/ElementsRender"; 
import {EventsES6, EventsES7} from "@/components/Events";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Comp msg="Hi, I am a Component!." />
        <Props 
        string="This is a string" 
        number={20} 
        boolean={true}
        array={[1,2,3,4]} />
        <hr></hr>
        <State/>
        <hr></hr>
        <ConditionalRender/>
        <hr></hr>
        <ElementsRender/>
        <hr></hr>
        <EventsES6/>
        <hr></hr>
        <EventsES7/>
      </body>
    </Html>
  );
}
