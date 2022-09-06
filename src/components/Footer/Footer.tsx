import "./dist/footer.css";

interface footerPorp {
  pageSetter: (page: number) => void;
  actualPage?: number;
  maxPage?: number;
}

export const Footer = ({
  actualPage = 0,
  maxPage = 0,
  pageSetter,
}: footerPorp) => {
  const arrayGenarator = (min: number, max: number) => {
    return Array(max - min + 1)
      .fill(0)
      .map((_, i) => min + i);
  };

  const paginatorArrayGenerator = (
    actualPage: number = 0,
    maxPage: number = 0
  ) => {
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

  const propChecker = (act: number | undefined, max: number | undefined) => {
    return typeof act === "number" && typeof max === "number";
  };

  const maxChecker = () => {
    return maxPage > 5 && actualPage + 2 < maxPage;
  };

  const minChecker = () => {
    return maxPage > 5 && actualPage > 3;
  };

  return (
    <div className="footerContainer">
      <div className="paginatonWrapper">
        <div className="endMakers">
          {minChecker() && <div data-testid="startMarker">1 . . .</div>}
        </div>
        <div className="buttonWrapper">
          {propChecker(actualPage, maxPage) &&
            paginatorArrayGenerator(actualPage, maxPage).map(
              (pagenumber, iterator) => (
                <div
                  data-testid={`pageButton-${iterator}`}
                  className={` pageButton ${
                    pagenumber === actualPage && "selectedButton"
                  }`}
                  key={`pageButton${pagenumber}`}
                  onClick={() => pageSetter(pagenumber)}
                >
                  {pagenumber}
                </div>
              )
            )}
        </div>

        <div className="endMakers">
          {maxChecker() && <div data-testid="endMarker">. . . {maxPage}</div>}
        </div>
      </div>
    </div>
  );
};
