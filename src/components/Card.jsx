import { Card, Image, CardBody } from '@chakra-ui/react';
import React from 'react';

function CardTips({ data }) {
  return (
    <Card>
      <Image src={data.image} w='245px' h='265px' />
      <CardBody bg='#F4F5F7'>
        <Stack spacing={3}>
          <Heading fontSize='xl'>{data.heading}</Heading>
          <Text color='#898989'>{data.text}</Text>
          <Flex>
            <Text fontSize='xl' fontWeight='bold'>
              {data.price}
            </Text>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CardTips;
