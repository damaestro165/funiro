import { Card, Image, CardBody, Stack, Text } from '@chakra-ui/react';
import React from 'react';

function CardTips({ data }) {
  return (
    <Card flexShrink={0} boxShadow='1xl' h='full'>
      <Image src={data.image} w='350px' h='251px' />
      <CardBody>
        <Stack spacing={3}>
          <Text color='#898989'>{data.text}</Text>
          <Text fontSize='xl' fontWeight='bold'>
            {data.date}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CardTips;
