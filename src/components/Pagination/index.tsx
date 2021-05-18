import { Box, Stack } from "@chakra-ui/react";
import { PaginatioItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
      direction='row'
      mt='8'
      justify='space-between'
      align='center'
      spacing='6'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack
        direction='row'
        spacing='2'
      >
        <PaginatioItem number={1} isCurrent />
        <PaginatioItem number={2} />
        <PaginatioItem number={3} />
        <PaginatioItem number={4} />
        <PaginatioItem number={5} />
        <PaginatioItem number={6} />
        
      </Stack>

    </Stack>
  )
}