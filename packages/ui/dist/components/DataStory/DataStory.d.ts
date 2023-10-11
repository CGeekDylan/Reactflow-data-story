import { Diagram } from "@data-story/core";
import { ServerConfig } from "./clients/ServerConfig";
export declare const DataStory: ({ server, diagram, id, callback }: {
    server?: ServerConfig | undefined;
    diagram?: Diagram | undefined;
    id: number;
    callback?: ((options: any) => void) | undefined;
}) => JSX.Element;
