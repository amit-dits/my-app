import React from "react";
type Personprops = {
  name1: {
    first: string;
    last: string;
  };
};

function Person(props: Personprops) {
  return (
    <div>
      <h1>
        {" "}
        hello{props.name1.first} i am {props.name1.last}amit
      </h1>
    </div>
  );
}

export default Person;
