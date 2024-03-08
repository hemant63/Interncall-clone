import React, { useState, useEffect } from "react";

function Data() {
  const [list, setList] = useState();

  const url = "http://localhost:3000/comments";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setList(json));
  }, []);
  console.log(list);

  return (
    <div className="container text-center">
      <div className="row">
        {list?.map((item, i) => (
          <div className="col-sm-4">
            <p>{item?.name}</p>
            <p>
              <iframe className="col" src={item?.url}></iframe>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Data;
