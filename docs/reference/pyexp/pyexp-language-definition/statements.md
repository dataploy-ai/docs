# Statements

```
Statement  = DefStmt | IfStmt | ForStmt | SimpleStmt .
SimpleStmt = SmallStmt {';' SmallStmt} [';'] '\n' .
SmallStmt  = ReturnStmt
           | BreakStmt | ContinueStmt | PassStmt
           | AssignStmt
           | ExprStmt
           | LoadStmt
           .
```

## Pass statements

A `pass` statement does nothing. Use a `pass` statement when the syntax requires a statement but no behavior is required, such as the body of a function that does nothing.

```
PassStmt = 'pass' .
```

Example:

```python
def noop():
   pass

def list_to_dict(items):
  # Convert list of tuples to dict
  m = {}
  for k, m[k] in items:
    pass
  return m
```

## Assignments

An assignment statement has the form `lhs = rhs`. It evaluates the expression on the right-hand side then assigns its value (or values) to the variable (or variables) on the left-hand side.

```
AssignStmt = Expression '=' Expression .
```

The expression on the left-hand side is called a _target_. The simplest target is the name of a variable, but a target may also have the form of an index expression, to update the element of a list or dictionary, or a dot expression, to update the field of an object:

```python
k = 1
a[i] = v
m.f = ""
```

Compound targets may consist of a comma-separated list of subtargets, optionally surrounded by parentheses or square brackets, and targets may be nested arbitarily in this way. An assignment to a compound target checks that the right-hand value is a sequence with the same number of elements as the target. Each element of the sequence is then assigned to the corresponding element of the target, recursively applying the same logic.

```python
pi, e = 3.141, 2.718
(x, y) = f()
[zero, one, two] = range(3)

[(a, b), (c, d)] = {"a": "b", "c": "d"}.items()
a, b = {"a": 1, "b": 2}
```

The same process for assigning a value to a target expression is used in `for` loops and in comprehensions.

## Augmented assignments

An augmented assignment, which has the form `lhs op= rhs` updates the variable `lhs` by applying a binary arithmetic operator `op` (one of `+`, `-`, `*`, `/`, `//`, `%`, `&`, `|`, `^`, `<<`, `>>`) to the previous value of `lhs` and the value of `rhs`.

```
AssignStmt = Expression ('+=' | '-=' | '*=' | '/=' | '//=' | '%=' | '&=' | '|=' | '^=' | '<<=' | '>>=') Expression .
```

The left-hand side must be a simple target: a name, an index expression, or a dot expression.

```python
x -= 1
x.filename += ".star"
a[index()] *= 2
```

Any subexpressions in the target on the left-hand side are evaluated exactly once, before the evaluation of `rhs`. The first two assignments above are thus equivalent to:

```python
x = x - 1
x.filename = x.filename + ".star"
```

and the third assignment is similar in effect to the following two statements but does not declare a new temporary variable `i`:

```python
i = index()
a[i] = a[i] * 2
```

## Function definitions

A `def` statement creates a named function and assigns it to a variable.

```
DefStmt = 'def' identifier '(' [Parameters [',']] ')' ':' Suite .
```

Example:

```python
def twice(x):
    return x * 2

str(twice)              # "<function twice>"
twice(2)                # 4
twice("two")            # "twotwo"
```

The function's name is preceded by the `def` keyword and followed by the parameter list (which is enclosed in parentheses), a colon, and then an indented block of statements which form the body of the function.

The parameter list is a comma-separated list whose elements are of several kinds. First come zero or more required parameters, which are simple identifiers; all calls must provide an argument value for these parameters.

The required parameters are followed by zero or more optional parameters, of the form `name=expression`. The expression specifies the default value for the parameter for use in calls that do not provide an argument value for it.

The required parameters are optionally followed by a single parameter name preceded by a `*`. This is the called the _varargs_ parameter, and it accumulates surplus positional arguments specified by a call. It is conventionally named `*args`.

