import React, { useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { Cog6ToothIcon, PlusIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/types';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Button from '../../components/Button/Button';
import Routes from '../../navigation/Routes';

import styles from './styles';
import { NotesProps } from '../../types';

type NavigationProp = NativeStackNavigationProp<AppStackParamList>;
interface HomeProps {
  notes: NotesProps[];
}

const Home = ({ notes }: HomeProps) => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const filteredNotes = notes.filter(item => {
    const query = search.trim().toLowerCase();

    return (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });
  const renderItem = ({ item }: { item: NotesProps }) => {
    const handleNavigation = () => {
      navigation.navigate(Routes.DETAILS, { noteId: item.id });
    };

    return (
      <Pressable onPress={handleNavigation} style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.description}</Text>
        <Text style={styles.date}>
          {item.date.toLocaleString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
          })}
        </Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header
          title="Notes"
          subtitle="Your thoughts, organized."
          iconRight={Cog6ToothIcon}
          onRightPress={() => {
            // Settings
          }}
        />

        <View style={styles.searchContainer}>
          <Search
            value={search}
            onChangeText={setSearch}
            placeholder="Search notes..."
          />
        </View>

        {/* All notes */}
        <FlatList
          data={filteredNotes}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={
            notes.length === 0 ? styles.emptyList : styles.listContent
          }
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No notes found</Text>
            </View>
          }
        />
      </View>

      <Button
        style={styles.fab}
        icon={<PlusIcon size={30} color="#FFFFFF" />}
        onPress={() => {
          navigation.navigate(Routes.ADD_NOTES, {});
        }}
      />
    </View>
  );
};

export default Home;
