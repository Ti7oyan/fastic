import { Box, createStyles, Text } from '@mantine/core';
import { MdBolt } from 'react-icons/md';

const useStyles = createStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '.5em',
    position: 'fixed',
    bottom: 0,
    backgroundColor: theme.colors.dark[7],
  },

  fastic: {
    display: 'flex',
    color: theme.colors.orange[6],
  },
}));

const Footer = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.footer}>
      <Text className={classes.fastic}>
        Fastic
        <MdBolt style={{
          alignSelf: 'center',
        }}
        />
      </Text>

      <Text color="gray">
        - Ticiano Morvan
      </Text>
    </Box>
  );
};

export default Footer;
