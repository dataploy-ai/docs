# struct

A generic object with fields.

Structs fields cannot be reassigned once the struct is created. Two structs are equal if they have the same fields and if corresponding field values are equal.

## Members

* [#struct-1](struct.md#struct-1 "mention")

### struct

```
struct struct(**kwargs)
```

Creates an immutable struct using the keyword arguments as attributes. It is used to group multiple values together. Example:\


```
s = struct(x = 2, y = 3)
return s.x + getattr(s, "y")  # returns 5
```

#### Parameters

| Parameter | Description                               |
|-----------|-------------------------------------------|
| `kwargs`  | default = {}<br/>Dictionary of arguments. |


