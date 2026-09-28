# Create a report

POST /v2/reports accepts a JSON body with a title string and a rows array. Each row needs an id and a value. Send a Bearer token in the Authorization header.

~~~json
{"title":"June totals","rows":[{"id":"north","value":18}]}
~~~

A successful request returns HTTP 202 and a report_id. Use that id to retrieve the report. Processing can take up to five minutes. Reports remain available for 60 days, and each request can contain at most 100 rows.
