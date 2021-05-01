import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

const options = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
];

function App() {
  const [text, setText] = useState('init');

  const handleClick = value => {
    setText(value);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
          </VStack>
          <Text data-testid="value">{text.toUpperCase()}</Text>
          {options.map(option => (
            <Button onClick={() => handleClick(option)}>{option}</Button>
          ))}
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
