import "./dist/footer.css";

interface footerPorp {
  pageSetter: (page: number) => void;
  actualPage?: number;
  maxPage?: number;
}

export const Footer = (props: footerPorp) => {
  const arrayGenarator = (min: number, max: number) => {
    //return [...Array(end - start + 1).keys()].map(x => x + start)

    return Array(max - min + 1)
      .fill(0)
      .map((_, i) => min + i);
  };

  const paginatorArrayGenerator = (actualPage: number, maxPage: number) => {
    /*    console.log(
      "in paginationGenerator actual: " + actualPage + "max" + maxPage
    ); */
    if (maxPage <= 5 || actualPage <=2) {
      //console.log("max less then 5");
      return arrayGenarator(1, 5);
    }

    if (actualPage + 2 >= maxPage) {
      //console.log("Actual almost edn");
      return arrayGenarator(maxPage - 4, maxPage);
    }

    //console.log("page OK ")

    return arrayGenarator(actualPage - 2, actualPage + 2);
  };

  // ezt  ki lehet váltani valahogyan
  const propChecker = (act: number | undefined, max: number | undefined) => {
    return typeof act === "number" && typeof max === "number";
  };

  return (
    <div className="footerContainer">
      <div>This page is : {props.actualPage}</div>
      <div>MAx is {props.maxPage}</div>
      <div className="paginationWrapper">
        {propChecker(props.actualPage, props.maxPage) &&
          paginatorArrayGenerator(
            props.actualPage as number,
            props.maxPage as number
          ).map((pagenumber) => (
            <div 
            className={` ${pagenumber === props.actualPage && "selectedButton"}`}
            key={`pageButton${pagenumber}`}
            onClick={()=>props.pageSetter(pagenumber)}
            >{pagenumber}</div>
          ))}
      </div>
      <div>helykitöltő</div>
    </div>
  );
};
