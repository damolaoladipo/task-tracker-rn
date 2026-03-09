import React from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useTasksContext } from '@/hooks/use-tasks-context';
import { useUserContext } from '@/hooks/use-user-context';
import { FilterTabs } from '@/components/filter-tabs';
import { TaskItem } from '@/components/task-item';
import { TaskInput } from '@/components/task-input';
import { CategoryCard } from '@/components/category-card';
import { EmptyState } from '@/components/empty-state';
import { mockCategories } from '@/_data/categories';
import { Task, TaskFilter } from '@/types/task';

export default function HomeScreen() {
  const router = useRouter();
  const { user, logout } = useUserContext();
  const { filteredTasks, filter, loading, addTask, toggleTask, setFilter, tasks } =
    useTasksContext();

  const handleLogout = async () => {
    await logout();
    router.replace('/(auth)/login');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <Header userName={user?.name ?? ''} onLogout={handleLogout} />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Filter tabs — between header and categories per Figma layout */}
        <View style={{ paddingHorizontal: 34, marginBottom: 20 }}>
          <FilterTabs activeFilter={filter} onFilterChange={setFilter} />
        </View>

        <CategoriesSection tasks={tasks} />

        <TaskListSection
          filteredTasks={filteredTasks}
          filter={filter}
          loading={loading}
          onAdd={addTask}
          onToggle={toggleTask}
          onFilterChange={setFilter}
          onSelectAll={() => filteredTasks.forEach((t) => !t.completed && toggleTask(t.id))}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Sub-components ---

function Header({ userName, onLogout }: { userName: string; onLogout: () => void }) {
  const firstName = userName.split(' ')[0];
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 34,
        paddingTop: 14,
        paddingBottom: 10,
        height: 55,
      }}
    >
      {/* Hamburger icon — 3 bars, each 14x2, cornerRadius 59, #c4c4c4, spaced 5px vertically */}
      <View style={{ width: 14, gap: 5 }}>
        {[0, 1, 2].map((i) => (
          <View
            key={i}
            style={{ width: 14, height: 2, backgroundColor: '#c4c4c4', borderRadius: 59 }}
          />
        ))}
      </View>

      <Text style={{ fontSize: 20, fontWeight: '700', color: '#000000' }}>Home</Text>

      {/* Profile avatar — 31x31, white stroke, tap to log out */}
      <Pressable
        onPress={onLogout}
        style={{
          width: 31,
          height: 31,
          borderRadius: 16,
          backgroundColor: '#242424',
          borderWidth: 2,
          borderColor: '#ffffff',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        accessibilityLabel="Log out"
        accessibilityHint="Tap to sign out"
      >
        <Text style={{ color: '#ffffff', fontSize: 12, fontWeight: '700' }}>
          {(firstName?.[0] ?? 'U').toUpperCase()}
        </Text>
      </Pressable>
    </View>
  );
}

function CategoriesSection({ tasks }: { tasks: Task[] }) {
  const countForCategory = (categoryId: string) =>
    tasks.filter((t) => t.categoryId === categoryId).length;

  return (
    <View style={{ marginBottom: 16 }}>
      {/* Section title row */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 34,
          marginBottom: 12,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: '700', color: '#000000' }}>Categories</Text>
        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
          {/* Filter icon circle — 31x31, #fafafa fill */}
          <View
            style={{
              width: 31,
              height: 31,
              borderRadius: 16,
              backgroundColor: '#fafafa',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 12, color: '#757575' }}>≡</Text>
          </View>
          {/* Add button — 50x30, #242424, cornerRadius 26 */}
          <View
            style={{
              backgroundColor: '#242424',
              borderRadius: 26,
              width: 50,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: '#ffffff', fontSize: 13, fontWeight: '700' }}>Add</Text>
          </View>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 34 }}
      >
        {mockCategories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            taskCount={countForCategory(category.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

interface TaskListSectionProps {
  filteredTasks: Task[];
  filter: TaskFilter;
  loading: boolean;
  onAdd: (title: string) => Promise<void>;
  onToggle: (id: string) => Promise<void>;
  onFilterChange: (filter: TaskFilter) => void;
  onSelectAll: () => void;
}

function TaskListSection({
  filteredTasks,
  loading,
  onAdd,
  onToggle,
  onSelectAll,
}: TaskListSectionProps) {
  return (
    <View
      style={{
        backgroundColor: '#fafafa',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        paddingHorizontal: 34,
        paddingTop: 24,
        minHeight: 400,
      }}
    >
      {/* Section header — "Task List" + "Add Task" button (101x43) */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 12,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: '700', color: '#000000' }}>Task List</Text>
        <View
          style={{
            backgroundColor: '#242424',
            borderRadius: 100,
            width: 101,
            height: 43,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: '#ffffff', fontSize: 12, fontWeight: '700' }}>Add Task</Text>
        </View>
      </View>

      {/* Divider */}
      <View style={{ height: 1, backgroundColor: '#d7d7d7', marginBottom: 16 }} />

      {/* Task input */}
      <TaskInput onAdd={onAdd} />

      {loading ? (
        <View style={{ paddingVertical: 40, alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#242424" />
        </View>
      ) : filteredTasks.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <FlatList
            data={filteredTasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TaskItem task={item} onToggle={onToggle} />}
            scrollEnabled={false}
            contentContainerStyle={{ paddingTop: 4 }}
          />

          {/* "Select All Task" button — Figma: 151x43, #242424, cornerRadius 100 */}
          <View style={{ alignItems: 'flex-end', marginTop: 12, marginBottom: 24 }}>
            <Pressable
              onPress={onSelectAll}
              style={{
                backgroundColor: '#242424',
                borderRadius: 100,
                width: 151,
                height: 43,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ color: '#ffffff', fontSize: 12, fontWeight: '700' }}>
                Select All Task
              </Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
}
