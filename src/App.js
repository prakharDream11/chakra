import {Button,CircularProgress ,Input , Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Skeleton, Stack} from '@chakra-ui/react'

function App() {
  return (
    <>
    <Button colorScheme='blue'>Button</Button>
    <CircularProgress isIndeterminate color='green.300' />
    <Input placeholder='Basic usage' />
    <Alert status='error'>
  <AlertIcon />
  <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
  <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
  <CloseButton position='absolute' right='8px' top='8px' />
</Alert>
<Stack>
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  </Stack>
    </>
  );
}

export default App;
