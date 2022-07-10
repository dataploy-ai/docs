"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},o="Statements",l={unversionedId:"reference/pyexp/pyexp-language-definition/statements",id:"reference/pyexp/pyexp-language-definition/statements",title:"Statements",description:"Pass statements",source:"@site/docs/reference/pyexp/pyexp-language-definition/statements.md",sourceDirName:"reference/pyexp/pyexp-language-definition",slug:"/reference/pyexp/pyexp-language-definition/statements",permalink:"/docs/reference/pyexp/pyexp-language-definition/statements",draft:!1,editUrl:"https://github.com/dataploy-ai/docs/tree/master/docs/reference/pyexp/pyexp-language-definition/statements.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"Name binding and variables",permalink:"/docs/reference/pyexp/pyexp-language-definition/name-binding-and-variables"},next:{title:"Value concepts",permalink:"/docs/reference/pyexp/pyexp-language-definition/value-concepts"}},s={},p=[{value:"Pass statements",id:"pass-statements",level:2},{value:"Assignments",id:"assignments",level:2},{value:"Augmented assignments",id:"augmented-assignments",level:2},{value:"Function definitions",id:"function-definitions",level:2},{value:"Return statements",id:"return-statements",level:2},{value:"Expression statements",id:"expression-statements",level:2},{value:"If statements",id:"if-statements",level:2},{value:"While loops",id:"while-loops",level:2},{value:"For loops",id:"for-loops",level:2},{value:"Break and Continue",id:"break-and-continue",level:2},{value:"Load statements",id:"load-statements",level:2},{value:"Module Execution",id:"module-execution",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"statements"},"Statements"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Statement  = DefStmt | IfStmt | ForStmt | SimpleStmt .\nSimpleStmt = SmallStmt {';' SmallStmt} [';'] '\\n' .\nSmallStmt  = ReturnStmt\n           | BreakStmt | ContinueStmt | PassStmt\n           | AssignStmt\n           | ExprStmt\n           | LoadStmt\n           .\n")),(0,i.kt)("h2",{id:"pass-statements"},"Pass statements"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"pass")," statement does nothing. Use a ",(0,i.kt)("inlineCode",{parentName:"p"},"pass")," statement when the syntax requires a statement but no behavior is required, such as the body of a function that does nothing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PassStmt = 'pass' .\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def noop():\n   pass\n\ndef list_to_dict(items):\n  # Convert list of tuples to dict\n  m = {}\n  for k, m[k] in items:\n    pass\n  return m\n")),(0,i.kt)("h2",{id:"assignments"},"Assignments"),(0,i.kt)("p",null,"An assignment statement has the form ",(0,i.kt)("inlineCode",{parentName:"p"},"lhs = rhs"),". It evaluates the expression on the right-hand side then assigns its value (or values) to the variable (or variables) on the left-hand side."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"AssignStmt = Expression '=' Expression .\n")),(0,i.kt)("p",null,"The expression on the left-hand side is called a ",(0,i.kt)("em",{parentName:"p"},"target"),". The simplest target is the name of a variable, but a target may also have the form of an index expression, to update the element of a list or dictionary, or a dot expression, to update the field of an object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'k = 1\na[i] = v\nm.f = ""\n')),(0,i.kt)("p",null,"Compound targets may consist of a comma-separated list of subtargets, optionally surrounded by parentheses or square brackets, and targets may be nested arbitarily in this way. An assignment to a compound target checks that the right-hand value is a sequence with the same number of elements as the target. Each element of the sequence is then assigned to the corresponding element of the target, recursively applying the same logic."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'pi, e = 3.141, 2.718\n(x, y) = f()\n[zero, one, two] = range(3)\n\n[(a, b), (c, d)] = {"a": "b", "c": "d"}.items()\na, b = {"a": 1, "b": 2}\n')),(0,i.kt)("p",null,"The same process for assigning a value to a target expression is used in ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," loops and in comprehensions."),(0,i.kt)("h2",{id:"augmented-assignments"},"Augmented assignments"),(0,i.kt)("p",null,"An augmented assignment, which has the form ",(0,i.kt)("inlineCode",{parentName:"p"},"lhs op= rhs")," updates the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"lhs")," by applying a binary arithmetic operator ",(0,i.kt)("inlineCode",{parentName:"p"},"op")," (one of ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"//"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"%"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"&"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"|"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"^"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<<"),", ",(0,i.kt)("inlineCode",{parentName:"p"},">>"),") to the previous value of ",(0,i.kt)("inlineCode",{parentName:"p"},"lhs")," and the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"rhs"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"AssignStmt = Expression ('+=' | '-=' | '*=' | '/=' | '//=' | '%=' | '&=' | '|=' | '^=' | '<<=' | '>>=') Expression .\n")),(0,i.kt)("p",null,"The left-hand side must be a simple target: a name, an index expression, or a dot expression."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'x -= 1\nx.filename += ".star"\na[index()] *= 2\n')),(0,i.kt)("p",null,"Any subexpressions in the target on the left-hand side are evaluated exactly once, before the evaluation of ",(0,i.kt)("inlineCode",{parentName:"p"},"rhs"),". The first two assignments above are thus equivalent to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'x = x - 1\nx.filename = x.filename + ".star"\n')),(0,i.kt)("p",null,"and the third assignment is similar in effect to the following two statements but does not declare a new temporary variable ",(0,i.kt)("inlineCode",{parentName:"p"},"i"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"i = index()\na[i] = a[i] * 2\n")),(0,i.kt)("h2",{id:"function-definitions"},"Function definitions"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"def")," statement creates a named function and assigns it to a variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DefStmt = 'def' identifier '(' [Parameters [',']] ')' ':' Suite .\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def twice(x):\n    return x * 2\n\nstr(twice)              # "<function twice>"\ntwice(2)                # 4\ntwice("two")            # "twotwo"\n')),(0,i.kt)("p",null,"The function's name is preceded by the ",(0,i.kt)("inlineCode",{parentName:"p"},"def")," keyword and followed by the parameter list (which is enclosed in parentheses), a colon, and then an indented block of statements which form the body of the function."),(0,i.kt)("p",null,"The parameter list is a comma-separated list whose elements are of several kinds. First come zero or more required parameters, which are simple identifiers; all calls must provide an argument value for these parameters."),(0,i.kt)("p",null,"The required parameters are followed by zero or more optional parameters, of the form ",(0,i.kt)("inlineCode",{parentName:"p"},"name=expression"),". The expression specifies the default value for the parameter for use in calls that do not provide an argument value for it."),(0,i.kt)("p",null,"The required parameters are optionally followed by a single parameter name preceded by a ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),". This is the called the ",(0,i.kt)("em",{parentName:"p"},"varargs")," parameter, and it accumulates surplus positional arguments specified by a call. It is conventionally named ",(0,i.kt)("inlineCode",{parentName:"p"},"*args"),"."),(0,i.kt)("p",null,"The varargs parameter may be followed by zero or more parameters, again of the forms ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"name=expression"),", but these parameters differ from earlier ones in that they are ",(0,i.kt)("em",{parentName:"p"},"keyword-only"),": if a call provides their values, it must do so as keyword arguments, not positional ones."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def f(a, *, b=2, c):\n  print(a, b, c)\n\nf(1)                    # error: function f missing 1 argument (c)\nf(1, 3)                 # error: function f accepts 1 positional argument (2 given)\nf(1, c=3)               # "1 2 3"\n\ndef g(a, *args, b=2, c):\n  print(a, b, c, args)\n\ng(1, 3)                 # error: function g missing 1 argument (c)\ng(1, 4, c=3)            # "1 2 3 (4,)"\n')),(0,i.kt)("p",null,"A non-variadic function may also declare keyword-only parameters, by using a bare ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," in place of the ",(0,i.kt)("inlineCode",{parentName:"p"},"*args")," parameter. This form does not declare a parameter but marks the boundary between the earlier parameters and the keyword-only parameters. This form must be followed by at least one optional parameter."),(0,i.kt)("p",null,"Finally, there may be an optional parameter name preceded by ",(0,i.kt)("inlineCode",{parentName:"p"},"**"),". This is called the ",(0,i.kt)("em",{parentName:"p"},"keyword arguments")," parameter, and accumulates in a dictionary any surplus ",(0,i.kt)("inlineCode",{parentName:"p"},"name=value")," arguments that do not match a prior parameter. It is conventionally named ",(0,i.kt)("inlineCode",{parentName:"p"},"**kwargs"),"."),(0,i.kt)("p",null,"The final parameter may be followed by a trailing comma."),(0,i.kt)("p",null,"Here are some example parameter lists:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def f(): pass\ndef f(a, b, c): pass\ndef f(a, b, c=1): pass\ndef f(a, b, c=1, *args): pass\ndef f(a, b, c=1, *args, **kwargs): pass\ndef f(**kwargs): pass\ndef f(a, b, c=1, *, d=1): pass\n\ndef f(\n  a,\n  *args,\n  **kwargs,\n)\n")),(0,i.kt)("p",null,"Execution of a ",(0,i.kt)("inlineCode",{parentName:"p"},"def")," statement creates a new function object. The function object contains: the syntax of the function body; the default value for each optional parameter; the value of each free variable referenced within the function body; and the global dictionary of the current module."),(0,i.kt)("h2",{id:"return-statements"},"Return statements"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," statement ends the execution of a function and returns a value to the caller of the function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ReturnStmt = 'return' [Expression] .\n")),(0,i.kt)("p",null,"A return statement may have zero, one, or more result expressions separated by commas. With no expressions, the function has the result ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),". With a single expression, the function's result is the value of that expression. With multiple expressions, the function's result is a tuple."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"return                  # returns None\nreturn 1                # returns 1\nreturn 1, 2             # returns (1, 2)\n")),(0,i.kt)("h2",{id:"expression-statements"},"Expression statements"),(0,i.kt)("p",null,"An expression statement evaluates an expression and discards its result."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ExprStmt = Expression .\n")),(0,i.kt)("p",null,"Any expression may be used as a statement, but an expression statement is most often used to call a function for its side effects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"list.append(1)\n")),(0,i.kt)("h2",{id:"if-statements"},"If statements"),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement evaluates an expression (the ",(0,i.kt)("em",{parentName:"p"},"condition"),"), then, if the truth value of the condition is ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),", executes a list of statements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"IfStmt = 'if' Test ':' Suite {'elif' Test ':' Suite} ['else' ':' Suite] .\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'if score >= 100:\n    print("You win!")\n    return\n')),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement may have an ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," block defining a second list of statements to be executed if the condition is false."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'if score >= 100:\n        print("You win!")\n        return\nelse:\n        print("Keep trying...")\n        continue\n')),(0,i.kt)("p",null,"It is common for the ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," block to contain another ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement. To avoid increasing the nesting depth unnecessarily, the ",(0,i.kt)("inlineCode",{parentName:"p"},"else")," and following ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," may be combined as ",(0,i.kt)("inlineCode",{parentName:"p"},"elif"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"if x > 0:\n        result = +1\nelif x < 0:\n        result = -1\nelse:\n        result = 0\n")),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement is permitted only within a function definition. An ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement at top level results in a static error."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Implementation note:")," The Go implementation of Starlark permits ",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"-statements to appear at top level if the ",(0,i.kt)("inlineCode",{parentName:"p"},"-globalreassign")," flag is enabled."),(0,i.kt)("h2",{id:"while-loops"},"While loops"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," loop evaluates an expression (the ",(0,i.kt)("em",{parentName:"p"},"condition"),") and if the truth value of the condition is ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),", it executes a list of statement and repeats the process until the truth value of the condition becomes ",(0,i.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"WhileStmt = 'while' Test ':' Suite .\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"while n > 0:\n    r = r + n\n    n = n - 1\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," statement is permitted only within a function definition. A ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," statement at top level results in a static error."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Implementation note:")," The Go implementation of Starlark permits ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," loops only if the ",(0,i.kt)("inlineCode",{parentName:"p"},"-recursion")," flag is enabled. A ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," statement is permitted at top level if the ",(0,i.kt)("inlineCode",{parentName:"p"},"-globalreassign")," flag is enabled."),(0,i.kt)("h2",{id:"for-loops"},"For loops"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," loop evaluates its operand, which must be an iterable value. Then, for each element of the iterable's sequence, the loop assigns the successive element values to one or more variables and executes a list of statements, the ",(0,i.kt)("em",{parentName:"p"},"loop body"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ForStmt = 'for' LoopVariables 'in' Expression ':' Suite .\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"for x in range(10):\n   print(10)\n")),(0,i.kt)("p",null,"The assignment of each value to the loop variables follows the same rules as an ordinary assignment. In this example, two-element lists are repeatedly assigned to the pair of variables (a, i):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'for a, i in [["a", 1], ["b", 2], ["c", 3]]:\n  print(a, i)                          # prints "a 1", "b 2", "c 3"\n')),(0,i.kt)("p",null,"Because Starlark loops always iterate over a finite sequence, they are guaranteed to terminate, unlike loops in most languages which can execute an arbitrary and perhaps unbounded number of iterations."),(0,i.kt)("p",null,"Within the body of a ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," loop, ",(0,i.kt)("inlineCode",{parentName:"p"},"break")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"continue")," statements may be used to stop the execution of the loop or advance to the next iteration."),(0,i.kt)("p",null,"In Starlark, a ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," loop is permitted only within a function definition. A ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," loop at top level results in a static error."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Implementation note:")," The Go implementation of Starlark permits loops to appear at top level if the ",(0,i.kt)("inlineCode",{parentName:"p"},"-globalreassign")," flag is enabled."),(0,i.kt)("h2",{id:"break-and-continue"},"Break and Continue"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"break")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"continue")," statements terminate the current iteration of a ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," loop. Whereas the ",(0,i.kt)("inlineCode",{parentName:"p"},"continue")," statement resumes the loop at the next iteration, a ",(0,i.kt)("inlineCode",{parentName:"p"},"break")," statement terminates the entire loop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BreakStmt    = 'break' .\nContinueStmt = 'continue' .\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'for x in range(10):\n    if x%2 == 1:\n        continue        # skip odd numbers\n    if x > 7:\n        break           # stop at 8\n    print(x)            # prints "0", "2", "4", "6"\n')),(0,i.kt)("p",null,"Both statements affect only the innermost lexically enclosing loop. It is a static error to use a ",(0,i.kt)("inlineCode",{parentName:"p"},"break")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"continue")," statement outside a loop."),(0,i.kt)("h2",{id:"load-statements"},"Load statements"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"load")," statement loads another Starlark module, extracts one or more values from it, and binds them to names in the current module."),(0,i.kt)("p",null,"Syntactically, a load statement looks like a function call ",(0,i.kt)("inlineCode",{parentName:"p"},"load(...)"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"LoadStmt = 'load' '(' string {',' [identifier '='] string} [','] ')' .\n")),(0,i.kt)("p",null,'A load statement requires at least two "arguments". The first must be a literal string; it identifies the module to load. Its interpretation is determined by the application into which the Starlark interpreter is embedded, and is not specified here.'),(0,i.kt)("p",null,"During execution, the application determines what action to take for a load statement. A typical implementation locates and executes a Starlark file, populating a cache of files executed so far to avoid duplicate work, to obtain a module, which is a mapping from global names to values."),(0,i.kt)("p",null,"The remaining arguments are a mixture of literal strings, such as ",(0,i.kt)("inlineCode",{parentName:"p"},'"x"'),", or named literal strings, such as ",(0,i.kt)("inlineCode",{parentName:"p"},'y="x"'),"."),(0,i.kt)("p",null,"The literal string (",(0,i.kt)("inlineCode",{parentName:"p"},'"x"'),"), which must denote a valid identifier not starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"_"),", specifies the name to extract from the loaded module. In effect, names starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," are not exported. The name (",(0,i.kt)("inlineCode",{parentName:"p"},"y"),") specifies the local name; if no name is given, the local name matches the quoted name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'load("module.star", "x", "y", "z")       # assigns x, y, and z\nload("module.star", "x", y2="y", "z")    # assigns x, y2, and z\n')),(0,i.kt)("p",null,"A load statement may not be nested inside any other statement."),(0,i.kt)("h2",{id:"module-execution"},"Module Execution"),(0,i.kt)("p",null,"Each Starlark file defines a ",(0,i.kt)("em",{parentName:"p"},"module"),", which is a mapping from the names of global variables to their values. When a Starlark file is executed, whether directly by the application or indirectly through a ",(0,i.kt)("inlineCode",{parentName:"p"},"load")," statement, a new Starlark thread is created, and this thread executes all the top-level statements in the file. Because if-statements and for-loops cannot appear outside of a function, control flows from top to bottom."),(0,i.kt)("p",null,"If execution reaches the end of the file, module initialization is successful. At that point, the value of each of the module's global variables is frozen, rendering subsequent mutation impossible. The module is then ready for use by another Starlark thread, such as one executing a load statement. Such threads may access values or call functions defined in the loaded module."),(0,i.kt)("p",null,"A Starlark thread may carry state on behalf of the application into which it is embedded, and application-defined functions may behave differently depending on this thread state. Because module initialization always occurs in a new thread, thread state is never carried from a higher-level module into a lower-level one. The initialization behavior of a module is thus independent of whichever module triggered its initialization."),(0,i.kt)("p",null,"If a Starlark thread encounters an error, execution stops and the error is reported to the application, along with a backtrace showing the stack of active function calls at the time of the error. If an error occurs during initialization of a Starlark module, any active ",(0,i.kt)("inlineCode",{parentName:"p"},"load")," statements waiting for initialization of the module also fail."),(0,i.kt)("p",null,"Starlark provides no mechanism by which errors can be handled within the language."))}d.isMDXComponent=!0}}]);