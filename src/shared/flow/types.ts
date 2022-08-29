import React from "react";

const PAGE_TYPES = [
  "Article",
  "Survey",
  "Confirmation",
  "Audio",
  "Video",
] as const;
export type Page = typeof PAGE_TYPES[number];
export type PageID = string;
export interface PageProps {
  currentPageID: PageID;
  hasNextPage: boolean;
  next: CallableFunction;
}
export type PageComponent = React.FC<PageProps>;
export interface PageDefinition<P extends PageID = PageID> {
  type: Page;
  component: PageComponent;
  next: P | null;
}
export interface Definition<P extends PageID = PageID> {
  pages: Record<P, PageDefinition<P>>;
}
