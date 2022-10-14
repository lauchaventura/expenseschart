import Head from "next/head";

import {Bar} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

import {Box, Image, Spacer, Text, Flex, Stack, Divider} from "@chakra-ui/react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export default function Home() {
  const state = {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: " ",
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: 8,
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
      },
    ],
  };
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='./images/favicon.png' />
        <title>Expenses Chart Component</title>
      </Head>
      <Box width='100%' height='100vh' bg='cream' position='relative'>
        <Box
          align='center'
          alignItems='center'
          position='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)'
        >
          <Box></Box>
          <Stack maxW='350px' bg='softred' borderRadius='lg'>
            <Flex p={4} alignItems='center'>
              <Box align='start' color='white'>
                <Text>My Balance</Text>
                <Text fontSize='22px' fontWeight='bold'>
                  $921.48
                </Text>
              </Box>
              <Spacer />
              <Box>
                <Image src='./images/logo.svg' />
              </Box>
            </Flex>
          </Stack>
          <Box p={4} bg='verypaleorange' maxW='350px' mt={2} borderRadius='lg'>
            <Stack>
              <Text fontSize='20px' fontWeight='bold' align='start'>
                Spending - Last 7 days
              </Text>
              <Bar data={state} />
            </Stack>
            <Divider pt={4} />
            <Stack maxW='350px' color='darkbrown' borderRadius='lg'>
              <Box>
                <Flex alignItems='start' pt={4}>
                  <Box align='start'>
                    <Text color='mediumbrown'>Total this month</Text>
                    <Text fontSize='22px' fontWeight='bold'>
                      {" "}
                      $478.33
                    </Text>
                  </Box>
                  <Spacer />
                  <Box align='end' pt={3}>
                    <Text fontSize='12px' fontWeight='bold'>
                      +2.4%
                    </Text>
                    <Text color='mediumbrown'>from last month</Text>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
}
