import * as Flow from "./types";

export function createPageDefinition(
  type: Flow.Page,
  component: Flow.PageComponent
): Pick<Flow.PageDefinition, "component" | "type"> {
  return {
    type,
    component,
  };
}
