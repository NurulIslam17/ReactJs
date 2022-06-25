import React from "react";

function SearchRes(props) {
  const img = `https://picsum.photos/600/400/?${props.name}`;
  return (
    <>
      <div>
        <img src={img} alt="NotFound" />
      </div>
    </>
  );
}

export default SearchRes;
