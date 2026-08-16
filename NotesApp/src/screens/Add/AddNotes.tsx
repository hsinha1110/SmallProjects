import React, { useEffect, useState } from 'react';
import { Switch, Text, View } from 'react-native';

import { BackwardIcon, Cog6ToothIcon } from 'react-native-heroicons/outline';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import CustomInput from '../../components/Input/CustomInput';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import { NotesProps } from '../../types';
import styles from './styles';

import Routes from '../../navigation/Routes';
import { AppStackParamList } from '../../navigation/types';

interface AddNotesProps {
  notes: NotesProps[];
  setNotes: React.Dispatch<React.SetStateAction<NotesProps[]>>;
}

type NavigationProp = NativeStackNavigationProp<AppStackParamList>;

type AddNotesRouteProp = RouteProp<AppStackParamList, Routes.ADD_NOTES>;

const AddNotes = ({ notes, setNotes }: AddNotesProps) => {
  const navigation = useNavigation<NavigationProp>();

  const route = useRoute<AddNotesRouteProp>();

  const noteId = route.params?.noteId;
  const editingNotes = noteId
    ? notes.find(item => item.id === noteId)
    : undefined;

  const editingMode = !!editingNotes;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [titleError, setTitleError] = useState('');

  const [descriptionError, setDescriptionError] = useState('');

  useEffect(() => {
    if (editingNotes) {
      setTitle(editingNotes.title);
      setDescription(editingNotes.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editingNotes]);

  const addNotes = () => {
    let isValid = true;

    setTitleError('');
    setDescriptionError('');

    // Title validation
    if (!title.trim()) {
      setTitleError('Please enter title');
      isValid = false;
    }

    // Description validation
    if (!description.trim()) {
      setDescriptionError('Please enter description');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    // EDIT
    if (noteId !== undefined) {
      setNotes(prevNotes =>
        prevNotes.map(note =>
          note.id === noteId
            ? {
                ...note,
                title: title.trim(),
                description: description.trim(),
              }
            : note,
        ),
      );
    }

    // ADD
    else {
      const newNote: NotesProps = {
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
        date: new Date(),
        pinned: false,
        noteId: noteId,
      };

      setNotes(prevNotes => [...prevNotes, newNote]);

      console.log('New Note:', newNote);
    }

    navigation.navigate(Routes.HOME);
  };

  return (
    <View style={styles.container}>
      <Header
        title={editingMode ? 'Edit Note' : 'Add Notes'}
        iconRight={Cog6ToothIcon}
        iconLeft={BackwardIcon}
        onRightPress={() => {
          // Settings
        }}
        onLeftPress={() => {
          navigation.goBack();
        }}
      />

      {/* Title */}
      <CustomInput
        label="Title"
        placeholder="Enter title"
        value={title}
        onChangeText={text => {
          setTitle(text);

          if (text.trim()) {
            setTitleError('');
          }
        }}
        error={titleError}
      />

      {/* Description */}
      <CustomInput
        label="Description"
        placeholder="Enter description"
        value={description}
        multiline
        numberOfLines={8}
        textAlignVertical="top"
        onChangeText={text => {
          setDescription(text);

          if (text.trim()) {
            setDescriptionError('');
          }
        }}
        style={styles.descriptionInput}
        error={descriptionError}
      />

      {/* Save / Update */}
      <View style={styles.buttonContainer}>
        <Button
          title={noteId !== undefined ? 'Update Note' : 'Save Note'}
          onPress={addNotes}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default AddNotes;
