import { action, observable, useStrict } from "mobx";
import { SearchResultStore } from "./SearchResultStore";

useStrict(true);

export class SearchStore {
  @observable id;
  @observable thumbnail;
  @observable title;
  @observable query;
  @observable state;
  @observable end;
  @observable results = [];
  @observable activeResult;

  constructor({ id, title, query, start, end, results, activeResult }) {
    this.id = id;
    this.title = title;
    this.query = query;
    this.state = start;
    this.end = end;
    this.results.replace(results.map(result => new SearchResultStore(result)));
    this.activeResult = this.results.find(result => result.id === activeResult);
  }

  @action setActiveResult = active => (this.activeResult = active);
  @action updateQuery = newQuery => (this.query = newQuery);
}