The varargs parameter may be followed by zero or more parameters, again of the forms `name` or `name=expression`, but these parameters differ from earlier ones in that they are _keyword-only_: if a call provides their values, it must do so as keyword arguments, not positional ones.

```python
def f(a, *, b=2, c):
  print(a, b, c)

f(1)                    # error: function f missing 1 argument (c)
f(1, 3)                 # error: function f accepts 1 positional argument (2 given)
f(1, c=3)               # "1 2 3"

def g(a, *args, b=2, c):
  print(a, b, c, args)

g(1, 3)                 # error: function g missing 1 argument (c)
g(1, 4, c=3)            # "1 2 3 (4,)"
```

A non-variadic function may also declare keyword-only parameters, by using a bare `*` in place of the `*args` parameter. This form does not declare a parameter but marks the boundary between the earlier parameters and the keyword-only parameters. This form must be followed by at least one optional parameter.

Finally, there may be an optional parameter name preceded by `**`. This is called the _keyword arguments_ parameter, and accumulates in a dictionary any surplus `name=value` arguments that do not match a prior parameter. It is conventionally named `**kwargs`.

The final parameter may be followed by a trailing comma.

Here are some example parameter lists:

```python
def f(): pass
def f(a, b, c): pass
def f(a, b, c=1): pass
def f(a, b, c=1, *args): pass
def f(a, b, c=1, *args, **kwargs): pass
def f(**kwargs): pass
def f(a, b, c=1, *, d=1): pass

def f(
  a,
  *args,
  **kwargs,
)
```

Execution of a `def` statement creates a new function object. The function object contains: the syntax of the function body; the default value for each optional parameter; the value of each free variable referenced within the function body; and the global dictionary of the current module.

## Return statements

A `return` statement ends the execution of a function and returns a value to the caller of the function.

```
ReturnStmt = 'return' [Expression] .
```

A return statement may have zero, one, or more result expressions separated by commas. With no expressions, the function has the result `None`. With a single expression, the function's result is the value of that expression. With multiple expressions, the function's result is a tuple.

```python
return                  # returns None
return 1                # returns 1
return 1, 2             # returns (1, 2)
```

## Expression statements

An expression statement evaluates an expression and discards its result.

```
ExprStmt = Expression .
```

Any expression may be used as a statement, but an expression statement is most often used to call a function for its side effects.

```python
list.append(1)
```

## If statements

An `if` statement evaluates an expression (the _condition_), then, if the truth value of the condition is `True`, executes a list of statements.

```
IfStmt = 'if' Test ':' Suite {'elif' Test ':' Suite} ['else' ':' Suite] .
```

Example:

```python
if score >= 100:
    print("You win!")
    return
```

An `if` statement may have an `else` block defining a second list of statements to be executed if the condition is false.

```python
if score >= 100:
        print("You win!")
        return
else:
        print("Keep trying...")
        continue
```

It is common for the `else` block to contain another `if` statement. To avoid increasing the nesting depth unnecessarily, the `else` and following `if` may be combined as `elif`:

```python
if x > 0:
        result = +1
elif x < 0:
        result = -1
else:
        result = 0
```

An `if` statement is permitted only within a function definition. An `if` statement at top level results in a static error.

**Implementation note:** The Go implementation of Starlark permits `if`-statements to appear at top level if the `-globalreassign` flag is enabled.

## While loops

A `while` loop evaluates an expression (the _condition_) and if the truth value of the condition is `True`, it executes a list of statement and repeats the process until the truth value of the condition becomes `False`.

```
WhileStmt = 'while' Test ':' Suite .
```

Example:

```python
while n > 0:
    r = r + n
    n = n - 1
```

A `while` statement is permitted only within a function definition. A `while` statement at top level results in a static error.

**Implementation note:** The Go implementation of Starlark permits `while` loops only if the `-recursion` flag is enabled. A `while` statement is permitted at top level if the `-globalreassign` flag is enabled.

## For loops

