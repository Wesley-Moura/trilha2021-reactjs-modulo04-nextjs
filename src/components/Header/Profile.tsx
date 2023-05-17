import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Wesley Lacerda</Text>
          <Text color="gray.300" fontSize="small">
            teste@teste.com.br
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Wesley Lacerda" src="https://github.com/diego3g.png" />
    </Flex>
  )
}