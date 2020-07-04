import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { ApplicationBase } from '@thoughtbot/superglue';
import { pageIdentifierToPageComponent } from './page_to_page_mapping';
import { buildStore } from './store'
import { renderToString } from 'react-dom/server';

require("source-map-support").install({
  retrieveSourceMap: filename => {
    return {
      url: filename,
      map: readSourceMap(filename)
    };
  }
});

class Application extends ApplicationBase {
  mapping() {
    return pageIdentifierToPageComponent;
  }

  visitAndRemote(navRef, store) {
    return {visit: () => {}, remote: () => {}}
  }

  buildStore(initialState, { superglue, pages}) {
    return buildStore(initialState, superglue, pages);
  }
}

setHumidRenderer((json) => {
  const initialState = JSON.parse(json)
  return renderToString(
    <Application
      // baseUrl={origin}
      // The global var SUPERGLUE_INITIAL_PAGE_STATE is set by your erb
      // template, e.g., index.html.erb
      initialPage={initialState}
      // The initial path of the page, e.g., /foobar
      // path={path}
    />
  )
})
