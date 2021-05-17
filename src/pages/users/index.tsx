import NextLink from 'next/link';
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Pagination } from '../../components/Pagination';

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>
              Usuários
            </Heading>

            <NextLink href='#' passHref>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='pink'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                Criar novo
              </Button>
            </NextLink>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' w='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuáro</Th>
                <Th>Data de cadastro</Th>
                <Th w='8'></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Diogo Sales</Text>
                    <Text fontSize='sm' fontWeight='normal' color='gray.300'>diogosalesdev@gmail.com</Text>
                  </Box>
                </Td>
                <Td>17 de Maio de 2021</Td>
                <Td>
                  <NextLink href='#' passHref>
                    <Button
                      as='a'
                      size='sm'
                      fontSize='sm'
                      colorScheme='purple'
                      leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                    >
                      Editar
                    </Button>
                  </NextLink>
                </Td>
              </Tr>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Diogo Sales</Text>
                    <Text fontSize='sm' fontWeight='normal' color='gray.300'>diogosalesdev@gmail.com</Text>
                  </Box>
                </Td>
                <Td>17 de Maio de 2021</Td>
                <Td>
                  <NextLink href='#' passHref>
                    <Button
                      as='a'
                      size='sm'
                      fontSize='sm'
                      colorScheme='purple'
                      leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                    >
                      Editar
                    </Button>
                  </NextLink>
                </Td>
              </Tr>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Diogo Sales</Text>
                    <Text fontSize='sm' fontWeight='normal' color='gray.300'>diogosalesdev@gmail.com</Text>
                  </Box>
                </Td>
                <Td>17 de Maio de 2021</Td>
                <Td>
                  <NextLink href='#' passHref>
                    <Button
                      as='a'
                      size='sm'
                      fontSize='sm'
                      colorScheme='purple'
                      leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                    >
                      Editar
                    </Button>
                  </NextLink>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />

        </Box>
      </Flex>
    </Box>
  )
}