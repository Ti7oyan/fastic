import { Dispatch, SetStateAction, useContext } from 'react';
import { Modal } from '@mantine/core';
import { ItemsContext } from '$/bcss';

type CreateAccountProps = {
  isOpened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

const CreateAccount = ({ isOpened, setOpened }: CreateAccountProps) => {
  const items = useContext(ItemsContext);

  return (
    <Modal
      opened={isOpened}
      onClose={() => setOpened(false)}
    >
      <p>Create account</p>
    </Modal>
  );
};

export default CreateAccount;
