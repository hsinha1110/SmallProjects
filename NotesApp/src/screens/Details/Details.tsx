import React from 'react';
import { Text, View } from 'react-native';

import { BackwardIcon, Cog6ToothIcon } from 'react-native-heroicons/outline';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import CustomSafeAreaView from '../../components/SafeAreaView/CustomSafeAreaView';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import Routes from '../../navigation/Routes';
import { AppStackParamList } from '../../navigation/types';
import { NotesProps } from '../../types';

import styles from './styles';

type NavigationProp = NativeStackNavigationProp<AppStackParamList>;

type DetailsRouteProp = RouteProp<AppStackParamList, Routes.DETAILS>;

interface DetailsProps {
  notes: NotesProps[];

  setNotes: React.Dispatch<React.SetStateAction<NotesProps[]>>;
}

const Details = ({ notes, setNotes }: DetailsProps) => {
  const navigation = useNavigation<NavigationProp>();

  const route = useRoute<DetailsRouteProp>();

  // Details route me noteId required hai
  const { noteId } = route.params;

  const note = notes.find(item => item.id === noteId);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleDelete = () => {
    setNotes(prevNotes => prevNotes.filter(item => item.id !== noteId));

    navigation.navigate(Routes.HOME);
  };

  const handleEdit = () => {
    navigation.navigate(Routes.ADD_NOTES, {
      noteId,
    });
  };

  const handlePinNotes = () => {
    setNotes(prevNotes =>
      prevNotes.map(item =>
        item.id === noteId
          ? {
              ...item,
              pinned: !item.pinned,
            }
          : item,
      ),
    );
  };

  if (!note) {
    return (
      <View style={styles.container}>
        <Header
          title="Note Details"
          iconLeft={BackwardIcon}
          iconRight={Cog6ToothIcon}
          onLeftPress={handleBack}
          onRightPress={() => {}}
        />

        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Note not found</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header
        title="Note Details"
        iconLeft={BackwardIcon}
        iconRight={Cog6ToothIcon}
        onLeftPress={handleBack}
        onRightPress={() => {}}
      />

      {/* Note Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{note.title}</Text>

        <View style={styles.divider} />

        <Text style={styles.description}>{note.description}</Text>
      </View>

      {/* Bottom Actions */}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <Button
            title="Edit"
            icon={<Text>✏️</Text>}
            onPress={handleEdit}
            style={styles.actionButton}
          />

          <Button
            title="Delete"
            icon={<Text>🗑️</Text>}
            onPress={handleDelete}
            style={styles.actionButton}
          />
        </View>
      </View>
    </View>
  );
};

export default Details;
