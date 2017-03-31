Paw is a great app found here:

Can create dynamic values from Javascript in the app:

```
function evaluate(context) {
  return context.getEnvironmentVariableByName('authorization-login').getCurrentValue() ||                             context.getEnvironmentVariableByName('authorization-signup').getCurrentValue();
};
```
