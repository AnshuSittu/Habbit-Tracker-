import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { addHabit } from "../store/habit-slice";

function AddHabitForm() {
  const [name, setName] = useState<string>("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(
        addHabit({
          name,
          frequency,
        })
      );
      setName("");
    }
  };

  return (
    <Stack spacing={2.5}>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          New habit
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          Set up the next routine you want to nurture.
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "grid",
          gap: { xs: 2, md: 2.5 },
          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 1fr) 220px auto",
          },
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: 2.5,
          border: "1px solid",
          borderColor: "divider",
          boxShadow: "0 12px 28px rgba(15, 23, 42, 0.08)",
          p: { xs: 2, md: 2.5 },
        }}
      >
        <TextField
          label="Habit name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Morning run"
          fullWidth
          variant="outlined"
          size="medium"
          sx={{
            backgroundColor: "background.paper",
            borderRadius: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              minHeight: 56,
            },
          }}
        />
        <FormControl
          fullWidth
          size="medium"
          sx={{
            minWidth: { md: 190 },
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              minHeight: 56,
            },
          }}
        >
          <InputLabel id="habit-frequency-label">Frequency</InputLabel>
          <Select
            labelId="habit-frequency-label"
            label="Frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            width: { xs: "100%", md: "auto" },
            px: { xs: 3, md: 5 },
            minHeight: 56,
            borderRadius: 2.5,
            fontWeight: 600,
            textTransform: "none",
            boxShadow: "none",
          }}
        >
          Add Habit
        </Button>
      </Box>
    </Stack>
  );
}

export default AddHabitForm;
