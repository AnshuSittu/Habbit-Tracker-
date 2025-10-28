import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "grid",
        gap: { xs: 2, md: 3 },
        gridTemplateColumns: { xs: "1fr", md: "2fr 1fr auto" },
        alignItems: "center",
        backgroundColor: "rgba(247, 248, 255, 0.9)",
        borderRadius: 3,
        p: { xs: 2.5, md: 3 },
        border: "1px solid",
        borderColor: "rgba(79,70,229,0.16)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
      }}
    >
      <TextField
        label="Habit name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="e.g. Morning run"
        fullWidth
        variant="outlined"
        size="small"
      />
      <FormControl fullWidth size="small">
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
        sx={{
          minHeight: { xs: 48, md: 40 },
          px: { xs: 3.5, md: 4 },
          borderRadius: 2,
          fontWeight: 600,
          textTransform: "none",
          background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
          boxShadow: "0 10px 24px rgba(79, 70, 229, 0.38)",
          "&:hover": {
            background: "linear-gradient(135deg, #4338ca 0%, #6d28d9 100%)",
            boxShadow: "0 12px 28px rgba(79, 70, 229, 0.45)",
          },
        }}
      >
        Add Habit
      </Button>
    </Box>
  );
}

export default AddHabitForm;
