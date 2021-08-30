import React from "react";

function Pages({ clickPreviousPage, clickNextPage }) {
  return (
    <div className="buttons">
        {clickPreviousPage && <button onClick={clickPreviousPage} className="btnPrev btn-outline-primary">Previous</button>}
        {clickNextPage && <button onClick={clickNextPage} className="btnNext btn-outline-primary">Next</button>}
    </div>
  );
}

export default Pages;
