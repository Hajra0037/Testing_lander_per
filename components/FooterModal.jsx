import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const FooterModel = (props) => {
  let { title, isOpen, onClose } = props;
  return (
    <>
      <Modal
        size={"xl"}
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />

          <ModalBody p={"8"}>{props.children}</ModalBody>
          <br />
        </ModalContent>
      </Modal>
    </>
  );
};

export default FooterModel;
