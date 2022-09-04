import "./dist/footer.css";

// redux toolkit

interface footerPorp {
  pageSetter: (page: number) => void;
  actualPage?: number;
  maxPage?: number;
  /* maxResults?: number; */
}

export const Footer = (props: footerPorp) => {
  const arrayGenarator = (min: number, max: number) => {
    return Array(max - min + 1)
      .fill(0)
      .map((_, i) => min + i);
  };

  const paginatorArrayGenerator = (actualPage: number, maxPage: number) => {
    if (maxPage <= 5) {
      return arrayGenarator(1, maxPage);
    }

    if (actualPage <= 2) {
      return arrayGenarator(1, 5);
    }

    if (actualPage + 2 >= maxPage) {
      return arrayGenarator(maxPage - 4, maxPage);
    }

    return arrayGenarator(actualPage - 2, actualPage + 2);
  };

  // ezt  ki lehet váltani valahogyan
  const propChecker = (act: number | undefined, max: number | undefined) => {
    return typeof act === "number" && typeof max === "number";
  };

  return (
    <div className="footerContainer">
      <div className="writeDatas">

     
      {/* <div>All result is: {props.maxResults} in {props.actualPage} page</div> */}
      </div>
      <div className="paginationWrapper">

    

        {propChecker(props.actualPage, props.maxPage) &&
          paginatorArrayGenerator(
            props.actualPage as number,
            props.maxPage as number
          ).map((pagenumber) => (
            <div
              className={` pageButton ${
                pagenumber === props.actualPage && "selectedButton"
              }`}
              key={`pageButton${pagenumber}`}
              onClick={() => props.pageSetter(pagenumber)}
            >
              {pagenumber}
            </div>
          ))}
      </div>
      <div></div>
    </div>
  );
};
