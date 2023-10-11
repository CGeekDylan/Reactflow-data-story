"use client";

import { Application, Link, coreNodeProvider } from "@data-story/core";
import { DataStory } from "@data-story/ui";
import '@data-story/ui/dist/data-story.css';

export default function Home() {
  const app = new Application();
  app.register(coreNodeProvider);
  app.boot();

  return <div className="h-screen">
    <div className="bg-blue-500 text-white">Diagram 1</div>
    <div style={{ height: 400 }}>
      <DataStory
        server={{ type: 'JS', app }}
        id={0}
      />
    </div>
    <div className="bg-blue-500 text-white">Diagram 2</div>
    <div style={{ height: 400 }}>
      <DataStory
        server={{ type: 'JS', app }}
        id={1}
      />
    </div>
    <div className="bg-blue-500 text-white">Diagram 3</div>
    <div style={{ height: 400 }}>
      <DataStory
        server={{ type: 'JS', app }}
        id={2}
      />
    </div>
  </div>
}