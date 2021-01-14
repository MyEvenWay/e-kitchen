import { useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { MyState } from '../../GlobalState'

import { useStyles } from './style/orderedItems'

function OrderedItems(){
  const classes = useStyles();
  const { userBooked } = useContext( MyState )
  return (
    <List>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="./photos/header/food1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Kartoshka Fri"
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                5 x
              </Typography>
              {" $34 "}
            </>
          }
        />
      </ListItem>
    <Divider variant="inset" component="li" />

      {/* summary   */}
      <Grid container>
        <Grid className={ classes.summaryOfItems } item xs={6}>
          <Typography className={ classes.summaryOfItemsTitle }>Total:</Typography>
        </Grid>
        <Grid className={ classes.summaryOfItems } item xs={6}>
          <Typography className={ classes.summaryOfItemsTitle }> $ 20 </Typography>
        </Grid>
      </Grid>
    </List>
  )
}

export default OrderedItems