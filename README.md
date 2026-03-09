# Task Tracker

A small mobile task management app built with React Native, Expo, and TypeScript.

## Overview

Task Tracker lets you:

- Create, complete, and filter tasks (All / Active / Completed)
- Persist tasks locally so they survive app restarts
- Scope tasks per user so multiple accounts work independently
- Walk through an onboarding screen on first launch, then log in or sign up

## Setup

**Prerequisites:** Node.js 18+, npm, Expo Go (iOS/Android) or a simulator

```bash
git clone <repo-url>
cd task-tracker-rn
npm install
npx expo start
```

Scan the QR code with Expo Go, or press `i` for iOS simulator / `a` for Android emulator.

## Libraries and rationale

| Library | Why |
|---|---|
| `expo-router` | File-based navigation; reduces boilerplate and makes route structure explicit |
| `nativewind` + `tailwindcss@3` | Utility-first styling via `className`; design tokens map 1:1 to Tailwind classes |
| `@react-native-async-storage/async-storage` | Simple key-value local persistence; no native linking required |
| `expo-splash-screen` | Controlled splash hiding after session restore, prevents layout flash |
| `react-native-safe-area-context` | Correct inset handling on notched and gesture-bar devices |
| `react-native-screens` | Required peer dep of expo-router; enables native navigation primitives |
| `clsx` + `tailwind-merge` | `cn()` helper for conditional class composition without duplicates |
| `expo-linking` / `expo-constants` | expo-router peer requirements for deep-link and env handling |

## Architecture

```
app/               expo-router file-based routes (thin wrappers only)
screens/           actual screen components
components/        shared UI components (ui/ for primitives)
context/           Context + useReducer state (task/, user/)
hooks/             context accessor hooks, use-onboarding
storage/           AsyncStorage read/write helpers
api/               services (mock) and hook wrappers
_data/             local mock data used by services
types/             TypeScript interfaces
helpers/           action type constants
constants/         design tokens (Colors, Typography, Spacing, Radius)
lib/               cn() utility
```

## State management

User and task state are managed with Context + `useReducer` (no external state library). `UserState` restores the session from AsyncStorage on mount and hides the splash screen once loading completes. `TaskState` is only mounted when a user is present, and uses a per-user storage key so tasks are correctly scoped.

## Known limitations

- **Fonts:** Helvetica is iOS-only. The app uses the system font (`System`) which maps to San Francisco on iOS and Roboto on Android. For full cross-platform parity, `@expo-google-fonts/inter` can be installed and loaded via `useFonts`.
- **Authentication:** Login and signup are fully mocked (no backend). Any email and a password of 6+ characters will work.

## What I would improve with more time

- Replace mock auth with a real API (e.g. Supabase or Firebase Auth)
- Add task editing and swipe-to-delete
- Add due dates and reminder notifications with `expo-notifications`
- Add animations with `react-native-reanimated` (task completion, list transitions)
- Write unit tests with Jest + React Native Testing Library
- Add Detox end-to-end tests for the auth flow
- Support dark mode via `useColorScheme`
- Replace emoji icons with a proper icon library (e.g. `@expo/vector-icons`)
