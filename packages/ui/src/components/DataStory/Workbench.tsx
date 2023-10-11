import 'reactflow/dist/style.css';
import { shallow } from 'zustand/shallow'
import { useStoreWithEqualityFn, UseBoundStoreWithEqualityFn } from 'zustand/traditional';
import { DataStoryControls } from './dataStoryControls';
import { useState } from 'react';
import ReactFlow, {
  Background,
  BackgroundVariant,
  ReactFlowInstance,
  ReactFlowProvider
} from 'reactflow';
import DataStoryNodeComponent from '../Node/DataStoryNodeComponent';
import { RunModal } from './modals/runModal';
import { ConfigModal } from './modals/configModal';
import { AddNodeModal } from './modals/addNodeModal';
import { StoreSchema, useStoreArray } from './store/store';
import { NodeSettingsModal } from './modals/nodeSettingsModal/nodeSettingsModal';
import DataStoryCommentNodeComponent from '../Node/DataStoryCommentNodeComponent';
import DataStoryInputNodeComponent from '../Node/DataStoryInputNodeComponent';
import { ServerConfig } from './clients/ServerConfig';
import { Diagram } from '@data-story/core';
import { useHotkeys } from './useHotkeys';

const nodeTypes = {
  dataStoryNodeComponent: DataStoryNodeComponent,
  dataStoryCommentNodeComponent: DataStoryCommentNodeComponent,
  dataStoryInputNodeComponent: DataStoryInputNodeComponent,
  // dataStoryOutputNodeComponent: DataStoryNodeComponent,
};

export const Workbench = ({
  server,
  diagram,
  id,
  callback
}: {
  server?: ServerConfig
  diagram?: Diagram,
  id: number
  callback?: (options: any) => void
}) => {
  const selector = (state: StoreSchema) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    connect: state.connect,
    onInit: state.onInit,
    openNodeModalId: state.openNodeModalId,
    setOpenNodeModalId: state.setOpenNodeModalId,
    traverseNodes: state.traverseNodes,
  });

  const { connect, nodes, edges, onNodesChange, onEdgesChange, onInit, openNodeModalId, setOpenNodeModalId, traverseNodes } = useStoreWithEqualityFn(useStoreArray[id], selector, shallow);

  const [showConfigModal, setShowConfigModal] = useState(false);
  const [showRunModal, setShowRunModal] = useState(false);
  const [showAddNodeModal, setShowAddNodeModal] = useState(false);

  useHotkeys({
    nodes,
    openNodeModalId,
    setShowRunModal,
    setOpenNodeModalId,
    showConfigModal,
    showRunModal,
    showAddNodeModal,
    traverseNodes,
    setShowAddNodeModal,
  })

  return (
    <ReactFlowProvider>
      <ReactFlow
        className="bg-gray-50"
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={connect}
        onInit={(rfInstance: ReactFlowInstance<any, any>) => {
          onInit({
            rfInstance,
            server,
            diagram,
            callback
          })
        }}
        minZoom={0.25}
        maxZoom={8}
      >
        <DataStoryControls
          setShowRunModal={setShowRunModal}
          setShowAddNodeModal={setShowAddNodeModal}
          setShowConfigModal={setShowConfigModal}
          id={id}
        />
        <Background color="#E7E7E7" variant={BackgroundVariant.Lines} />
      </ReactFlow>

      {/* Modals */}
      {showConfigModal && <ConfigModal setShowModal={setShowConfigModal} id={id}/>}
      {showRunModal && <RunModal setShowModal={setShowRunModal} id={id}/>}
      {showAddNodeModal && <AddNodeModal setShowModal={setShowAddNodeModal} id={id}/>}
      {openNodeModalId && <NodeSettingsModal id={id} />}
    </ReactFlowProvider>
  );
}