import { Edge, Node } from "reactflow";

class NodeContainer {
  constructor(public data: Node, public set: Set<Node>) {
  }
}

class EdgeContainer {
  constructor(public data: Edge, public set: Set<Edge>) {
  }
}