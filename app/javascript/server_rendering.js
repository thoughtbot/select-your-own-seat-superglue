import React from 'react';
import { Application } from '@thoughtbot/superglue';
import { buildVisitAndRemote } from './application_visit';
import { pageIdentifierToPageComponent } from './page_to_page_mapping';
import { store } from './store'
import { renderToString } from 'react-dom/server';

require("source-map-support").install({
  retrieveSourceMap: filename => {
    return {
      url: filename,
      map: readSourceMap(filename)
    };
  }
});

setHumidRenderer((json, baseUrl, path) => {
  const initialState = JSON.parse(json)
  return renderToString(
    <Application
      className="full-height"
      // The base url prefixed to all calls made by the `visit`
      // and `remote` thunks.
      baseUrl={baseUrl}
      // The global var SUPERGLUE_INITIAL_PAGE_STATE is set by your erb
      // template, e.g., index.html.erb
      initialPage={initialState}
      // The initial path of the page, e.g., /foobar
      path={path}
      // Callback used to setup visit and remote
      buildVisitAndRemote={buildVisitAndRemote}
      // Callback used to setup the store
      store={store}
      // Mapping between the page identifier to page component
      mapping={pageIdentifierToPageComponent}
    />,
    {     
      concurrentFeatures: false,
    }
  )
})
