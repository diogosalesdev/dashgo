import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Diogo Sales</Text>
        <Text color='gray.300' fontSize='small'>
          diogosalesdev@gmail.com
        </Text>
      </Box>

      <Avatar
        size='md'
        name='Diogo Sales'
        src='https://avatars.githubusercontent.com/u/65976669?v=4' 
      />
    </Flex>
  )
}