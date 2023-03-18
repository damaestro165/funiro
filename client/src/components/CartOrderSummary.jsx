import {
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify='space-between' fontSize='sm'>
      <Text fontWeight='medium' color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight='medium'>{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = ({ subTotal }) => {
  const user = useSelector((state) => state.user.user);

  const shippingTax = subTotal >= 100 ? 10 : subTotal >= 1000 ? 100 : 0;
  return (
    <Stack spacing='8' borderWidth='1px' rounded='lg' padding='8' width='full'>
      <Heading size='md'>Order Summary</Heading>
      <Stack spacing='6'>
        <OrderSummaryItem label='Subtotal' value={subTotal} />
        <OrderSummaryItem label='Shipping + Tax' value={shippingTax}>
          <Link href='#' textDecor='underline'>
            Calculate shipping
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label='Coupon Code'>
          <Input width='8rem' />
        </OrderSummaryItem>
        <Flex justify='space-between'>
          <Text fontSize='lg' fontWeight='semibold'>
            Total
          </Text>
          <Text fontSize='xl' fontWeight='extrabold'>
            $ {subTotal + shippingTax}
          </Text>
        </Flex>
      </Stack>
      <Stack w='full'>
        {user === null ? (
          <Link href='/login'>
            <Button
              colorScheme='blue'
              size='lg'
              fontSize='md'
              rightIcon={<FaArrowRight />}
              w='full'
            >
              Checkout
            </Button>
          </Link>
        ) : (
          <Link href='/'>
            <Button
              colorScheme='blue'
              size='lg'
              fontSize='md'
              rightIcon={<FaArrowRight />}
              w='full'
            >
              Checkout
            </Button>
          </Link>
        )}
      </Stack>
    </Stack>
  );
};
