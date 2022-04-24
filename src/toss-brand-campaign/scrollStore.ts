import { makeAutoObservable } from "mobx";

export type ScrollState = {
  scene: number;
  progress: number;
};

export default class ScrollStore {
  private _state: ScrollState;

  constructor(initState: ScrollState) {
    this._state = { ...initState };
    makeAutoObservable(this);
  }

  setState(state: ScrollState) {
    this._state = { ...state };
  }

  get scene() {
    return this._state.scene;
  }
  get progress() {
    return this._state.progress;
  }

  getProgress(scene: number) {
    if (scene > this._state.scene) {
      return 0;
    }
    if (scene < this._state.scene) {
      return 1;
    }
    return this._state.progress;
  }
}
