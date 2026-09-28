~~~js
function formatRows(rows) {
  return rows.map((row) => ({
    name: row.name,
    value: row.value
  }));
}
~~~

The helper returns one object per input row and keeps the name and value fields.
