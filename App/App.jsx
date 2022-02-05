import React from 'react';

import {
  PostRequest,
  PostRequestHooks,
  PostRequestAsyncAwait,
  PostRequestErrorHandling,
  PostRequestSetHeaders,
} from './';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3 className="p-3 text-center">React HTTP POST Requests with Fetch</h3>
        <PostRequest />
        {/* <PostRequestHooks />
                <PostRequestAsyncAwait />
                <PostRequestErrorHandling />
                <PostRequestSetHeaders /> */}
      </div>
    );
  }
}

export { App };
