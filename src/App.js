import "./App.css";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  TextField,
  Button,
  Paper,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
});

// Move tab components outside the main App component to prevent unnecessary re-renders
const ProjectSubmissionTab = ({
  projectForm,
  handleProjectFormChange,
  handleProjectSubmit,
}) => (
  <Paper elevation={3} sx={{ p: 4, maxWidth: 800, mx: "auto", mt: 3 }}>
    <Typography
      variant="h5"
      gutterBottom
      sx={{ fontWeight: "bold", color: "primary.main", mb: 3 }}
    >
      Student Project Submission
    </Typography>

    <Box component="form" onSubmit={handleProjectSubmit}>
      <TextField
        fullWidth
        label="Student Name"
        name="studentName"
        value={projectForm.studentName}
        onChange={handleProjectFormChange}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="Mobile Number"
        name="mobileNumber"
        value={projectForm.mobileNumber}
        onChange={handleProjectFormChange}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={projectForm.email}
        onChange={handleProjectFormChange}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="Project ID"
        name="projectId"
        value={projectForm.projectId}
        onChange={handleProjectFormChange}
        margin="normal"
        required
      />

      <FormControl fullWidth margin="normal" required>
        <InputLabel>Program</InputLabel>
        <Select
          name="program"
          value={projectForm.program}
          onChange={handleProjectFormChange}
          label="Program"
        >
          <MenuItem value="TP">Tech Pro</MenuItem>
          <MenuItem value="TS">Tech Smart</MenuItem>
        </Select>
      </FormControl>

      <Typography
        variant="h6"
        sx={{ mt: 4, mb: 2, fontWeight: "bold", color: "primary.main" }}
      >
        Paste Your Code
      </Typography>

      <TextField
        fullWidth
        label="HTML Code"
        name="htmlCode"
        value={projectForm.htmlCode}
        onChange={handleProjectFormChange}
        margin="normal"
        multiline
        rows={6}
        placeholder="Paste your HTML code here..."
        required
      />

      <TextField
        fullWidth
        label="CSS Code"
        name="cssCode"
        value={projectForm.cssCode}
        onChange={handleProjectFormChange}
        margin="normal"
        multiline
        rows={6}
        placeholder="Paste your CSS code here..."
        required
      />

      <TextField
        fullWidth
        label="JavaScript Code"
        name="jsCode"
        value={projectForm.jsCode}
        onChange={handleProjectFormChange}
        margin="normal"
        multiline
        rows={6}
        placeholder="Paste your JavaScript code here..."
        required
      />

      <Button type="submit" variant="contained" size="large" sx={{ mt: 3 }}>
        Submit Project
      </Button>
    </Box>
  </Paper>
);

const QueryTab = ({ queryForm, handleQueryFormChange, handleQuerySubmit }) => (
  <Paper elevation={3} sx={{ p: 4, maxWidth: 800, mx: "auto", mt: 3 }}>
    <Typography
      variant="h5"
      gutterBottom
      sx={{ fontWeight: "bold", color: "primary.main", mb: 3 }}
    >
      Query Form
    </Typography>

    <Box component="form" onSubmit={handleQuerySubmit}>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={queryForm.name}
        onChange={handleQueryFormChange}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="Mobile Number"
        name="mobileNumber"
        value={queryForm.mobileNumber}
        onChange={handleQueryFormChange}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="Registered Email ID"
        name="email"
        type="email"
        value={queryForm.email}
        onChange={handleQueryFormChange}
        margin="normal"
        required
      />

      <FormControl fullWidth margin="normal" required>
        <InputLabel>Query Type</InputLabel>
        <Select
          name="queryType"
          value={queryForm.queryType}
          onChange={handleQueryFormChange}
          label="Query Type"
        >
          <MenuItem value="HTML">HTML</MenuItem>
          <MenuItem value="CSS">CSS</MenuItem>
          <MenuItem value="JS">JavaScript</MenuItem>
          <MenuItem value="Python">Python</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label="Mention Your Query"
        name="query"
        value={queryForm.query}
        onChange={handleQueryFormChange}
        margin="normal"
        multiline
        rows={6}
        placeholder="Describe your query in detail..."
        required
      />

      <Button type="submit" variant="contained" size="large" sx={{ mt: 3 }}>
        Submit Query
      </Button>
    </Box>
  </Paper>
);

