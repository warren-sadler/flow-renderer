import React from "react";
import * as Flow from "./types";

export function useFlow(definition: Flow.Definition) {
  const pagesArray = Object.entries(definition.pages);
  const [[initialPageID, { next: nextPageID }]] = pagesArray;
  const numberOfPages = pagesArray.length;
  const [currentPageID, setNextPageID] = React.useState(initialPageID);
  const next = React.useCallback(() => {
    if (nextPageID) {
      setNextPageID(nextPageID);
    }
  }, [nextPageID]);
  const pageProps = React.useMemo(
    () => ({
      currentPageID,
      hasNextPage: Boolean(nextPageID),
      next,
    }),
    [currentPageID, nextPageID, next]
  );
  return {
    Component: definition.pages[currentPageID].component,
    currentPageID,
    pageProps,
    numberOfPages,
  };
}
