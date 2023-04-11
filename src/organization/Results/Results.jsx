import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    overflow: "auto",
    padding: theme.spacing(2),
  },
  card: {
    marginBottom: theme.spacing(3),
  },
  table: {
    marginTop: theme.spacing(2),
  },
}));

function Results({ list }) {
  const classes = useStyles();
  const [students, setStudents] = useState([
    {
      name: "John Smith",
      email: "john.smith@example.com",
      score: 78.5,
    },
    {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      score: 92.0,
    },
    // add more students here
  ]);

  // Sort students by score in descending order
  const sortedStudents = [...students].sort((a, b) => b.score - a.score);

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title="Student List" />
        <Divider />
        <CardContent>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Score (%)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>
                    <Typography variant="body1">{student.score}%</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default Results;
