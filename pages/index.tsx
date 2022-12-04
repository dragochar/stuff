import { Box, Center, Spacer, Stack } from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"
import NavBar from "../components/NavBar"
import Disconnected from "../components/Disconnected"
import { useWallet } from "@solana/wallet-adapter-react"
import Connected from "../components/Connected"

const Home: NextPage = () => {

  const { connected } = useWallet();

  return (
    <div className="">
      <Head>
        <title>CapyCoin</title>
        <meta name="The NFT Collection for capybara enjoyoors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="full"
        h="calc(100vh)"
        bgImage={"url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
					<NavBar />
          <Spacer />
          <Center>
            {!connected ? <Disconnected /> : <Connected />}
          </Center>
          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/zacyungblut"
                target="_blank"
                rel="noopener noreferrer"
              >
                built by @zacyungblut
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  )
}

export default Home