import {
  createPageDefinition,
  Definition as FlowDefinition,
} from "../../shared/flow";

const REGISTRATION_PAGES = ["Welcome", "More"] as const;
type RegistrationPage = typeof REGISTRATION_PAGES[number];
export const REGISTRATION_FLOW: FlowDefinition<RegistrationPage> = {
  pages: {
    Welcome: {
      ...createPageDefinition(
        "Article",
        function ({ currentPageID, hasNextPage, next }) {
          return (
            <div>
              <header>Page ID {currentPageID}</header>
              <main>Hello World!</main>
              <button disabled={!hasNextPage} onClick={() => next()}>
                Next
              </button>
            </div>
          );
        }
      ),
      next: "More",
    },
    More: {
      ...createPageDefinition("Confirmation", function () {
        return <div>Oh yea!!</div>;
      }),
      next: null,
    },
  },
};
