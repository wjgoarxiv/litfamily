# Image queue update — 09:45 UTC

At 09:14 UTC, a database connection leak pushed the worker pool to its connection limit, and it stopped taking new jobs. The team restarted the workers at 09:32 UTC. New jobs then resumed, and the oldest queued job completed at 09:41 UTC.

Thirty-eight jobs remained in the queue at 09:45 UTC. No uploaded images were lost; the queue kept each job record, and users can still see pending work in the dashboard. The team is monitoring the queue.

We will post another update by 10:15 UTC, or earlier if processing stops again.
