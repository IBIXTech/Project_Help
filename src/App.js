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
  CircularProgress,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
  typography: { h4: { fontWeight: 600 } },
});

const ProjectSubmissionTab = ({
  projectForm,
  handleProjectFormChange,
  handleProjectSubmit,
  loading,
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

      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{ mt: 3 }}
        disabled={loading}
      >
        {loading ? (
          <CircularProgress size={24} sx={{ color: "white" }} />
        ) : (
          "Submit Project"
        )}
      </Button>
    </Box>
  </Paper>
);

const QueryTab = ({
  queryForm,
  handleQueryFormChange,
  handleQuerySubmit,
  loading,
}) => (
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

      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{ mt: 3 }}
        disabled={loading}
      >
        {loading ? (
          <CircularProgress size={24} sx={{ color: "white" }} />
        ) : (
          "Submit Query"
        )}
      </Button>
    </Box>
  </Paper>
);

const HelpTab = ({
  helpForm,
  handleHelpFormChange,
  handleHelpSubmit,
  loading,
}) => (
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

      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{ mt: 3 }}
        disabled={loading}
      >
        {loading ? (
          <CircularProgress size={24} sx={{ color: "white" }} />
        ) : (
          "Submit Help Request"
        )}
      </Button>
    </Box>
  </Paper>
);

function App() {
  const [tabValue, setTabValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const [loadingProject, setLoadingProject] = useState(false);
  const [loadingQuery, setLoadingQuery] = useState(false);
  const [loadingHelp, setLoadingHelp] = useState(false);

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

  const [queryForm, setQueryForm] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    query: "",
    queryType: "",
  });

  const [helpForm, setHelpForm] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    problem: "",
  });

  const handleTabChange = (e, newValue) => setTabValue(newValue);
  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handleProjectFormChange = (e) =>
    setProjectForm({ ...projectForm, [e.target.name]: e.target.value });
  const handleQueryFormChange = (e) =>
    setQueryForm({ ...queryForm, [e.target.name]: e.target.value });
  const handleHelpFormChange = (e) =>
    setHelpForm({ ...helpForm, [e.target.name]: e.target.value });

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setLoadingProject(true);
    try {
      const res = await fetch(process.env.REACT_APP_PS, {
        method: "POST",
        body: JSON.stringify(projectForm),
      });
      if (res.ok) {
        setOpenDialog(true);
      } else throw new Error("Submission failed");
    } catch {
      setSnackbarMessage("Error submitting project. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
    setLoadingProject(false);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSnackbarMessage("Project submitted successfully!");
    setSnackbarSeverity("success");
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

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    setLoadingQuery(true);
    try {
      const res = await fetch(process.env.REACT_APP_QF, {
        method: "POST",
        body: JSON.stringify(queryForm),
      });
      if (res.ok) {
        setSnackbarMessage("Query submitted successfully!");
        setSnackbarSeverity("success");
        setQueryForm({
          name: "",
          mobileNumber: "",
          email: "",
          query: "",
          queryType: "",
        });
      } else throw new Error("Submission failed");
    } catch {
      setSnackbarMessage("Error submitting query. Please try again.");
      setSnackbarSeverity("error");
    }
    setSnackbarOpen(true);
    setLoadingQuery(false);
  };

  const handleHelpSubmit = async (e) => {
    e.preventDefault();
    setLoadingHelp(true);
    try {
      const res = await fetch(process.env.REACT_APP_HF, {
        method: "POST",
        body: JSON.stringify(helpForm),
      });
      if (res.ok) {
        setSnackbarMessage("Help request submitted successfully!");
        setSnackbarSeverity("success");
        setHelpForm({
          name: "",
          mobileNumber: "",
          email: "",
          problem: "",
        });
      } else throw new Error("Submission failed");
    } catch {
      setSnackbarMessage("Error submitting help request. Please try again.");
      setSnackbarSeverity("error");
    }
    setSnackbarOpen(true);
    setLoadingHelp(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              IBIX Student Portal
            </Typography>
          </Toolbar>
        </AppBar>

        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Project Submission" />
          <Tab label="Query" />
          <Tab label="Help" />
        </Tabs>

        <Box sx={{ p: 3 }}>
          {tabValue === 0 && (
            <ProjectSubmissionTab
              projectForm={projectForm}
              handleProjectFormChange={handleProjectFormChange}
              handleProjectSubmit={handleProjectSubmit}
              loading={loadingProject}
            />
          )}
          {tabValue === 1 && (
            <QueryTab
              queryForm={queryForm}
              handleQueryFormChange={handleQueryFormChange}
              handleQuerySubmit={handleQuerySubmit}
              loading={loadingQuery}
            />
          )}
          {tabValue === 2 && (
            <HelpTab
              helpForm={helpForm}
              handleHelpFormChange={handleHelpFormChange}
              handleHelpSubmit={handleHelpSubmit}
              loading={loadingHelp}
            />
          )}
        </Box>

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

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={4000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={snackbarSeverity}
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
