import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Michel Carvalho</Text>
          <Text color="gray.300" fontSize="small">
            michelruanalvescarvalho@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Michel Carvalho" src="https://github.com/m1ch3l2021.png" />
    </Flex>
  )
}