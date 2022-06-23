import React, { useState } from "react";
import { question } from "./api";
import ViewAccordion from "./ViewAccordion";
import "./accordion .css";

export default function Accordion() {
  const [data, setData] = useState(question);
  return (
    <>
      <section className="main">
        <div className="answer">
          <h3>React Interview Question</h3>
          {data.map((elem) => {
            const { id } = elem;
            return <ViewAccordion key={id} {...elem} />;
          })}
        </div>
      </section>
    </>
  );
}
