import { observable, useStrict } from "mobx";

useStrict(true);

export class SearchResultStore {
  @observable id;
  @observable active;
  @observable thumbnail;
  @observable title;
  @observable parent;

  constructor({ parent, id, active, thumbnail, title }) {
    this.id = id;
    this.active = active;
    this.thumbnail = thumbnail;
    this.title = title;
  }
}
