import { Box, Container, Flex, Heading, HStack, IconButton, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Heading size="md">MyApp</Heading>
        <Spacer />
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Contact</Text>
        </HStack>
        <IconButton
          aria-label="Menu"
          icon={<FaBars />}
          display={{ base: "flex", md: "none" }}
          variant="outline"
          colorScheme="whiteAlpha"
        />
      </Flex>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="80vh">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>Start building your amazing application!</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;