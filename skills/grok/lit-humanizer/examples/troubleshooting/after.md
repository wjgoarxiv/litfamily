# Upload requests return 429

The API allows 60 requests per minute per account. A 429 response includes a Retry-After header with the number of seconds to wait before sending another request.

Read that header and pause for the stated interval. For example, if the value is 30, wait 30 seconds before retrying:

~~~sh
curl -i -X POST https://api.example.test/uploads
~~~

The rate limit resets every minute. Check the account's request count in the dashboard if 429 responses continue after the wait. Contact support if repeated 429 responses persist.
