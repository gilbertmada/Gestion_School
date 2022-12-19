import { Button, Dialog, Grid } from '@material-ui/core';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import { FC } from 'react';
import useStyles from './style';

const DialogContent = withStyles(() => ({
  root: {
    padding: '15px',
  },
}))(MuiDialogContent);

const DeleteTotalModal: FC<{
  isOpen: boolean; 
  handleCloseDeleteModal: any;
  deleteData: any;
}> = ({ isOpen, handleCloseDeleteModal, deleteData }) => {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        onClose={handleCloseDeleteModal}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
        classes={{ paper: classes.confirmModal }}>
        <DialogContent>
          <Grid container={true} direction="column" className={classes.textCenter}>
            <Grid item={true}>
              <AddAlertIcon fontSize="large" className={classes.IconColor} />
            </Grid>
            <Grid item={true}>
              <p>Voulez-vous vraiment Supprimer ?</p>
            </Grid>

            <Grid item={true}>
              <Grid container={true} direction="row" justify="center">
                <Grid item={true}>
                  <Button size="small" classes={{ label: classes.confirmBtn }} onClick={deleteData}>
                    Oui
                  </Button>
                </Grid>
                <Grid item={true}>
                  <Button
                    size="small"
                    classes={{ label: classes.confirmBtn }}
                    onClick={handleCloseDeleteModal}>
                    Non
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteTotalModal;
