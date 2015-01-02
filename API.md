#Index

**Functions**

* [once(id)](#once)
* [removeOnce(id)](#removeOnce)
* [findOnce(id)](#findOnce)
 
<a name="once"></a>
#once(id)
Filter elements by whether they have not yet been processed.

**Params**

- id `string` - The data id used to determine whether the given elements have already
  been processed or not.  

**Returns**:  - jQuery element collection of elements that have now run once by
  the given id.  
**Example**  
// Change the color to green only once.
$('p').once('changecolor').css('color', 'green');

<a name="removeOnce"></a>
#removeOnce(id)
Removes the once data from the given elements, based on the given ID.

**Params**

- id `string` - A required string representing the name of the data id which should be used
  when filtering the elements. This only filters elements that have already
  been processed by the once function. The id should be the same id that
  was originally passed to the once() function.  

**Returns**:  - jQuery element collection of elements that now have their once
  data removed.  
**Example**  
// Remove once data with the "changecolor" ID.
$('p').removeOnce('changecolor').each(function() {
  // This function is called for all elements that had their once removed.
});

<a name="findOnce"></a>
#findOnce(id)
Filters elements that have already been processed once.

**Params**

- id `string` - A required string representing the name of the data id which should be used
  when filtering the elements. This only filters elements that have already
  been processed by the once function. The id should be the same id that
  was originally passed to the once() function.  

**Returns**:  - jQuery element collection of elements that have been run once.  
**Example**  
// Find all elements that have the changecolor'ed once.
$('p').findOnce('changecolor').each(function() {
  // This function is called for all elements that has already once'd.
});

