import React from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTasksContext } from '@/hooks/use-tasks-context';
import { useUserContext } from '@/hooks/use-user-context';
import { FilterTabs } from '@/components/filter-tabs';
import { TaskItem } from '@/components/task-item';
import { TaskInput } from '@/components/task-input';
import { CategoryCard } from '@/components/category-card';
import { EmptyState } from '@/components/empty-state';
import { mockCategories } from '@/_data/categories';
import { Task } from '@/types/task';

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
    <SafeAreaView className="flex-1 bg-offwhite">
      <Header userName={user?.name ?? ''} onLogout={handleLogout} />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <CategoriesSection tasks={tasks} />
        <TaskListSection
          filteredTasks={filteredTasks}
          filter={filter}
          loading={loading}
          onAdd={addTask}
          onToggle={toggleTask}
          onFilterChange={setFilter}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Sub-components ---

function Header({ userName, onLogout }: { userName: string; onLogout: () => void }) {
  const firstName = userName.split(' ')[0];
  return (
    <View className="flex-row items-center justify-between px-5 py-4 bg-offwhite">
      <View>
        <Text className="text-xl font-bold text-primary">Home</Text>
        <Text className="text-sm text-muted">Hello, {firstName || 'there'}</Text>
      </View>
      <Pressable
        onPress={onLogout}
        className="w-10 h-10 rounded-full bg-primary items-center justify-center"
        accessibilityLabel="Log out"
        accessibilityHint="Tap to sign out of your account"
      >
        <Text className="text-cream text-base font-bold">
          {(firstName?.[0] ?? 'U').toUpperCase()}
        </Text>
      </Pressable>
    </View>
  );
}

function CategoriesSection({ tasks }: { tasks: Task[] }) {
  const taskCountByCategory = (categoryId: string) =>
    tasks.filter((t) => t.categoryId === categoryId).length;

  return (
    <View className="mb-4">
      <Text className="text-base font-semibold text-primary px-5 mb-3">Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        {mockCategories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            taskCount={taskCountByCategory(category.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

interface TaskListSectionProps {
  filteredTasks: Task[];
  filter: import('@/types/task').TaskFilter;
  loading: boolean;
  onAdd: (title: string) => Promise<void>;
  onToggle: (id: string) => Promise<void>;
  onFilterChange: (filter: import('@/types/task').TaskFilter) => void;
}

function TaskListSection({
  filteredTasks,
  filter,
  loading,
  onAdd,
  onToggle,
  onFilterChange,
}: TaskListSectionProps) {
  return (
    <View className="px-5">
      <Text className="text-base font-semibold text-primary mb-3">My Tasks</Text>
      <FilterTabs activeFilter={filter} onFilterChange={onFilterChange} />
      <View className="mt-4">
        <TaskInput onAdd={onAdd} />
      </View>

      {loading ? (
        <View className="py-10 items-center">
          <ActivityIndicator size="large" color="#242424" />
        </View>
      ) : filteredTasks.length === 0 ? (
        <EmptyState />
      ) : (
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TaskItem task={item} onToggle={onToggle} />}
          scrollEnabled={false}
          contentContainerStyle={{ paddingTop: 4 }}
        />
      )}
    </View>
  );
}
