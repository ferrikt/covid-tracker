import { Flex, Spinner } from 'theme-ui';
import React from 'react';

const Loading = () => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <Spinner strokeWidth="4" color="red.500" />
    </Flex>
  );
};

export default Loading;
