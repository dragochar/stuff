import { FC } from "react"
import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const Connected: FC = () => {
    return (
        <VStack spacing={20}>
            <Container>
                <VStack spacing={8}>
                    <Heading
                        color="white"
                        as="h1"
                        size="2xl"
                        noOfLines={1}
                        textAlign="center"
                    >
                        Welcome Capybara
                    </Heading>
                    <Text color="bodyText" fontSize="xl" textAlign="center">
                        Each capybaraa is randomly generated and can be staked when received
                    <Text as="b">$CAPY</Text> Use your <Text as="b"> $CAPY</Text> to upgrade
                    your capybaraa and receive perks within the community
                    </Text>
                </VStack>
            </Container>
            <HStack spacing={10}>
                <Image src="avatar1.png" />
                <Image src="avatar2.png" />
                <Image src="avatar3.png" />
                <Image src="avatar4.png" />
                <Image src="avatar5.png" />
            </HStack>

            <Button bgColor="accent" color="white" maxW="380px">
                <HStack>
                    <Text>mint capybaraa</Text>
                    <ArrowForwardIcon />
                </HStack>
            </Button>
        </VStack>
    )
}

export default Connected