import {
  GridItem, Button, Link, Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';

type ToolCardProps = {
  title: string;
  description: string;
  link: string;
}

const ToolCard = ({ title, description, link }: ToolCardProps) => (
  <GridItem
    width="100%"
    backgroundColor="blackAlpha.300"
    borderRadius={10}
    padding={6}
    maxWidth="xs"
    data-project={title}
    textAlign={['center', 'left']}
  >
    <Text
      fontSize="xl"
      fontWeight="bold"
      color="orange.400"
    >
      {title}
    </Text>
    <Text>{description}</Text>
    <Link
      as={RouterLink}
      to={link}
      _hover={{ textDecorationStyle: 'none' }}
    >
      <Button
        marginBlockStart={4}
        colorScheme="gray"
        color="orange.400"
        rightIcon={<MdArrowForward />}
      >
        Empezar
      </Button>
    </Link>
  </GridItem>
);

export default ToolCard;
