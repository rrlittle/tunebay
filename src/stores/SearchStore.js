import { action, observable, computed, useStrict } from "mobx";
import { SearchResultStore } from "./SearchResultStore";

useStrict(true);

const maxResults = 10;
const thumb1 = "https://i.ytimg.com/vi/R8XAlSp838Y/default.jpg";

const staticResults = [
  { id: "eUkSTnUK_T0", active: false, thumbnail: thumb1, title: "FOOBAR3" },
  {
    id: "2g811Eo7K8U",
    active: true,
    thumbnail: thumb1,
    title: "FOOBAR2"
  },
  { id: "P_SlAzsXa7E", active: false, thumbnail: thumb1, title: "FOOBAR4" }
];
export class SearchStore {
  defaultOpen;

  @observable id;
  @observable thumbnail;
  @observable query = "";
  @observable playFrom;
  @observable playTo;
  @observable start;
  @observable end;
  @observable results = [];
  @observable activeResult;
  @observable searchQuery;
  @observable parent;
  @observable durationSet;

  @computed
  get queryDirty() {
    return this.query !== this.searchQuery;
  }
  @computed
  get queryValid() {
    return this.query.length >= 3;
  }

  @computed
  get readyToSearch() {
    return this.queryValid && this.queryDirty;
  }
  @computed
  get readyToDownload() {
    return !this.queryDirty && this.activeResult;
  }

  constructor({
    parent,
    id,
    query,
    start,
    end,
    results,
    activeResult,
    triggerSearch,
    defaultOpen
  }) {
    this.defaultOpen = defaultOpen;
    this.parent = parent;
    this.id = id;
    this.query = query;
    if (results) {
      this.results.replace(
        results.map(result => new SearchResultStore(result))
      );
      this.searchQuery = query;
    } else if (triggerSearch) this.doSearch();
    this.start = start;
    this.end = end;
    this.activeResult = this.results.find(result => result.id === activeResult);
  }

  @action
  setActiveResult = active => {
    this.activeResult = active;
    this.durationSet = false;
  };
  @action updateQuery = newQuery => (this.query = newQuery);

  @action
  setDuration = (start, end) => {
    this.start = start;
    this.end = end;
    this.limitPlay(start, end);
    this.durationSet = true;
  };
  @action
  limitPlay = (playFrom, playTo) => {
    this.playFrom = playFrom;
    this.playTo = playTo;
  };

  @action
  doSearch = () => {
    // forumlate query
    const url = "https://www.googleapis.com/youtube/v3/search";
    const params = {
      part: "snippet",
      type: "video",
      maxResults: maxResults,
      q: this.query,
      key: this.parent.api_key
    };
    const query = `${url}?${Object.entries(params)
      .map(([key, val]) => `${key}=${encodeURI(val)}`)
      .join("&")}`;

    const parseResult = result => ({
      id: result.id.videoId,
      title: result.snippet.title,
      thumbnail: result.snippet.thumbnails.default.url,
      parent: this
    });
    const q = this.query;
    fetch(query)
      .then(resp => resp.json())
      .then(
        action(data => {
          this.searchQuery = q;
          const results = data.items;
          console.log(results);
          this.results.replace(
            results.map(result => new SearchResultStore(parseResult(result)))
          );
          this.setActiveResult(null);
        })
      );
  };
  @action
  download = () => {
    fetch(`${this.parent.api_domain}/queue`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: this.searchQuery,
        video: this.activeResult,
        playFrom: this.playFrom,
        playTo: this.playTo
      })
    }).then(resp => {
      if (resp.ok) this.parent.deleteSearch(this);
    });
  };
}
