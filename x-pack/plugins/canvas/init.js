/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { functionsRegistry } from '@kbn/interpreter/common/lib/functions_registry';
import { getServerRegistries } from '@kbn/interpreter/server/server_registries';
import { routes } from './server/routes';
<<<<<<< HEAD
import { functionsRegistry } from './common/lib';
import { commonFunctions } from './common/functions';
import { populateServerRegistries } from './server/lib/server_registries';
=======
import { commonFunctions } from './common/functions';
>>>>>>> ff49a1c6742d67fa5daed569ff3bb269783f6bd1
import { registerCanvasUsageCollector } from './server/usage';
import { loadSampleData } from './server/sample_data';

export default async function(server /*options*/) {
  server.injectUiAppVars('canvas', () => {
    const config = server.config();
    const basePath = config.get('server.basePath');
    const reportingBrowserType = config.get('xpack.reporting.capture.browser.type');

    return {
      kbnIndex: config.get('kibana.index'),
      esShardTimeout: config.get('elasticsearch.shardTimeout'),
      esApiVersion: config.get('elasticsearch.apiVersion'),
      serverFunctions: functionsRegistry.toArray(),
      basePath,
      reportingBrowserType,
    };
  });

  // There are some common functions that use private APIs, load them here
  commonFunctions.forEach(func => functionsRegistry.register(func));

  registerCanvasUsageCollector(server);
  loadSampleData(server);

  // Do not initialize the app until the registries are populated
<<<<<<< HEAD
  await populateServerRegistries(['serverFunctions', 'types']);
=======
  await getServerRegistries();
>>>>>>> ff49a1c6742d67fa5daed569ff3bb269783f6bd1
  routes(server);
}
