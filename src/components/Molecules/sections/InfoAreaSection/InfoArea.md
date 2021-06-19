```jsx
import InfoAreaSection from './InfoAreaSection'
// @material-ui/icons
import Chat from '@material-ui/icons/Chat'
import VerifiedUser from '@material-ui/icons/VerifiedUser'
import Fingerprint from '@material-ui/icons/Fingerprint'
;<InfoAreaSection
  description="This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information.Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more."
  title="Let's talk product"
  products={[
    {
      title: 'free Chat',
      description:
        'Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.',
      icon: Chat,
      iconColor: 'info',
      xs: 12,
      sm: 6,
      md: 4
    },
    {
      title: 'Verified Users',
      description:
        'Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.',
      icon: VerifiedUser,
      iconColor: 'success',
      xs: 12,
      sm: 6,
      md: 4
    },
    {
      title: 'fingerprints',
      description:
        'Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.',
      icon: Fingerprint,
      iconColor: 'danger',
      xs: 12,
      sm: 6,
      md: 4
    }
  ]}
/>
```
