import React from "react";
import { Modal, View, TouchableOpacity } from "react-native";
import { CloseButton, ModalContainer, ModalContent, Title } from "./styles"; // Importando estilos
import { Input } from "@components/Input"; // Ajuste conforme necessário
import { Button } from "@components/Button"; // Ajuste conforme necessário
import { Feather } from "@expo/vector-icons";

interface UpdateModalProps {
  visible: boolean;
  onClose: () => void;
}

export const UpdateModal: React.FC<UpdateModalProps> = ({
  visible,
  onClose,
}) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <ModalContainer>
        <ModalContent>
          <CloseButton onPress={onClose}>
            <Feather name="x" size={30} color="grey" />
          </CloseButton>

          <Title>Alterar senha</Title>

          <View style={{ flexDirection: "column", marginBottom: 20 }}>
            <Input placeholder="Digite a senha atual" label="Senha atual" />
            <Input placeholder="Digite a nova senha" label="Nova senha" />
          </View>

          <Button
            title="Confirmar"
            onPress={() => {
              /* Lógica para confirmar */
            }}
          />
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};
