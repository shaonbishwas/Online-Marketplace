import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function PostedJob({ job }) {
  const {
    title,
    category,
    description,
    ownerEmail,
    minimumPrice,
    maximumPrice,
    postedDate,
    expiryDate,
  } = job;
  return (
    <Box sx={{ minWidth: 275 }} className="">
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {category}
            </Typography>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Job Owner : {ownerEmail}
            </Typography>
            <div className="flex gap-3">
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <p className="text-sm">Price Range</p> ${minimumPrice}-$
                {maximumPrice}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <p className="text-sm">Posted Date</p> {postedDate}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <p className="text-sm">DeadLine</p> {expiryDate}
              </Typography>
            </div>
            <Typography variant="body2">
              {description.slice(0, 100)}...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large"  >
              Update
            </Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
PostedJob.propTypes = {
  job: PropTypes.object,
};
