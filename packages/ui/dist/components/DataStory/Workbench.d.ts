import 'reactflow/dist/style.css';
import { ServerConfig } from './clients/ServerConfig';
import { Diagram } from '@data-story/core';
export declare const Workbench: ({ server, diagram, id, callback }: {
    server?: ServerConfig | undefined;
    diagram?: Diagram | undefined;
    id: number;
    callback?: ((options: any) => void) | undefined;
}) => JSX.Element;
