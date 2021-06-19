A very simple Card Area.

```jsx
import Card from './CustomCard'
import CardBody from './CustomCardBody'
;<Card style={{ width: '20rem' }}>
  <CardBody> A very simple card</CardBody>
</Card>
```

A very simple Card with title and subtitle

```jsx
import Card from './CustomCard'
import CardBody from './CustomCardBody'
;<Card style={{ width: '20rem' }}>
  <CardBody title='some title' subtitle="it's magic">
    {' '}
    A very simple card
  </CardBody>
</Card>
```

Checkout the card header with buttons

```jsx
import Card from './CustomCard'
import CardBody from './CustomCardBody'
import CardHeader from './CustomCardHeader'
import EnthalpyButton from '../EnthalpyButton/EnthalpyButton'
import CardFooter from './CustomCardFooter'
;<Card center style={{ width: '20rem' }}>
  <CardHeader color='warning'>featured</CardHeader>
  <CardBody title='some title'>
    <p>With great text comes great responsibilities.</p>
    <EnthalpyButton color='primary'>Do something</EnthalpyButton>
  </CardBody>
  <CardFooter>2 min ago</CardFooter>
</Card>
```

Checkout a card with right alignment

```jsx
import Card from './CustomCard'
import CardBody from './CustomCardBody'
import EnthalpyButton from '../EnthalpyButton/EnthalpyButton'
;<Card right style={{ width: '20rem' }}>
  <CardBody title='Special title treatment'>
    <p>
      With supporting text below as a natural lead-in to additional content.
    </p>
    <EnthalpyButton variant='contained' color='primary'>
      Do something
    </EnthalpyButton>
  </CardBody>
</Card>
```
