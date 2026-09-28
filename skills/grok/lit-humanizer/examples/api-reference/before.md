Of course! The Reports API is a powerful and seamless way to create reports.

## Endpoint

POST /v2/reports

The endpoint accepts a JSON body with a title string and a rows array. Each row contains an id and a value. Requests require a Bearer token in the Authorization header. A successful request returns HTTP 202 with a report_id.

The report will be available for 60 days. The API may take up to five minutes to process a request. Please note that you should use the report_id to retrieve the result. The endpoint supports a maximum of 100 rows per request.

~~~json
{"title":"June totals","rows":[{"id":"north","value":18}]}
~~~

Would you like me to add a client example?
