import { produce } from "immer";

type ScrollState = {
  scene: number;
  progress: number;
};
type ScrollAction =
  | SetAction
  | SceneUpAction
  | SceneDownAction
  | ChangeProgressAction;

type SetAction = {
  type: "Set";
  payload: {
    scene: number;
    progress: number;
  };
};

type SceneUpAction = {
  type: "SceneUp";
};
type SceneDownAction = {
  type: "sceneDown";
};

type ChangeProgressAction = {
  type: "Progress";
  progress: number;
};

export const scrollReducer = (state: ScrollState, action: ScrollAction) => {
  switch (action.type) {
    case "SceneUp":
      return produce(state, (prev) => {
        prev.scene = prev.scene + 1;
        prev.progress = 0;
      });
    case "sceneDown":
      return produce(state, (prev) => {
        prev.scene = prev.scene - 1;
        prev.progress = 1;
      });
    case "Progress":
      return produce(state, (prev) => {
        prev.progress = action.progress;
      });
    case "Set":
      return produce(state, (prev) => {
        prev.progress = action.payload.progress;
        prev.scene = action.payload.scene;
      });
  }
};
