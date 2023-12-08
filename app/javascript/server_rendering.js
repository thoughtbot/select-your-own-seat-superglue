import React from 'react';
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

setHumidRenderer((json, currentPath) => {
  const initialState = JSON.parse(json)
  return renderToString(
    <Application
      initialPage={initialState}
      path={currentPath}
    />
  )
})
