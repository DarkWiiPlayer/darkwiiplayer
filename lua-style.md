<!-- vim: set noexpandtab :miv -->

# Comments

1. Put no space after `--` for commented out code
2. Put one space after `--` for actual comments

Example:

	--print("foo")
	print(bar) -- Prints a bar

1. Use `-->` to signal output or return values

Example:

	print(2 * 2) --> 4
	return h * w --> area

1. Use [ldoc](syntax) to document functionality

Example:

	--- Foos a Bar
	function foo(bar)

1. Use `--` for comments that apply to the entire line
2. Use `--[[]]` for comments that apply to single elements of a line

Example:

	local x, y -- coordinates
	local h --[[height]], r --[[radius]]

1. Use `--[[]]` comments to comment out items from a list
2. Include separators in the comment (or not) according to the rules in the
	 table / sequence section
	
Example:

	print("Hello", "World"--[[, "foo", "bar"]])
	local elements = { foo, --[[bar,]] }

1. Prefer splitting lines to using several comments per line

Example:

	local r -- radius
	local h -- height

1. Always close multi-line comments with `--]]`

Example:

	--[[
		this code
		does stuff
	--]]

1. Always close inline ranged comments with `]]`

Example:

	local foo --[[Foo]], bar --[[Bar]]

# Variables

1. Use `do ... end` blocks to limit the scope of a local variables
2. Put the `do` keyword on the same line as a related declaration

Example:

	local foo do
		local bar = 2 + 2
		foo = bar * 2
	end

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

# Errors

1. On error, functions should return `nil` + error message
2. Whenever possible, an identifier should be passed as the third argument

Explanation:

`nil` + message is a widely used convention for returning errors in Lua.
However, error messages are not guaranteed to remain unchanged,
this they are poorly suited to identify an error programatically.
Thus it makes sense to pass a third value that can be used to identify an error
condition. This can be a numeric error code, a string or a unique table.

Example:

	local function divide(dividend, divisor)
		if divisor == 0 then
			return nil, 'Attempting to divide by 0', 'division-by-0'
		else
			return dividend / divisor
		end
	end

1. Libraries should never raise errors to the calling code.

Explanation:

Because error-handling mechanisms in Lua are very simple
and there is no mechanism like 'rescue' blocks,
errors are hard to deal with in section of code that require cleanup operations
to keep state (be it internal or external) consistent.
