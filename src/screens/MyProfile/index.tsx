import { BackButton } from "@components/BackButton";
import { CameraIcon, Container, ProfilePic, UserPictureArea } from "./styles";
import { MenuOption } from "@components/MenuOption";
import { Feather } from '@expo/vector-icons';
import React from "react";


export default function MyProfile() {


    return (

        <Container>
            <BackButton
                title="Opções de perfil"
            />

            <UserPictureArea>
                <ProfilePic size="large" source={require("@assets/avatar.png")} />
                <CameraIcon name="camera" size={24} color="black" />
            </UserPictureArea>
        </Container>
    )
}