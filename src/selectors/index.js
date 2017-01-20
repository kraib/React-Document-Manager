import {createSelector} from 'reselect'

export const allDocumentsSelector = (state) => state.documents;

export const search = (state) => state.search;

export const searchedDocuments = createSelector(
  [allDocumentsSelector, search],
  (document, search) => {
    const documentsArray = document.asMutable()
      .filter(document => document.name.toLowerCase().includes(search.q));
    return documentsArray;
  }
);
