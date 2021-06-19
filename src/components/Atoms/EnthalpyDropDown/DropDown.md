A very simple DropDown.

```jsx
import EnthalpyDropDown from './EnthalpyDropDown'
;<EnthalpyDropDown
  buttonText='Simple one'
  dropdownList={[
    'Action',
    'Another action',
    'Something else here',
    { divider: true },
    'Separated link',
    { divider: true },
    'One more separated link'
  ]}
  caret
  hoverColor='primary'
/>
```

A very simple DropDown.

```jsx
import EnthalpyDropDown from './EnthalpyDropDown'
;<EnthalpyDropDown
  dropup
  dropdownHeader='Dropdown header'
  buttonText='Dropup'
  buttonProps={{
    round: true,
    color: 'primary',
    variant: 'contained'
  }}
  dropdownList={[
    'Action',
    'Another action',
    'Something else here',
    { divider: true },
    'Separated link',
    { divider: true },
    'One more separated link'
  ]}
  caret
  hoverColor='rose'
/>
```
