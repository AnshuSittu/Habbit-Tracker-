import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Box, Paper, Grid, Typography, Button, Chip, Stack } from "@mui/material";
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
        mt: 2,
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
            borderColor: "rgba(79,70,229,0.2)",
            color: "text.secondary",
            background: "linear-gradient(150deg, #f8fafc 0%, #eef2ff 100%)",
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
          spacing={{ xs: 2.5, md: 3.5 }}
          rowSpacing={{ xs: 3, md: 4 }}
        >
          {habits.map((habit) => {
            const isCompletedToday = habit.completedDates.includes(today);
            const totalCheckIns = habit.completedDates.length;

            return (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={habit.id}
                sx={{ display: "flex" }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: { xs: 3, md: 3.5 },
                    height: "100%",
                    borderRadius: 3,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2.5,
                    position: "relative",
                    border: "1px solid",
                    borderColor: alpha("#4f46e5", 0.08),
                    background:
                      "linear-gradient(165deg, rgba(255,255,255,0.97) 0%, rgba(237, 242, 255, 0.95) 100%)",
                    boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 26px 48px rgba(79, 70, 229, 0.18)",
                      zIndex: 2,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 1,
                    }}
                  >
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {habit.name}
                      </Typography>
                      <Chip
                        label={`${habit.frequency.charAt(0).toUpperCase()}${habit.frequency.slice(1)} habit`}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ mt: 1 }}
                      />
                    </Box>

                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        color: "text.secondary",
                      }}
                    >
                      {totalCheckIns} {totalCheckIns === 1 ? "check-in" : "check-ins"}
                    </Typography>
                  </Box>

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1.5}
                    sx={{ mt: "auto" }}
                    alignItems="stretch"
                  >
                    <Button
                      variant="contained"
                      startIcon={<CheckCircleIcon />}
                      sx={{
                        flexGrow: 1,
                        width: { xs: "100%", sm: "auto" },
                        textTransform: "none",
                        fontWeight: 600,
                        borderRadius: 2,
                        background: isCompletedToday
                          ? "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)"
                          : "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                        boxShadow: isCompletedToday
                          ? "0 14px 30px rgba(34, 197, 94, 0.32)"
                          : "0 14px 30px rgba(79, 70, 229, 0.28)",
                        "&:hover": {
                          background: isCompletedToday
                            ? "linear-gradient(135deg, #15803d 0%, #16a34a 100%)"
                            : "linear-gradient(135deg, #4338ca 0%, #6d28d9 100%)",
                        },
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
                        borderWidth: 2,
                        px: 2.5,
                        "&:hover": {
                          borderWidth: 2,
                          backgroundColor: alpha("#ef4444", 0.08),
                        },
                      }}
                    >
                      Remove
                    </Button>
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default HabitList;
