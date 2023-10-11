import { Diagram } from "@data-story/core";
import { Workbench } from "./Workbench";
import { ServerConfig } from "./clients/ServerConfig";

export const DataStory = ({
  server,
  diagram,
  id,
  callback
}: {
  server?: ServerConfig
  diagram?: Diagram
  id: number
  callback?: (options: any) => void
}) => {
  return (
    <Workbench
      server={server}
      diagram={diagram}
      id={id}
      callback={callback}
    />
  )
};