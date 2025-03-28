// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
import {nodeProfilingIntegration} from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://15cf83c21a6b9557c991c7fa9bff9a66@o4508930701066240.ingest.us.sentry.io/4508930710044672",
  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ],
  
//Tracing
//   tracesSampleRate: 1.0, //Capture 100% of transactions
});
//Manually call startProfiler and stopProfiler to profile the code in between
Sentry.profiler.startProfiler();

//Starts a transaction that will also be profiled
Sentry.startSpan({
    name: "My First Transaction",
}, () => {
    //the code executing inside the transaction will be wrapped in a span and profiled
});

//Calls to stopProfiling are optional - if you don't stop the profiler, it will keep profiling your application until the process exits or stopProfiling is called.
Sentry.profiler.stopProfiler();