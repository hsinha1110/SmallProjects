import React from 'react';
import { View, Text } from 'react-native';

import { NotesProps } from '../../types';

interface AllNotesProps {
  notes: NotesProps[];
  setNotes: React.Dispatch<React.SetStateAction<NotesProps[]>>;
}

const AllNotes = ({ notes, setNotes }: AllNotesProps) => {
  return (
    <View>
      <Text>All Notes</Text>

      <Text>Total Notes: {notes.length}</Text>
    </View>
  );
};

export default AllNotes;