A `for` loop evaluates its operand, which must be an iterable value. Then, for each element of the iterable's sequence, the loop assigns the successive element values to one or more variables and executes a list of statements, the _loop body_.

```
ForStmt = 'for' LoopVariables 'in' Expression ':' Suite .
```

Example:

```python
for x in range(10):
   print(10)
```

The assignment of each value to the loop variables follows the same rules as an ordinary assignment. In this example, two-element lists are repeatedly assigned to the pair of variables (a, i):

```python
for a, i in [["a", 1], ["b", 2], ["c", 3]]:
  print(a, i)                          # prints "a 1", "b 2", "c 3"
```

Because Starlark loops always iterate over a finite sequence, they are guaranteed to terminate, unlike loops in most languages which can execute an arbitrary and perhaps unbounded number of iterations.

Within the body of a `for` loop, `break` and `continue` statements may be used to stop the execution of the loop or advance to the next iteration.

In Starlark, a `for` loop is permitted only within a function definition. A `for` loop at top level results in a static error.

**Implementation note:** The Go implementation of Starlark permits loops to appear at top level if the `-globalreassign` flag is enabled.

## Break and Continue

The `break` and `continue` statements terminate the current iteration of a `for` loop. Whereas the `continue` statement resumes the loop at the next iteration, a `break` statement terminates the entire loop.

```
BreakStmt    = 'break' .
ContinueStmt = 'continue' .
```

Example:

```python
for x in range(10):
    if x%2 == 1:
        continue        # skip odd numbers
    if x > 7:
        break           # stop at 8
    print(x)            # prints "0", "2", "4", "6"
```

Both statements affect only the innermost lexically enclosing loop. It is a static error to use a `break` or `continue` statement outside a loop.

## Load statements

The `load` statement loads another Starlark module, extracts one or more values from it, and binds them to names in the current module.

Syntactically, a load statement looks like a function call `load(...)`.

```
LoadStmt = 'load' '(' string {',' [identifier '='] string} [','] ')' .
```

A load statement requires at least two "arguments". The first must be a literal string; it identifies the module to load. Its interpretation is determined by the application into which the Starlark interpreter is embedded, and is not specified here.

During execution, the application determines what action to take for a load statement. A typical implementation locates and executes a Starlark file, populating a cache of files executed so far to avoid duplicate work, to obtain a module, which is a mapping from global names to values.

The remaining arguments are a mixture of literal strings, such as `"x"`, or named literal strings, such as `y="x"`.

The literal string (`"x"`), which must denote a valid identifier not starting with `_`, specifies the name to extract from the loaded module. In effect, names starting with `_` are not exported. The name (`y`) specifies the local name; if no name is given, the local name matches the quoted name.

```python
load("module.star", "x", "y", "z")       # assigns x, y, and z
load("module.star", "x", y2="y", "z")    # assigns x, y2, and z
```

A load statement may not be nested inside any other statement.

## Module Execution

Each Starlark file defines a _module_, which is a mapping from the names of global variables to their values. When a Starlark file is executed, whether directly by the application or indirectly through a `load` statement, a new Starlark thread is created, and this thread executes all the top-level statements in the file. Because if-statements and for-loops cannot appear outside of a function, control flows from top to bottom.

If execution reaches the end of the file, module initialization is successful. At that point, the value of each of the module's global variables is frozen, rendering subsequent mutation impossible. The module is then ready for use by another Starlark thread, such as one executing a load statement. Such threads may access values or call functions defined in the loaded module.

A Starlark thread may carry state on behalf of the application into which it is embedded, and application-defined functions may behave differently depending on this thread state. Because module initialization always occurs in a new thread, thread state is never carried from a higher-level module into a lower-level one. The initialization behavior of a module is thus independent of whichever module triggered its initialization.

If a Starlark thread encounters an error, execution stops and the error is reported to the application, along with a backtrace showing the stack of active function calls at the time of the error. If an error occurs during initialization of a Starlark module, any active `load` statements waiting for initialization of the module also fail.

Starlark provides no mechanism by which errors can be handled within the language.