const HelpTab = ({ helpForm, handleHelpFormChange, handleHelpSubmit }) => (
  <Paper elevation={3} sx={{ p: 4, maxWidth: 800, mx: "auto", mt: 3 }}>
    <Typography
      variant="h5"
      gutterBottom
      sx={{ fontWeight: "bold", color: "primary.main", mb: 3 }}
    >
      Help & Support
    </Typography>

    <Box component="form" onSubmit={handleHelpSubmit}>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={helpForm.name}
        onChange={handleHelpFormChange}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="Mobile Number"
        name="mobileNumber"
        value={helpForm.mobileNumber}
        onChange={handleHelpFormChange}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="Registered Email ID"
        name="email"
        type="email"
        value={helpForm.email}
        onChange={handleHelpFormChange}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="Explain Your Problem"
        name="problem"
        value={helpForm.problem}
        onChange={handleHelpFormChange}
        margin="normal"
        multiline
        rows={6}
        placeholder="Please explain your problem in detail..."
        required
      />

      <Button type="submit" variant="contained" size="large" sx={{ mt: 3 }}>
        Submit Help Request
      </Button>
    </Box>
  </Paper>
);

function App() {
  const [tabValue, setTabValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // Tab 1 - Project Submission Form State
  const [projectForm, setProjectForm] = useState({
    studentName: "",
    mobileNumber: "",
    email: "",
    projectId: "",
    program: "",
    htmlCode: "",
    cssCode: "",
    jsCode: "",
  });

  // Tab 2 - Query Form State
  const [queryForm, setQueryForm] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    query: "",
    queryType: "",
  });

  // Tab 3 - Help Form State
  const [helpForm, setHelpForm] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    problem: "",
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleProjectFormChange = (e) => {
    const { name, value } = e.target;
    setProjectForm({
      ...projectForm,
      [name]: value,
    });
  };

  const handleQueryFormChange = (e) => {
    const { name, value } = e.target;
    setQueryForm({
      ...queryForm,
      [name]: value,
    });
  };

  const handleHelpFormChange = (e) => {
    const { name, value } = e.target;
    setHelpForm({
      ...helpForm,
      [name]: value,
    });
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    if (
      !projectForm.studentName ||
      !projectForm.mobileNumber ||
      !projectForm.email ||
      !projectForm.projectId ||
      !projectForm.program ||
      !projectForm.htmlCode ||
      !projectForm.cssCode ||
      !projectForm.jsCode
    ) {
      setSnackbarMessage("Please fill all required fields");
      setSnackbarOpen(true);
      return;
    } else {
      console.log(JSON.stringify(projectForm));
      fetch(process.env.REACT_APP_PS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(projectForm),
      });
      setOpenDialog(true);
    }
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    if (
      !queryForm.name ||
      !queryForm.mobileNumber ||
      !queryForm.email ||
      !queryForm.query ||
      !queryForm.queryType
    ) {
      setSnackbarMessage("Please fill all required fields");
      setSnackbarOpen(true);
      return;
    }

    fetch(process.env.REACT_APP_QF, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(queryForm),
    });
    setSnackbarMessage("Query submitted successfully!");
    setSnackbarOpen(true);
    setQueryForm({
      name: "",
      mobileNumber: "",
      email: "",
      query: "",
      queryType: "",
    });
  };

  const handleHelpSubmit = (e) => {
    e.preventDefault();
    if (
      !helpForm.name ||
      !helpForm.mobileNumber ||
      !helpForm.email ||
      !helpForm.problem
    ) {
      setSnackbarMessage("Please fill all required fields");
      setSnackbarOpen(true);
      return;
    }

    fetch(process.env.REACT_APP_HF, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(helpForm),
    });
    setSnackbarMessage("Help request submitted successfully!");
    setSnackbarOpen(true);
    setHelpForm({
      name: "",
      mobileNumber: "",
      email: "",
      problem: "",
    });
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSnackbarMessage("Project submitted successfully!");
    setSnackbarOpen(true);
    setProjectForm({
      studentName: "",
      mobileNumber: "",
      email: "",
      projectId: "",
      program: "",
      htmlCode: "",
      cssCode: "",
      jsCode: "",
    });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              IBIX Student Portal
            </Typography>
          </Toolbar>
        </AppBar>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={tabValue} onChange={handleTabChange} centered>
            <Tab label="Project Submission" />
            <Tab label="Query" />
            <Tab label="Help" />
          </Tabs>
        </Box>

        <Box sx={{ p: 3 }}>
          {tabValue === 0 && (
            <ProjectSubmissionTab
              projectForm={projectForm}
              handleProjectFormChange={handleProjectFormChange}
              handleProjectSubmit={handleProjectSubmit}
            />
          )}
          {tabValue === 1 && (
            <QueryTab
              queryForm={queryForm}
              handleQueryFormChange={handleQueryFormChange}
              handleQuerySubmit={handleQuerySubmit}
            />
          )}
          {tabValue === 2 && (
            <HelpTab
              helpForm={helpForm}
              handleHelpFormChange={handleHelpFormChange}
              handleHelpSubmit={handleHelpSubmit}
            />
          )}
        </Box>

        {/* Success Dialog for Project Submission */}
        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogTitle>Submission Successful</DialogTitle>
          <DialogContent>
            <Typography>
              Thank you for choosing IBIX! Your project code has been received
              successfully.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>OK</Button>
          </DialogActions>
        </Dialog>

        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={4000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}

export default App;
