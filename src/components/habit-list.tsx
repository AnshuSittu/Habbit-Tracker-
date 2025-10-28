import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Paper,
  Divider,
  Grid,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";


const HabitList: React.FC = () => {
  const habits = useSelector((state: RootState) => state.habits.habits);
  const today = new Date().toISOString().split("T")[0];
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {habits.length === 0 ? (
        <Paper
          elevation={0}
          sx={{
            p: 4,
            textAlign: "center",
            borderRadius: 3,
            border: "1px dashed",
            borderColor: alpha("#7c3aed", 0.25),
            backgroundColor: "background.default",
            color: "text.secondary",
          }}
        >
          <Typography variant="h6" gutterBottom>
            No habits yet
          </Typography>
          <Typography variant="body2">
            Add your first habit to start tracking your progress.
          </Typography>
        </Paper>
      ) : (
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          rowSpacing={{ xs: 3.5, md: 4 }}
          sx={{ alignItems: "stretch" }}
        >
          {habits.map((habit) => {
            const isCompletedToday = habit.completedDates.includes(today);
            const totalCheckIns = habit.completedDates.length;
            const lastCompleted =
              habit.completedDates.length > 0
                ? new Date(
                    habit.completedDates[habit.completedDates.length - 1]
                  ).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                  })
                : "Not yet";

            return (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={habit.id}
                sx={{ display: "flex" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid",
                    borderColor: alpha("#0f172a", 0.08),
                    backgroundColor: "rgba(255,255,255,0.95)",
                    boxShadow: "0 20px 40px rgba(15, 23, 42, 0.12)",
                    transition:
                      "transform 0.18s ease-in-out, box-shadow 0.18s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 28px 52px rgba(79, 70, 229, 0.24)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      p: { xs: 2.5, md: 3 },
                      pb: 0,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            letterSpacing: "-0.01em",
                            color: "text.primary",
                          }}
                        >
                          {habit.name}
                        </Typography>
                        <Chip
                          label={`${habit.frequency.charAt(0).toUpperCase()}${habit.frequency.slice(1)} habit`}
                          size="small"
                          variant="outlined"
                          color="primary"
                          sx={{
                            mt: 1,
                            fontWeight: 500,
                            borderRadius: 2,
                          }}
                        />
                      </Box>

                      <Chip
                        label={
                          isCompletedToday ? "On track" : "Pending today"
                        }
                        size="small"
                        sx={{
                          fontWeight: 600,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          backgroundColor: isCompletedToday
                            ? alpha("#16a34a", 0.12)
                            : alpha("#1d4ed8", 0.12),
                          color: isCompletedToday ? "#166534" : "#1d4ed8",
                        }}
                      />
                    </Box>

                    <Stack
                      direction="row"
                      spacing={3}
                      sx={{ color: "text.secondary" }}
                    >
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 600 }}>
                          Check-ins
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600, color: "text.primary" }}
                        >
                          {totalCheckIns}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 600 }}>
                          Last marked
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600, color: "text.primary" }}
                        >
                          {lastCompleted}
                        </Typography>
                      </Box>
                    </Stack>

                    <Typography variant="body2" color="text.secondary">
                      Stay consistent by checking in whenever you complete this
                      habit.
                    </Typography>
                  </CardContent>

                  <Divider sx={{ mt: 3, opacity: 0.3 }} />

                  <CardActions
                    sx={{
                      display: "flex",
                      gap: 1.2,
                      flexWrap: "wrap",
                      alignItems: "stretch",
                      p: { xs: 2.5, md: 3 },
                      pt: { xs: 2, md: 2.5 },
                      mt: "auto",
                    }}
                  >
                    <Button
                      variant="contained"
                      color={isCompletedToday ? "success" : "primary"}
                      startIcon={<CheckCircleIcon />}
                      sx={{
                        flexGrow: 1,
                        width: { xs: "100%", sm: "auto" },
                        textTransform: "none",
                        fontWeight: 600,
                        borderRadius: 2,
                        boxShadow: "none",
                        py: 1.1,
                        px: 2.5,
                      }}
                    >
                      {isCompletedToday ? "Completed today" : "Mark completed"}
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                      sx={{
                        flexGrow: 1,
                        width: { xs: "100%", sm: "auto" },
                        textTransform: "none",
                        fontWeight: 600,
                        borderRadius: 2,
                        borderWidth: 1.5,
                        px: 2.5,
                        "&:hover": {
                          backgroundColor: alpha("#ef4444", 0.08),
                        },
                      }}
                    >
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default HabitList;
