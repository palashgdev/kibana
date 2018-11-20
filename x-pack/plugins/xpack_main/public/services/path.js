/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import chrome from 'ui/chrome';

export function PathProvider($window) {
  const path = chrome.removeBasePath($window.location.pathname);
  return {
    isUnauthenticated() {
<<<<<<< HEAD
      return path === '/login' || path === '/logout' || path === '/logged_out';
=======
      return path === '/login' || path === '/logout' || path === '/logged_out' || path === '/status';
>>>>>>> ff49a1c6742d67fa5daed569ff3bb269783f6bd1
    }
  };
}
