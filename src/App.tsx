import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import type { RootState } from "./store/store";
import {
  Box,
  Chip,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AddHabitForm from "./components/add-habit-form";
import HabitList from "./components/habit-list";

const DashboardLayout: React.FC = () => {
  const habits = useSelector((state: RootState) => state.habits.habits);
  const totalHabits = habits.length;
  const weeklyHabits = habits.filter(
    (habit) => habit.frequency === "weekly"
  ).length;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #eef2ff 0%, #f8fafc 55%, #e0f2fe 100%)",
        py: { xs: 6, md: 9 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 4, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
              gap: { xs: 2.5, md: 3 },
            }}
          >
            <Stack spacing={1.5}>
              <Chip
                label="Your daily momentum hub"
                color="primary"
                variant="outlined"
                sx={{ alignSelf: { xs: "flex-start", md: "flex-start" } }}
              />
              <Typography
                component="h1"
                variant="h3"
                sx={{
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: "text.primary",
                }}
              >
                Habit Tracker
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ maxWidth: 520 }}
              >
                Plan routines, celebrate streaks, and keep every habit in sight
                with a calm dashboard built for focus.
              </Typography>
            </Stack>

            <Paper
              variant="outlined"
              sx={{
                px: 3,
                py: 2.5,
                borderRadius: 3,
                minWidth: { md: 260 },
                boxShadow: "0 18px 42px rgba(79, 70, 229, 0.12)",
                background:
                  "linear-gradient(140deg, rgba(79, 70, 229, 0.12) 0%, rgba(255,255,255,0.88) 60%, rgba(236, 233, 254, 0.9) 100%)",
              }}
            >
              <Stack spacing={1.5}>
                <Typography variant="subtitle2" color="text.secondary">
                  Snapshot
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  divider={<Divider flexItem orientation="vertical" />}
                >
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      {totalHabits}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Active habits
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      {weeklyHabits}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Weekly goals
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Paper>
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 2.5, md: 3.5 },
              borderRadius: 3,
              backgroundColor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              boxShadow: "0 24px 40px rgba(15, 23, 42, 0.12)",
            }}
          >
            <Stack spacing={{ xs: 3, md: 4 }}>
              <AddHabitForm />
              <HabitList />
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

function App() {
  return (
    <>
      <Provider store={store}>
        <DashboardLayout />
      </Provider>
    </>
  );
}

export default App;
