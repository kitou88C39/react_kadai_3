//addTodos　受取人
//count 送金者の残高
//num　送金者の入金及び出勤額
//balance 受取人の残高
import React, { useState, useRef } from "react";
import Modal from "react-modal";
import {
  Box,
  TextField,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;
  const [count, setCount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [num, setNum] = useState(100);
  const [comment, setComment] = useState("");
  const [open, setOpen] = React.useState(false);
  const [IsOpen, setIsOpen] = React.useState(false);
  const [targetTodo, setTargetTodo] = React.useState(null);

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  const onCountDown = () => {
    setCount(count - num);
  };

  const onBalanceUp = () => {
    setBalance(balance + num);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClickTransferButton = () => {
    onCountDown();
    onBalanceUp();
  };
  // 対象の受取人のWalletダイアログ
  const addTodoWalletDialog = ({ isOpen, addTodo, handleClose }) => {
    if (!addTodo) return null;
    return (
      <Modal
        className="wallet"
        isOpen={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {addTodo.comment}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            残高 : {addTodo.balance} 円
          </Typography>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    );
  };

  // 対象の受取人への送金ダイアログ
  const addTodoTransferDialog = ({
    open,
    addTodo,
    num,
    setNum,
    handleClickClose,
    handleClickTransferButton,
  }) => {
    if (!addTodo) return null;
    return (
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>{addTodo.comment}</DialogTitle>
        <DialogContent>
          <DialogContentText>残高: {addTodo.balance} 円</DialogContentText>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              className="balance"
              id="outlined-basic"
              label="Enter money(振込金額)"
              variant="outlined"
              value={num}
              onChange={(e) => setNum(Number(e.target.value))}
            />
          </Box>
        </DialogContent>
        <ButtonGroup
          variant="outlined"
          color="primary"
          aria-label="outlined primary button group"
        ></ButtonGroup>
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClickClose}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClickTransferButton}
            variant="outlined"
            color="primary"
          >
            振込
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <div className="balance-list">
      <li key={item.id} className="card">
        <textarea
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        />
        <div className="btns">
          <Button
            className="wallet"
            variant="outlined"
            color="primary"
            onClick={() => changeFocus()}
          >
            walletを見る
          </Button>
          <Button
            className="sendmoney"
            variant="outlined"
            color="primary"
            onClick={() => completeTodo(item.id)}
          >
            送金
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => removeTodo(item.id)}
          >
            削除
          </Button>
          {""}
        </div>
        {item.completed && <span className="completed">done</span>}
      </li>
      <addTodoWalletDialog
        isOpen={IsOpen}
        todo={targetTodo}
        handleClose={handleClose}
      />
      <addTodoTransferDialog
        open={open}
        todo={targetTodo}
        num={num}
        setNum={setNum}
        handleClickClose={handleClickClose}
        handleClickTransferButton={handleClickTransferButton}
      />
    </div>
  );
};

export default TodoItem;
