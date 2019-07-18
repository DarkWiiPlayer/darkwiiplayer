<!-- vim: set noexpandtab :miv -->

# Tables

## Spacing

<!-- inner spaces -->
1. Either use one space after `{` and one before `}`
2. Or neither of them
3. Put spaces *after* the separator (if at all), never before

Example:

	local outer = { {"inner",1}, {"inner",2}, }

<!-- multiline -->
1. Either put the entire table on one line
2. Or don't put any items on the same line as the curly braces.
3. Indent the items of the table

Example:

	local oneline = {'hello', 'world',}
	lcoal multiline = {
		'hello',
		'world',
	}

## Sequence

<!-- comma for lists, semicolon for sets -->
1. Use commas (`,`) to separate order-dependant items (list)
2. Use semicolons (`;`) to separate order-independant items (set)

Example:

	local ingredients = { "eggs"; "flour"; "milk"; }
	local steps = { "mix", "fry", }

<!-- semantic last separator -->
1. Put a separator after the last element if more can logically follow
2. Put no separator after the last element if none should logically follow
3. Put no separator after the last element if external conditions must change
	 for an additional item to be inserted.

Example:

	local color = { 0xff, 0x20, 0x40 }
	local line = { {0, 0}, {0, 20}, {20, 20}, }

## Map

<!-- sequence first -->
1. Place key-value pairs after the sequence
2. Put a semantic separator after the last element as with pure sequences for
	open-ended sequences
3. Or use a different separator to signal that no items should be added

Example:

	local pancakes = {
		'mix', 'fry';
		ingredients = { 'milk'; 'eggs'; 'flour' };
	}

	local pancakes = {
		'milk'; 'eggs'; 'flour',
		steps = {'mix', 'fry'};
	}

<!--
	This last one looks a bit awkward, but the benefit of the added
	semantic meaning may well outweigh it looking a bit weird at first.
-->

<!-- commas for logical order -->
1. Use commas if the elements follow some logical order
2. Use semicolons otherwise
3. Apply same rules as with sequnces for separator after last element

Example:

	local point = {x=20, y=30}
	local tasks = { monday = {'call steve'}, tuesday = {'fix kitchen door'}, }
	local person = { name="John Doe"; age="Unknown" }

<!-- arbitrary integer keys -->
1. Treat arbitrary integer keys as string keys
2. Use square brackets for numbers acting as keys in a map
3. Judge based on semantic meaning, not on technicalities

Example:

	local ages = { [20]="John, Henry"; [21]="William"; }
	local errors = { [1]="File not Found"; [2]="Permission Denied" }
