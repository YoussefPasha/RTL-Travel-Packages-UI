import React from "react";

const useDialog = () => {
  const [isOpen, setOpen] = React.useState(false);
  const close = React.useCallback(() => setOpen(false), []);
  const open = React.useCallback(() => setOpen(true), []);

  return React.useMemo(() => ({ close, open, isOpen }), [close, isOpen, open]);
};

export default useDialog;
