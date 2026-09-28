Let's dive in to the export helper.

~~~js
function formatRows(rows) {
  // First, we loop through every row.
  return rows.map((row) => {
    // Now we create an object for the output.
    const result = {};
    // Next, we copy the name.
    result.name = row.name;
    // Then, we copy the value.
    result.value = row.value;
    // Finally, we return the result.
    return result;
  });
}
~~~

The helper returns one object per input row and keeps the name and value fields.
