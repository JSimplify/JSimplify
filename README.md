# JSimplify

![JSimplify logo](https://github.com/JSimplify/JSimplify/assets/96381087/024094d1-3896-417d-a819-558a7c270dca)

JSimplify : additionnal functions and javascript improvements.


## Main Objectives

The main objective for this project is to provide additionnal functions to javascript and to rewrite native function in order to improve them.


## How to use

### Installation

In a terminal, run the following command
```Bash
npm install jsimplify
```

### Tests

In a terminal, run the following command
```Bash
npm run jsimplify_tests
```


## Key Features

Here is a list of all the functions present in this project. The list is divided into two parts, the first one concerns the new functions, and the second one, the JavaScript functions that we have rewritten.

### New functions

| Function | Description | Usage |
|:---------|:------------|:------|
| isSet(variable) | Determine if the given variable is set.<br>**not null and not undefined**. | `isSet("toto")` |
| areSet(strict, ...variables) | Determine if the given variables are set.<br>if strict set to true, all variables must be **not null and not undefined**.<br>if stric set to false, only one must be **not null and not undefined**. | `areSet(true, "toto", 2)`<br>`areSet(false, ["toto", 2])` |

### Rewriten functions

| Function | Description | Usage |
|:---------|:------------|:------|
| Object.prototype.isEmpty() | Determine if the variable is empty.<br>**[], {}, or ""**. | `[].isEmpty()` |
| Object.prototype.asString() | Convert the variable into a string. | `{toto: "test"}.asString()` |
| Math.average(...numbers) | Calculate the average value of a list of numbers. | `Math.average(1, 2, 3)`<br>`Math.average(1, [2, 3, ["4", "5"]])` |
| Math.sum(...numbers) | Calculate the sum value of a list of numbers. | `Math.sum(1, 2, 3)`<br>`Math.sum(1, [2, 3, ["4", "5"]])` |
| Math.roundPrecisely(number, precision) | Round a number to the given precision. | `Math.roundPrecisely(378.245, 2)`<br>`Math.roundPrecisely(378.245, -1)` |


## Issues & Pull requests

In order to participate in this project, you must create an issue following the various available templates (bug, improvement, new features, issue).

Once your issue is created, a team member will come to validate or reject the issue.

When the issue is validated, you can create your pull request (PR) and link it to its corresponding issue.

Here are some important rules to follow for issues:

- You must provide a minimum amount of information to make the context understandable for everyone.

- You must adhere to the code of conduct during any interaction with the project's community.

- If you wish to participate in the project, please refer to INTERNAL.md to understand the rules and standards established for the project.
