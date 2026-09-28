Let's dive in with an update about the image queue.

At 09:14 UTC, the queue stopped processing new jobs after the worker pool reached its connection limit. This issue was caused by a database connection leak. We have identified the root cause and are working diligently to resolve it.

The team restarted the workers at 09:32 UTC. Jobs submitted after that time began processing, and the oldest queued job completed at 09:41 UTC. There are 38 jobs still waiting as of 09:45 UTC. We are monitoring the situation closely to ensure everything is functioning as expected.

No uploaded images were lost. The queue retained each job record, and users can still see pending work in the dashboard. We will provide another update in 30 minutes or sooner if the queue stops again. The incident highlights the importance of reliability and our commitment to a high-quality service.
