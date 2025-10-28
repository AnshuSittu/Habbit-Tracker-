import { Provider } from "react-redux";
import { store } from "./store/store";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import AddHabitForm from "./components/add-habit-form";
import HabitList from "./components/habit-list";

function App() {
  return (
    <>
      <Provider store={store}>
        <Box
          sx={{
            minHeight: "100vh",
            background: (theme) =>
              `linear-gradient(160deg, ${theme.palette.primary.light}10 0%, ${theme.palette.background.default} 60%, ${theme.palette.primary.light}15 100%)`,
            py: { xs: 6, md: 8 },
            px: { xs: 2, md: 3 },
          }}
        >
          <Container maxWidth="lg">
            <Paper
              elevation={6}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                boxShadow: "0 24px 56px rgba(79, 70, 229, 0.15)",
                backgroundColor: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Stack spacing={{ xs: 4, md: 5 }}>
                <Box textAlign="center">
                  <Typography
                    component="h1"
                    variant="h3"
                    sx={{ fontWeight: 700, letterSpacing: "0.04em" }}
                  >
                    Habit Tracker
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ mt: 1.5, maxWidth: 520, mx: "auto" }}
                  >
                    Build positive routines with daily and weekly goals. Track your
                    streaks and celebrate each win.
                  </Typography>
                </Box>

                <AddHabitForm />
                <HabitList />
              </Stack>
            </Paper>
          </Container>
        </Box>
      </Provider>
    </>
  );
}

export default App;
