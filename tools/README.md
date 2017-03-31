Paw is a great app found here: [https://paw.cloud/](https://paw.cloud/)

Typically I will place a Paw project here with the API specced out.

Paw is awesome as it supports dynamic values from Javascript in the app:

```
function evaluate(context) {
  return context.getEnvironmentVariableByName('authorization-login').getCurrentValue() ||                             context.getEnvironmentVariableByName('authorization-signup').getCurrentValue();
};
```

Where one can aggregate values from previous requests in new ones.

Recommended. :)
