import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { NewCourt } from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function ButtonNew() {
    return (
        <NewCourt>
            <Ionicons name="add" size={24} color="#FFFFFF" />
        </NewCourt>
    );
}