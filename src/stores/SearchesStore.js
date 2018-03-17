import { observable, useStrict } from "mobx";
import { SearchStore } from "./SearchStore";

useStrict(true);

export class SearchesStore {
  @observable searches = [];

  constructor(defaultSearches) {
    this.searches.replace(
      defaultSearches.map(search => new SearchStore(search))
    );
  }
}
